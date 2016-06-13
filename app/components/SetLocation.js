import React, { Platform, Component, View, Image } from 'react-native'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'

import UserValidators from '../validators/UserValidators'
import Colors from "../Colors"
import Form from "./Form"
import FormTextInput from "./FormTextInput"
import FormSubmit from "./FormSubmit"
import UserMap from "./UserMap"

const validators = {
  thoroughfare: UserValidators.address_thoroughfare,
  subThoroughfare: UserValidators.address_sub_thoroughfare,
  complement: UserValidators.address_complement,
  subLocality: UserValidators.address_sub_locality,
  locality: UserValidators.address_locality,
  administrativeArea: UserValidators.address_administrative_area,
  country: UserValidators.address_country,
}

class SetLocation extends Component {
  componentDidMount() {
    const { initializeForm, location: { address } } = this.props
    initializeForm(address)
  }

  handleSubmit() {
    const { dirty, values, initializeForm, onSearch, onSetLocation } = this.props
    if (dirty)
      return onSearch(values, initializeForm)
    onSetLocation()
  }

  render() {
    const { valid, dirty, fields, location: { startingUp, searching, settingLocation, latitude, longitude } } = this.props
    const { thoroughfare, subThoroughfare, complement, subLocality, locality, administrativeArea, country } = fields
    return (
      <Form>
        <UserMap
          latitude={latitude}
          longitude={longitude}
          text="Seu endereço será sempre privado"
        />
        <FormTextInput 
          name='thoroughfare'
          title='Rua, Av., etc'
          placeholder='Sua rua, etc'
          {...thoroughfare}
        />
        <FormTextInput 
          name='subThoroughfare'
          title='Número'
          placeholder='Seu número'
          {...subThoroughfare}
        />
        <FormTextInput 
          name='complement'
          title='Complemento'
          placeholder='(opcional)'
          {...complement}
        />
        <FormTextInput 
          name='subLocality'
          title='Bairro'
          placeholder='Seu bairro'
          {...subLocality}
        />
        <FormTextInput 
          name='locality'
          title='Cidade'
          placeholder='Sua cidade'
          {...locality}
        />
        <FormTextInput 
          name='administrativeArea'
          title='Estado'
          placeholder='Seu estado'
          {...administrativeArea}
        />
        <FormTextInput 
          name='country'
          title='País'
          placeholder='Seu país'
          {...country}
        />
        <FormSubmit
          {...this.props}
          isDisabled={ !valid }
          isLoading={searching || settingLocation}
          onSubmit={this.handleSubmit.bind(this)}
          style={{
            margin: 15,
            marginBottom: 0,
          }}
        >
          {dirty || !valid ? 'Buscar endereço e confirmar' : 'Confirmar endereço e continuar'}
        </FormSubmit>
      </Form>
    )
  }
}

SetLocation = reduxForm({
  form: 'setLocation',
  fields: ['thoroughfare', 'subThoroughfare', 'complement', 'subLocality', 'locality', 'administrativeArea', 'country'],
  validate: validateFunction(validators),
})(SetLocation)

export default SetLocation
