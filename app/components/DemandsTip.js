import React from 'react'
import FacebookTip from "../components/FacebookTip"
import ShareTip from "../components/ShareTip"

export default DemandsTip = ({ currentUser, neighborsCount, onShare, onFacebook, facebookConnecting }) => {
  const title = (neighborsCount < 30 && 'Quanto mais vizinhos, mais trocas! Compartilhe no Facebook, marcando amigos que moram perto de você.')
  const callToAction = (neighborsCount < 30 && 'Chame seus vizinhos')
  return !currentUser.facebook_uid && neighborsCount >= 30
    ? <FacebookTip onPress={onFacebook} loading={facebookConnecting} title={title} />
    : <ShareTip onPress={onShare} title={title} callToAction={callToAction} />
}
