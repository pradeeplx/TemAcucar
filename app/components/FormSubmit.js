import React from 'react'
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
