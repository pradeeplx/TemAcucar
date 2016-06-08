import React, { View, Image, PixelRatio, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import Colors from "../Colors"
import LogoMarker from "./LogoMarker"

export default UserMap = ({ latitude, longitude, delta, text }) => {
  const windowHeight = Dimensions.get('window').height
  const height = windowHeight * (windowHeight < 570 ? 0.12 : 0.20)
  const defaultDelta = (windowHeight < 570 ? 0.0025 : 0.005)
  return (
    <View>
      <MapView
        showsUserLocation={false}
        zoomEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        pitchEnabled={false}
        style={{
          height: height,
          alignSelf: 'stretch',
        }}
        region={{
          latitude: parseFloat(latitude || -13.5412631), 
          longitude: parseFloat(longitude || -71.5518237),
          latitudeDelta: parseFloat(delta ? delta : (latitude ? defaultDelta : 50)),
          longitudeDelta: parseFloat(delta ? delta : (longitude ? defaultDelta : 50)),
        }}
      />
      <View style={{
        position: 'absolute',
        bottom: (height / 2) - 7.5,
        left: 0,
        right: 0,
        alignItems: 'center',
      }}>
        <LogoMarker />
      </View>
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
