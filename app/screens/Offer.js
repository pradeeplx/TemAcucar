import React from 'react-native'
import { fontFactor } from "../helpers"
import SimpleScreen from "../components/SimpleScreen"
import Headline from "../components/Headline"
import TextBox from "../components/TextBox"
import Button from "../components/Button"
import BottomView from "../components/BottomView"
import BottomButton from "../components/BottomButton"

export default Offer = ({ onDismiss, onAccept }) => (
  <SimpleScreen>
    <Headline style={{
      fontSize: 13 * fontFactor()
    }}>
      Precisamos da sua contribuição para fazer um Tem Açúcar ainda mais colaborativo
    </Headline>
    <TextBox style={{
      fontSize: 10 * fontFactor(),
      marginBottom: 20,
    }}>
      Quer poder arranjar uma companhia para correr, uma carona para o trabalho ou alguém para te ajudar a trocar a lâmpada queimada da cozinha?
    </TextBox>
    <Button onPress={onDismiss}>
      Não, obrigado
    </Button>
    <BottomView>
      <BottomButton onPress={onAccept}>
        Conheça o novo Tem Açúcar
      </BottomButton>
    </BottomView>
  </SimpleScreen>
)
