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
      O Tem Açúcar precisa de você!
    </Headline>
    <HtmlSentence style={{
      fontSize: 12 * fontFactor(),
      marginBottom: 20,
      textAlign: 'center',
      marginHorizontal: 20,
    }}>
      {`Temos só <b>${Math.round(((new Date("2016-11-18T21:00:00+00:00")).getTime() - Date.now()) / 1000 / 60 / 60 / 24)} dias</b> para fazer acontecer um Tem Açúcar que é mais do que empréstimos: doações, caronas, ajudinhas e muito mais! Mas sem o seu apoio o projeto não sai do papel ;)`}
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
      Apoie o novo Tem Açúcar
    </Button>
    <BottomView>
      <View style={{flex: 1}}>
        <Link onPress={onDismiss} style={{
          textAlign: 'center',
          paddingBottom: 20,
        }}>
          Não, obrigado
        </Link>
      </View>
    </BottomView>
  </SimpleScreen>
)
