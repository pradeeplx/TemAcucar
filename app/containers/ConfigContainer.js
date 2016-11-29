import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import moment from 'moment'

import * as TermsActions from '../actions/TermsActions'
import * as ConfigActions from '../actions/ConfigActions'

import LocationContainer from "./LocationContainer"
import Loading from "../screens/Loading"
import RejectedTerms from "../screens/RejectedTerms"
import Terms from "../screens/Terms"
import ReviewEmailRouter from "../routers/ReviewEmailRouter"
import OfferContainer from "../containers/OfferContainer"
import DashboardContainer from "./DashboardContainer"

class ConfigContainer extends Component {
  handleAcceptTerms() {
    const { dispatch, auth: { credentials } } = this.props
    dispatch(TermsActions.accept(credentials))
  }

  handleRejectTerms() {
    const { dispatch } = this.props
    dispatch(TermsActions.reject())
  }

  handleCancelRejectTerms() {
    const { dispatch } = this.props
    dispatch(TermsActions.cancelReject())
  }

  handleContact() {
    Communications.web('mailto:hello@temacucar.com')
  }

  handleScrollTerms(event) {
    const { dispatch, terms } = this.props
    const { scrolledToBottom } = terms
    if (scrolledToBottom)
      return
    const { nativeEvent } = event
    if(nativeEvent.contentOffset.y >= (nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height - 1)) {
      dispatch(TermsActions.scrollToBottom())
    }
  }

  handleConfirmEmail() {
    const { dispatch, auth } = this.props
    const { credentials } = auth
    dispatch(ConfigActions.confirmEmail(credentials))
  }

  handleUpdateEmail(data) {
    const { dispatch, auth } = this.props
    const { currentUser, credentials } = auth
    dispatch(ConfigActions.updateEmail(data.email, currentUser.email, credentials))
  }

  handleShowToast() {
    const { dispatch } = this.props
    dispatch(ConfigActions.showToast())
  }

  render() {
    const { auth, terms, config, offer } = this.props
    const { currentUser } = auth
    const { acceptingTerms, rejectedTerms, scrolledToBottom } = terms
    const { confirmingEmail } = config
    const displayOffer = (!offer.dismissed && moment(Date.parse(currentUser.created_at)).add(2, 'days').valueOf() < moment().valueOf())
    if (acceptingTerms || confirmingEmail)
      return (<Loading />)
    if (rejectedTerms)
      return (<RejectedTerms onCancelRejectTerms={this.handleCancelRejectTerms.bind(this)} onContact={this.handleContact.bind(this)} />)
    if (!currentUser.accepted_terms)
      return (<Terms onAcceptTerms={this.handleAcceptTerms.bind(this)} onRejectTerms={this.handleRejectTerms.bind(this)} onScroll={this.handleScrollTerms.bind(this)} scrolledToBottom={scrolledToBottom} />)
    if (!currentUser.reviewed_email)
      return (<ReviewEmailRouter {...this.props} onConfirm={this.handleConfirmEmail.bind(this)} onUpdateEmail={this.handleUpdateEmail.bind(this)} onShowToast={this.handleShowToast.bind(this)} />)
    if (!currentUser.latitude || !currentUser.longitude || !currentUser.reviewed_location)
      return (<LocationContainer {...this.props} />)
    // Uncomment the next 2 lines if you want to display the offer for people who've been using the app for at least 2 days
    // if (displayOffer)
    //   return (<OfferContainer {...this.props} />)
    return (<DashboardContainer {...this.props} />)
  }
}

export default connect(state => ({
  config: state.config,
  terms: state.terms,
  offer: state.offer,
}))(ConfigContainer)
