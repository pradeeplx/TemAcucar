import React from 'react'
import { StatelessForm } from 'react-native-stateless-form'

export default Form = ({style, children}) => (
  <StatelessForm style={style}>
    {children}
  </StatelessForm>
)
