import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import GoogleAnalytics from 'react-native-google-analytics-bridge'
import Swiper from 'react-native-swiper'

import Colors from '../Colors'
import Button from '../components/Button'
import Headline from '../components/Headline'
import WelcomeView from '../components/WelcomeView'
import WelcomeImage from '../components/WelcomeImage'
import WelcomeHeader from '../components/WelcomeHeader'
import WelcomeBullets from '../components/WelcomeBullets'
import WelcomeGlassIcon from '../components/WelcomeGlassIcon'
import WelcomeMegaphoneIcon from '../components/WelcomeMegaphoneIcon'
import WelcomePigIcon from '../components/WelcomePigIcon'
import WelcomeNotebookIcon from '../components/WelcomeNotebookIcon'
import WelcomeBottomView from '../components/WelcomeBottomView'
import SignInOrSignUpLink from '../components/SignInOrSignUpLink'

export default class Welcome extends Component {
  componentDidMount() {
    GoogleAnalytics.trackScreenView('Welcome')
  }

  render() {
    return(
      <Swiper
        loop={false}
        showsPagination={false}
        dot={null}
      >
        <WelcomeView>
          <WelcomeImage />
          <WelcomeBullets active={1} />
          <Headline>
            Economize, seja sustentável e conheça pessoas incríveis
          </Headline>
          <WelcomeBottomView>
            <SignInOrSignUpLink />
          </WelcomeBottomView>
        </WelcomeView>
        <WelcomeView>
          <WelcomeHeader headline="Peça emprestado">
            <WelcomeGlassIcon />
          </WelcomeHeader>
          <WelcomeBullets active={2} />
          <Headline>
            Busque o item que você está precisando, como furadeira ou barraca de acampamento.
          </Headline>
          <WelcomeBottomView>
            <SignInOrSignUpLink />
          </WelcomeBottomView>
        </WelcomeView>
        <WelcomeView>
          <WelcomeHeader headline="Encontre um vizinho">
            <WelcomeMegaphoneIcon />
          </WelcomeHeader>
          <WelcomeBullets active={3} />
          <Headline>
            Perguntamos para seus vizinhos quem pode te emprestar.
          </Headline>
          <WelcomeBottomView>
            <SignInOrSignUpLink />
          </WelcomeBottomView>
        </WelcomeView>
        <WelcomeView>
          <WelcomeHeader headline="Use e economize">
            <WelcomePigIcon />
          </WelcomeHeader>
          <WelcomeBullets active={4} />
          <Headline>
            Combine as condições de empréstimo. Simples, seguro e confortável.
          </Headline>
          <WelcomeBottomView>
            <SignInOrSignUpLink />
          </WelcomeBottomView>
        </WelcomeView>
        <WelcomeView>
          <WelcomeHeader headline="Compartilhe sua opinião">
            <WelcomeNotebookIcon />
          </WelcomeHeader>
          <WelcomeBullets active={5} />
          <Headline>
            Avalie sua experiência para que os próximos usuários tenham mais informações em futuros empréstimos.
          </Headline>
          <WelcomeBottomView>
            <Button onPress={Actions.signInOrSignUp}>
              Entrar
            </Button>
          </WelcomeBottomView>
        </WelcomeView>
      </Swiper>
    )
  }
}
