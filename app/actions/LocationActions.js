import React from 'react'
import { Platform } from 'react-native'
import { updateCurrentUser } from './BasicActions'

function parseTypes(types) {
  const acceptedTypes = {
    'route': 'thoroughfare',
    'premise': 'thoroughfare',
    'natural_feature': 'thoroughfare',
    'airport': 'thoroughfare',
    'park': 'thoroughfare',
    'point_of_interest': 'thoroughfare',
    'intersection': 'thoroughfare',
    'sublocality_level_2': 'thoroughfare',
    'street_number': 'subThoroughfare',
    'sublocality_level_3': 'subThoroughfare',
    'sublocality_level_1': 'subLocality',
    'locality': 'locality',
    'administrative_area_level_2': 'subAdministrativeArea',
    'administrative_area_level_1': 'administrativeArea',
    'country': 'country',
    'postal_code': 'postalCode',
  }
  const type = types.filter(type => (
    Object.keys(acceptedTypes).indexOf(type) > -1
  ))[0]
  return acceptedTypes[type]
}

function parseAddress(address) {
  let parsedAddress = {}
  let shortThoroughfare = ""
  address.forEach(component => {
    const type = parseTypes(component.types)
    if (type) {
      parsedAddress[type] = component.long_name
      if (type === 'thoroughfare')
        shortThoroughfare = component.short_name
    }
  })
  if (parsedAddress.subAdministrativeArea && !parsedAddress.locality)
    parsedAddress.locality = parsedAddress.subAdministrativeArea
  if (parsedAddress.locality === 'Brasília' && shortThoroughfare !== "")
    parsedAddress.thoroughfare = shortThoroughfare
  return {
    ...parsedAddress,
    name: `${parsedAddress.thoroughfare}, ${parsedAddress.subThoroughfare}`
  }
}

function addressSearch(address) {
  return `${ address.thoroughfare }${ (address.subThoroughfare ? `, ${ address.subThoroughfare }` : '') }${ (address.subLocality ? ` - ${ address.subLocality }` : '') }${ (address.locality ? ` - ${ address.locality }` : '') }${ (address.administrativeArea ? ` - ${ address.administrativeArea }` : '') }${ address.country ? `, ${address.country}` : '' }`
}

export function getCoordinates() {
  return dispatch => {
    dispatch({ type: 'LOCATION_GET_COORDINATES_REQUEST' })
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        dispatch({
          type: 'LOCATION_GET_COORDINATES_SUCCESS',
          latitude,
          longitude,
        })
      },
      (error) => {
        dispatch({
          type: 'LOCATION_GET_COORDINATES_FAILURE',
          error: {id: error.code, message: error.message},
        })
      },
      {enableHighAccuracy: false, timeout: 5000, maximumAge: 20000}
    )
  }
}

export function setCoordinates(latitude, longitude) {
  return dispatch => {
    dispatch({
      type: 'LOCATION_SET_COORDINATES',
      latitude,
      longitude,
    })
  }
}

export function getAddress(latitude, longitude, complement) {
  return dispatch => {
    if (!(latitude && longitude)) {
      return dispatch({
        type: 'LOCATION_GET_ADDRESS_FAILURE',
        error: {id: 'no_coordinates', message: 'Tried to get address without coordinates'},
      })
    }
    dispatch({ type: 'LOCATION_GET_ADDRESS_REQUEST' })
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCc7bhPwBTBSxYc3QqhgET4ZUo_vS3VEqI&language=pt-BR`
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          const body = json
          const { status, results } = body
          if (status === "OK" && results && results[0]) {
            const address = {
              complement,
              ...parseAddress(results[0].address_components),
            }
            dispatch({
              type: 'LOCATION_GET_ADDRESS_SUCCESS',
              address,
            })
          } else {
            dispatch({
              type: 'LOCATION_GET_ADDRESS_FAILURE',
              error: {id: status, message: body.error_message},
            })
          }
        })
      } else {
        response.json().then(json => {
          dispatch({
            type: 'LOCATION_GET_ADDRESS_FAILURE',
            error: {id: `${response.status}`, message: json},
          })
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'LOCATION_GET_ADDRESS_FAILURE',
        error: {id: 'location_get_address_failure', message: error},
      })
    })
  }
}

export function search(searchAddress, initializeForm) {
  return dispatch => {
    const search = addressSearch(searchAddress)
    dispatch({
      type: 'LOCATION_SEARCH_REQUEST',
      search,
    })
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(search)}&key=AIzaSyCc7bhPwBTBSxYc3QqhgET4ZUo_vS3VEqI&language=pt-BR`
    fetch(url, {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          const body = json
          const { status, results } = body
          if (status === "OK" && results && results[0]) {
            const location = results[0].geometry.location
            const address = {
              complement: searchAddress.complement,
              ...parseAddress(results[0].address_components),
            }
            initializeForm && initializeForm(address)
            dispatch({
              type: 'LOCATION_SEARCH_SUCCESS',
              address: address,
              latitude: location.lat,
              longitude: location.lng,
            })
          } else {
            dispatch({
              type: 'LOCATION_SEARCH_FAILURE',
              error: {id: status, message: body.error_message},
            })
          }
        })
      } else {
        response.json().then(json => {
          dispatch({
            type: 'LOCATION_SEARCH_FAILURE',
            error: {id: `${response.status}`, message: json},
          })
        })
      }
    })
    .catch(error => {
      dispatch({
        type: 'LOCATION_SEARCH_FAILURE',
        error: {id: 'location_search_failure', message: error},
      })
    })
  }
}

export function setLocation(location, credentials) {
  const { latitude, longitude, address } = location
  return updateCurrentUser('LOCATION_SET_LOCATION', credentials, {
    reviewed_location: true,
    latitude,
    longitude,
    address_name: address.name,
    address_thoroughfare: address.thoroughfare,
    address_sub_thoroughfare: address.subThoroughfare,
    address_complement: address.complement,
    address_sub_locality: address.subLocality,
    address_locality: address.locality,
    address_sub_administrative_area: address.subAdministrativeArea,
    address_administrative_area: address.administrativeArea,
    address_country: address.country,
    address_postal_code: address.postalCode,
  })
}
