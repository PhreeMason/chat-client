import React from 'react'
import { Message } from 'semantic-ui-react'

export const ErrorShow = (props) => (
  <Message
    color='orange'
    header='Something went wrong'
    list={props.errors}
  />
)

