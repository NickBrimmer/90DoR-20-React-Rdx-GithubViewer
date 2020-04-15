import React from 'react';
import {useSelector} from 'react-redux';
import {getGitUserInfo} from '../../selectors/selector';
import styles from './User.css';


const UserDisplay = () => {
  const userInfo = useSelector(getGitUserInfo);

  const renderUser = userInfo ?

    <section>
      <h1 className={styles.userName} ></h1>
      <img src={userInfo.avatar_url} />
      <p className={styles.text}  >Location: {userInfo.location} </p>
      <p className={styles.text} >Bio: {userInfo.bio} </p>
      <p className={styles.text} > Number of Repos: {userInfo.public_repos} </p>
      <p className={styles.text} > Number of Followers: {userInfo.followers} </p>
    </section> : <div>No one has that username, but try again!</div>;

  return (
    <>
      <section>
        {renderUser}
      </section>
    </>
  );

};

export default UserDisplay;
