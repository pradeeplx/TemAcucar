import React from 'react-native'
import BottomView from "./BottomView"
import BottomButton from "./BottomButton"

export default FormSubmit = (props) => (
  <BottomView>
    <BottomButton
      isDisabled={!props.dirty || !props.valid || props.submitting}
      onPress={props.handleSubmit(props.onSubmit)}
      {...props}
    >
      {props.children}
    </BottomButton>
  </BottomView>
)
