import React, { Image } from 'react-native'
import { fontFactor } from "../helpers"

export default UserImage = (props) => (
  <Image {...props} style={[{
    width: (props.size || 36) * fontFactor(),
    height: (props.size || 36) * fontFactor(),
    borderRadius: (props.size / 2 || 18) * fontFactor(),
  }, props.style]} />
)
