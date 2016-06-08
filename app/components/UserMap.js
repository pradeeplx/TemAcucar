import React, { View, Image, PixelRatio, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import Colors from "../Colors"

export default UserMap = ({ latitude, longitude, delta, text }) => {
  const ratio = PixelRatio.get()
  let image
  if (ratio <= 1) {
    image = require('../img/marker100.png')
  } else if (ratio <= 1.5) {
    image = require('../img/marker150.png')
  } else if (ratio <= 2) {
    image = require('../img/marker200.png')
  } else if (ratio <= 3) {
    image = require('../img/marker300.png')
  } else if (ratio <= 3.5) {
    image = require('../img/marker350.png')
  } else {
    image = require('../img/marker400.png')
  }
  const height = Dimensions.get('window').height
  const defaultDelta = (height < 570 ? 0.0025 : 0.005)
  return (
    <View>
      <MapView
        showsUserLocation={false}
        zoomEnabled={false}
        rotateEnabled={false}
        scrollEnabled={true}
        pitchEnabled={false}
        style={{
          height: height * (height < 570 ? 0.12 : 0.20),
          alignSelf: 'stretch',
        }}
        region={{
          latitude: parseFloat(latitude || -13.5412631), 
          longitude: parseFloat(longitude || -71.5518237),
          latitudeDelta: parseFloat(delta ? delta : (latitude ? defaultDelta : 50)),
          longitudeDelta: parseFloat(delta ? delta : (longitude ? defaultDelta : 50)),
        }}
      >
        { latitude && longitude && <MapView.Marker coordinate={{latitude, longitude}} image={image} /> }
      </MapView>
      <View style={{
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
      }}>
        <View style={{
          backgroundColor: Colors.lightPink,
          paddingVertical: 4,
          paddingHorizontal: 30,
          borderRadius: 12,
        }}>
          <Sentence style={{
            color: Colors.white, 
            fontFamily: 'OpenSans-Bold', 
            textAlign: 'center',
            fontSize: 12,
          }}>
            { text }
          </Sentence>
        </View>
      </View>
    </View>
  )
}
