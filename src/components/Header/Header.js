import React from 'react';
import styles from './Header.css';

const Header = () => {
  return (
    <>
      <h1 className={styles.hdrText} >Welcome to Github Viewer</h1>
      <h2 className={styles.subHeaderText} >Search any user by their Github username!</h2>
    </>

  );

};

export default Header;
