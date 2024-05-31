import React from 'react';
import styles from './AuthenticatedUser.module.scss';

const formatValue = (value: any) => {
  if (value instanceof Date) {
    return value.toLocaleString();
  }
  return value ? value.email || value.username || value.address || value.number : 'None';
};

const AuthenticatedUser = ({ user, logout, linkWallet }: any) => {
  return (
    <div className={styles.container}>
      <p>User {user.id} is logged in.</p>
      <button onClick={logout} className={styles.button}>
        Log out
      </button>
      <button onClick={linkWallet} className={styles.button}>
        Link wallet
      </button>
      <p>User {user.id} has linked the following accounts:</p>
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {formatValue(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthenticatedUser;
