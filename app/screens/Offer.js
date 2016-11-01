import React, { View } from 'react-native'
import { fontFactor } from "../helpers"
import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"
import TextBox from "../components/TextBox"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import Link from "../components/Link"
import Colors from "../Colors"

export default Offer = ({ onDismiss, onAccept }) => (
  <SimpleScreen>
    <Headline style={{
      fontSize: 14 * fontFactor()
    }}>
      Precisamos da sua contribuição para fazer um Tem Açúcar ainda mais colaborativo
    </Headline>
    <TextBox style={{
      fontSize: 12 * fontFactor(),
      marginBottom: 20,
    }}>
      Quer poder arranjar uma companhia para correr, uma carona para o trabalho ou alguém para te ajudar a trocar a lâmpada queimada da cozinha?
    </TextBox>
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
          Não, obrigado
        </Link>
      </View>
    </BottomView>
  </SimpleScreen>
)
