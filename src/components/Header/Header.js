import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <>
      <img className={styles.headerImg} src='src/assets/Screenshot 2020-02-18 16.45.41.png' />
      <h1 className={styles.hdrText} >Welcome to Github Viewer</h1>
      <h2 className={styles.subHeaderText} >Search any user by their Github username!</h2>
    </>

  );

};

export default Header;
