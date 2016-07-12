import React, { Component, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"
import Icon from "./Icon"

export default class TabBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.selectedTabIcons = []
    this.unselectedTabIcons = []
  }

  renderTabOption(name, page) {
    const { notificationsCount } = this.props
    const isActive = (this.props.activeTab === page)
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width
    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: (isActive ? Colors.white : Colors.white),
      }}>
        <Icon name={name} size={36} color={isActive ? Colors.pink : Colors.gray} />
        { page === 2 && notificationsCount > 0 &&
          <View style={{
            position: 'absolute',
            right: width * 0.11,
            top: height * 0.015,
            height: 18,
            width: 18,
            backgroundColor: (isActive ? Colors.white : Colors.pink),
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: (isActive ? Colors.pink : Colors.pink),
            borderRadius: 9,
          }}>
            <Sentence style={{
              backgroundColor: 'transparent',
              color: (isActive ? Colors.pink : Colors.white),
              textAlign: 'center',
            }}>
              {notificationsCount}
            </Sentence>
          </View>
        }
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View elevation={3} style={{
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0,
        },
        overflow: 'visible',
        transform: [{'translate': [0,0,1]}],
        borderColor: Colors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    )
  }
}

TabBar.propTypes = {
  goToPage: React.PropTypes.func,
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array,
}
