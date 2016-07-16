import React, { Component, ScrollView, RefreshControl, View } from 'react-native'
import Colors from '../Colors'

export default class Tab extends Component {
  render() {
    const { onRefresh } = this.props
    return (
      <ScrollView
        style={{
          flex: 1, 
          alignSelf: 'stretch', 
          backgroundColor: Colors.lightBeige,
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={onRefresh}
            tintColor={Colors.mediumPink}
            title="Carregando..."
            colors={[Colors.mediumPink, Colors.mediumLightPink, Colors.lightPink]}
            progressBackgroundColor={Colors.white}
          />
        }
      >
        <View style={{ paddingBottom: 90 }}>
          {this.props.children}
        </View>
      </ScrollView>
    )
  }
}
