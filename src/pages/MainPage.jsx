import React from 'react';
import { Link } from 'react-router-dom';
import { Content } from '../components/Content';
import { Contacts } from '../components/Contacts';

export function MainPage() {
  const MY_NAME = 'Roman Hnatiuk';

  const changeBackgroundColor = () => {
    let allchar = '0123456789ABCDEF';
    let randcol = '';
    for (var i = 0; i < 6; i++) {
      randcol += allchar[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = '#' + randcol;
  };

  return (
    <div>
      <div className='container'>
        <h2 className='logo animate'>
          <Link className='logo_link' to='/'>
            {MY_NAME}
          </Link>
        </h2>
        <h1
          className='title animate delaytitle'
          //   onClick={changeBackgroundColor}
        >
          <span>Hi. I’m Roman and I develop & build digital products.</span>
        </h1>
      </div>
      <div className='photo animate delaycontent'></div>
      <div className='container content animate delaycontent'>
        <Content />
        <Contacts />
      </div>
    </div>
  );
}
