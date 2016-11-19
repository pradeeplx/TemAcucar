import React, { View } from 'react-native'
import { fontFactor } from "../helpers"
import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"
import HtmlSentence from "../components/HtmlSentence"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import Link from "../components/Link"
import Colors from "../Colors"

export default Offer = ({ onDismiss, onAccept }) => (
  <SimpleScreen>
    <Headline style={{
      fontSize: 14 * fontFactor(),
    }}>
      Batemos nossa meta!
    </Headline>
    <HtmlSentence style={{
      fontSize: 12 * fontFactor(),
      marginBottom: 20,
      textAlign: 'center',
      marginHorizontal: 20,
    }}>
      Graças a você o Tem Açúcar 2.0 vai acontecer!!! Muito obrigada pela colaboração :D
    </HtmlSentence>
    <Button
      onPress={onAccept}
      textStyle={{
        color: Colors.white,
      }}
      style={{
        backgroundColor: Colors.pink,
        borderColor: Colors.pink,
      }}
    >
      Conheça o novo Tem Açúcar
    </Button>
    <BottomView>
      <View style={{flex: 1}}>
        <Link onPress={onDismiss} style={{
          textAlign: 'center',
          paddingBottom: 20,
        }}>
          Entrar no app
        </Link>
      </View>
    </BottomView>
  </SimpleScreen>
)
