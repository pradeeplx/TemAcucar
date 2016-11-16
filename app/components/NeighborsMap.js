import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import MapText from "./MapText"
import Colors from "../Colors"

export default NeighborsMap = ({ url, count }) => (
  <View>
    <Image source={{uri: url}} style={{
      height: Dimensions.get('window').width * (240/600),
      width: Dimensions.get('window').width,
    }}/>
    <MapText>
      { `${count} ${count === 1 ? 'vizinho' : 'vizinhos'}` }
    </MapText>
  </View>
)
