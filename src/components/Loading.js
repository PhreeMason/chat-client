import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import purpleDomino from '../images/purpleDomino.jpg'

const Loading = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
      <Image src={purpleDomino} />
    </Segment>
  </div>
)

export default Loading