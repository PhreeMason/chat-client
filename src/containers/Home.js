import React from 'react';
import { Link } from 'react-router-dom'

const Home = () =>{

  return (
    <header className='Landing Splash'>
      <h1>Welcome to Chit Chat</h1>
      <Link className='authenticate' to='/login'>Login - Signup</Link> 
    </header>
  );
}

export default Home