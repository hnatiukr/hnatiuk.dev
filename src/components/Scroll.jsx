import React from 'react';
import ScrollToTop from 'react-scroll-up';

export function Scroll() {
  return (
    <>
      <ScrollToTop showUnder={160}>
        <img
          className='scroll_top'
          src={require('../assets/images/up.svg')}
          alt=''
        />
      </ScrollToTop>
    </>
  );
}
