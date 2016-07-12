import React, { Component, View } from 'react-native'
import Colors from "../Colors"

export default class MapText extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { viewHeight: 0 }
  }

  handleLayout(event) {
    this.setState({ viewHeight: event.nativeEvent.layout.height })
  }

  render() {
    const { children } = this.props
    const { viewHeight } = this.state
    return (
      <View
        onLayout={this.handleLayout.bind(this)}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <Sentence style={{
          fontSize: 14,
          color: Colors.white, 
          textAlign: 'center',
          paddingVertical: 3,
          marginTop: viewHeight - 28,
        }}>
          { children }
        </Sentence>
      </View>
    )
  }
}
