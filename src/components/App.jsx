import React from 'react';
import { Content } from './Content';
import { Contacts } from './Contacts';

export function App() {
  return (
    <div className='container'>
      <h1>App</h1>
      <h2>My Name</h2>
      <img
        alt='Roma Hnatiuk'
        width='100%'
        src={require('../images/main_img.jpg')}
      ></img>
      <Content />
      <Contacts />
    </div>
  );
}
