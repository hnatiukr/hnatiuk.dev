import React from 'react';
import '../styles/loader.css';

export function Loader() {
  return (
    <>
      <div id='background'></div>
      <div id='logocontainer'>
        <div id='pelogo'>Rh</div>
        <div className='loader' style={styles.loader1}></div>
        <div className='loader' style={styles.loader2}></div>
        <div className='loader' style={styles.loader3}></div>
        <div className='loader' style={styles.loader4}></div>
      </div>
    </>
  );
}

const styles = {
  loader1: {
    left: '.5vh',
    top: 0,
    height: '.5vh',
    width: 0,
    animation: 'slide1 1s linear forwards infinite',
  },
  loader2: {
    right: 0,
    top: '.5vh',
    width: '.5vh',
    height: 0,
    animation: 'slide2 1s linear forwards infinite',
    animationDelay: '0.5s',
  },
  loader3: {
    right: '.5vh',
    bottom: 0,
    height: '.5vh',
    width: 0,
    animation: 'slide3 1s linear forwards infinite',
  },
  loader4: {
    left: 0,
    bottom: '.5vh',
    width: '.5vh',
    height: 0,
    animation: 'slide4 1s linear forwards infinite',
    animationDelay: '0.5s',
  },
};
