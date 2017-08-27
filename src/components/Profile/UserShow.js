import React from 'react';
import {  Image, Popup, Button, Container, Divider, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const sheet = StyleSheet.create({
  image:{
    marginTop: '20px',
    maxWidth: '100%',
    height: 'auto',
  }
})

const editProfile = (link, editable) =>{
  return(
    <Popup
      trigger={<Image shape='circular' centered size="medium" src={ link ||"https://unsplash.it/300/300/?blur'"} />}
      content={<Button as={Link} to={'profile/edit'} content='Edit' />}
      on='click'
    />)
}

const bioText = 'Click the image above to edit Your profile'




const UserShow = (props) =>{
	const {user} = props 
  return (
    <div>
      <div className={css(sheet.image)}>
        {editProfile(user.pic_link)}
      </div>
      <Container textAlign='center'>
        <Header as='h2'>{user.username}</Header>
      </Container>
      <Container textAlign='center'>
        {user.location || 'The Internet'}
      </Container>
      <Container textAlign='center'>
        <Divider />
        <b>Bio:</b>
        <p>{user.bio || bioText}</p>
      </Container>
      <Divider />
    </div>
	)
}

export default UserShow