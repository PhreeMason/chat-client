import React from 'react';
import { Card, Image, Popup, Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const editProfile = (link, editable) =>{
  return(
    <Popup
      trigger={<Image src={link || 'https://unsplash.it/200/300/?blur'} />}
      content={<Button as={Link} to={'profile/edit'} content='Edit' />}
      on='click'
      position='top right'
    />)
}

const bioText = 'Poutine quinoa adaptogen, minim tumeric ramps ennui occaecat live-edge non authentic. Wolf actually kogi, enim put a bird on it chicharrones YOLO celiac ad cillum. Echo park disrupt tbh poutine vegan tempor excepteur eiusmod proident waistcoat officia id dolore tumeric deserunt. Put a bird on it cupidatat freegan, nisi poke williamsburg vexillologist.'

const UserShow = (props) =>{
  console.log(props)
	const {user} = props 
  return (
    <Grid.Column width={6}>
      <Card>
        {editProfile(user.pic_link)}
        <Card.Content>
          <Card.Header>
            {user.username}
          </Card.Header>
          <Card.Meta>
            <span className='location'>
              {user.location || 'The Internet'}
            </span>
          </Card.Meta>
          <Card.Description>
            {user.bio || bioText}
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
	)
}

export default UserShow