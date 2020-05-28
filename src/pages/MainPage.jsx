import React from 'react';
import { Link } from 'react-router-dom';
import { Content } from '../components/Content';
import { Contacts } from '../components/Contacts';
import { Scroll } from '../components/Scroll';

export function MainPage() {
  const MY_NAME = 'Roman Hnatiuk';

  return (
    <>
      <div className='container'>
        <h2 className='logo animate'>
          <Link className='logo_link' to='/'>
            {MY_NAME}
          </Link>
        </h2>
        <h1 className='title animate delaytitle'>
          <span>Hi. I’m Roman and I develop & build digital products.</span>
        </h1>
      </div>
      <div className='photo animate delaycontent'></div>
      <div className='container content animate delaycontent'>
        <Content />
        <Contacts />
      </div>
      <Scroll />
    </>
  );
}
