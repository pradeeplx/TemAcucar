import React, { Component } from 'react'
import { View } from 'react-native'
import Colors from "../Colors"

export default class BottomView extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { viewWidth: 0 }
  }

  handleLayout(event) {
    this.setState({ viewWidth: event.nativeEvent.layout.width })
  }

  render() {
    const { children, style } = this.props
    const { viewWidth } = this.state
    const buttonsCount = React.Children.count(children)
    return (
      <View
        onLayout={this.handleLayout.bind(this)}
        style={[{
          backgroundColor: Colors.white,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
        }, style]}
      >
        { React.Children.map(children, (child) => React.cloneElement(child, { buttonsCount, viewWidth }))}
      </View>
    )
  }
}
