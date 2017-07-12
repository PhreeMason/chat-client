import React from 'react'
import { Message } from 'semantic-ui-react'

export const ErrorShow = (props) => (
  <Message compact warning>
    <Message.Header>Something went wrong!</Message.Header>
    <ul>
	    {props.errors.map((error, i) => <li key={i}>{error}</li>)}
	  </ul>
  </Message>
)

