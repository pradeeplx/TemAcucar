import React, { Component } from 'react'
import { View, ScrollView, Platform, NativeModules, TouchableOpacity, TextInput, Dimensions, StyleSheet } from 'react-native'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import { validateFunction } from 'validate-model'
import { reduxForm } from 'redux-form'
import truncate from 'truncate'
const RCTUIManager = NativeModules.UIManager

import { fontFactor } from "../helpers"
import Colors from "../Colors"
import MessageValidators from '../validators/MessageValidators'
import NavBar from "../components/NavBar"
import Icon from "../components/Icon"
import Sentence from "../components/Sentence"
import UserImage from "../components/UserImage"
import MessagesContainer from "../containers/MessagesContainer"

const validators = {
  text: MessageValidators.text,
}

class ViewTransaction extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { inputFocused: false }
    this.shouldSubmit = false
  }

  componentDidMount() {
    const { initializeForm, transaction } = this.props
    initializeForm({transaction_id: transaction.id})
    GoogleAnalytics.trackScreenView('ViewTransaction')
  }

  componentDidUpdate() {
    if (this.shouldSubmit) {
      // This is a hack to only submit after blur, so we can scroll to bottom correctly
      this.shouldSubmit = false
      const { handleSubmit, onCreateMessage, resetForm } = this.props
      handleSubmit(onCreateMessage)()
      resetForm()
    }
  }

  handleFocus() {
    this.setState({ inputFocused: true })
  }

  handleBlur() {
    this.setState({ inputFocused: false })
  }

  handleSize() {
    if (!this.state.inputFocused)
    this.scrollToBottom()
  }

  handleCreate() {
    this.refs.input.blur()
    this.shouldSubmit = true
  }

  newReviewFunction(rating) {
    return (() => { this.handleNewReview(rating.toString()) }).bind(this)
  }

  handleNewReview(rating) {
    const { onNewReview, transaction } = this.props
    onNewReview(transaction, rating)
  }

  scrollToBottom() {
    RCTUIManager.measure(React.findNodeHandle(this.refs.scrollView), (left, top, width, height) => {
      this.scrollHeight = height
      RCTUIManager.measure(this.refs.scrollView.getInnerViewNode(), (left, top, width, height) => {
        if (height <= this.scrollHeight)
          return
        this.scrollInnerHeight = height
        const scrollTo = this.scrollInnerHeight - this.scrollHeight + 10
        this.refs.scrollView.scrollTo({y: scrollTo})
      })
    })
  }

  render() {
    const dimensions = Dimensions.get('window')
    const height = dimensions.height * dimensions.scale
    const smallScreen = height <= 320
    const { transaction, auth, fields: { text } } = this.props
    const { currentUser } = auth
    const { demand, can_review_ids } = transaction
    const canReview = can_review_ids.indexOf(currentUser.id) > -1
    const user = (transaction.user.id === currentUser.id ? transaction.demand.user : transaction.user)
    const { inputFocused } = this.state
    const blurredHeight = 44 * fontFactor()
    const focusedHeight = (Platform.OS === 'ios' ? (336 * fontFactor()) : (smallScreen ? 280 : 400))
    const focusedInputHeight = (smallScreen ? 48 : 88) * fontFactor()
    return (
      <View style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingBottom: (inputFocused ? focusedHeight : blurredHeight) + (Platform.os === 'ios' ? 0 : 10),
      }}>
        <NavBar>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Sentence style={{
              color: Colors.brown,
            }}>
              {user.first_name} {user.last_name}
            </Sentence>
            <Sentence style={{
              fontSize: 10 * fontFactor(),
              color: Colors.brown,
              marginBottom: 2,
            }}>
              {truncate(demand.name, 40)}
            </Sentence>
          </View>
          <UserImage size={28} source={{uri: user.image_url}} style={{
            position: 'absolute',
            top: (Platform.OS === 'ios' ? 4 : 7),
            right: 12,
          }} />
        </NavBar>
        { canReview && <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 10,
          backgroundColor: Colors.white,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: Colors.gray,
        }}>
          <View style={{
            flex: 4,
            flexDirection: 'row',
            paddingLeft: 10,
          }}>
            <Sentence style={[{
              marginRight: 6,
              color: Colors.pink,
            }, (Platform.OS === 'ios' ? { fontFamily: 'Avenir-Black' } : { fontWeight: 'bold' })]}>
              Avaliar { user.first_name }
            </Sentence>
          </View>
          <View style={{
            flex: 4,
            flexDirection: 'row',
          }}>
            { [1, 2, 3, 4, 5].map((index) => (
              <TouchableOpacity key={index} onPress={this.newReviewFunction(index)}>
                <Icon name="ios-star-outline" style={{
                  color: Colors.darkYellow,
                  fontSize: 30,
                }} />
              </TouchableOpacity>
            )) }
          </View>
        </View> }
        <ScrollView ref='scrollView' onContentSizeChange={this.handleSize.bind(this)} style={{
          flex: 1,
          padding: 10,
        }}>
          <MessagesContainer {...this.props} />
        </ScrollView>
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: Colors.blue,
          height: (inputFocused ? focusedHeight : blurredHeight),
          flexDirection: 'row',
        }}>
          <TextInput
            ref='input'
            multiline={true}
            placeholder="Clique aqui para escrever..."
            style={{
              flex: 10,
              fontSize: 12 * fontFactor(),
              height: (inputFocused ? focusedInputHeight : blurredHeight),
              padding: 10,
              color: Colors.white,
              backgroundColor: Colors.blue,
            }}
            placeholderTextColor={Colors.white}
            {...text}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
          />
          <TouchableOpacity onPress={this.handleCreate.bind(this)} style={{
            flex: 1,
            padding: 10,
          }}>
            <Icon name="ios-send" style={{
              fontSize: 24 * fontFactor(),
              color: Colors.white
            }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

ViewTransaction = reduxForm({
  form: 'newMessage',
  fields: ['transaction_id','text'],
  validate: validateFunction(validators),
})(ViewTransaction)

export default ViewTransaction
