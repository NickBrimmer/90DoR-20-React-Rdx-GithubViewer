import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions/actions';
import styles from './SearchPage.css';
import '../../styles/styles.css';


const SearchPage = () => {

  const [username, newUsername] = useState('nickbrimmer');
  const dispatch = useDispatch();

  const searchUser = event => {
    event.preventDefault();
    dispatch(fetchUser(username));
  };

  return (
    <>
      <form onSubmit={searchUser} >
        <h1 className={styles.headerText} >Search Github User</h1>
        <input type='text' placeholder='Type username here...' onChange={({ target }) => newUsername(target.value)} />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchPage;
