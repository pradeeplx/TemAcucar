import React from 'react'
import Link from "./Link"

export default LoadMore = (props) => (
  <Link {...props} style={[{
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  }, props.style]}>
    Carregar mais
  </Link>
)
