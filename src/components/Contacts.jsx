import React from 'react';

export function Contacts() {
  const email = 'gnatyuk.info@gmail.com';

  return (
    <div className='contacts'>
      <h2>Get in touch</h2>
      <ul>
        <li>
          <a href={`mailto:${email}`}>{email}</a>
        </li>
        <li>{renderLink('linkedin')}</li>
        <li>{renderLink('facebook')}</li>
      </ul>
    </div>
  );
}

function renderLink(link) {
  const href =
    link === 'linkedin'
      ? 'https://www.linkedin.com/in/hnatiukr/'
      : 'https://www.facebook.com/hnatiukr';
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {link}
    </a>
  );
}
