import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Profile.module.css';

const Profile = ({name, tag, location, url, followers, views, likes}) => (
    <div className={styles.profile}>
            <div>
                <img 
                    src={url}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
    </div>
)

export default Profile;