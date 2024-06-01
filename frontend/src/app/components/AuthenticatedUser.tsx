import React, { useEffect } from 'react';
import styles from './AuthenticatedUser.module.scss';
import { usePrivy, useWallets } from '@privy-io/react-auth';

// const formatValue = (value: any) => {
//   if (value instanceof Date) {
//     return value.toLocaleString();
//   }
//   return value ? value.email || value.username || value.address || value.number : 'None';
// };

const AuthenticatedUser = ({ user, logout, linkWallet }: any) => {
  const { ready, authenticated, createWallet } = usePrivy();

  const { wallets } = useWallets();

  useEffect(() => {
    console.log("user", user)
  }, [user])

  return (
    <div className={styles.container}>
      <p>You are logged in!</p>
      <button onClick={logout} className={styles.button}>
        Log out
      </button>
      <button onClick={linkWallet} className={styles.button}>
        Link wallet
      </button>
      <button disabled={!(ready && authenticated)} onClick={createWallet} className={styles.button}>
        Create a wallet
      </button>
      
      <p>User ID: {user.id}</p>
      <p>Linked accounts</p>

      <ul>
        {
          user.linkedAccounts.map((account: any, index: number) => {
            return <li key={index}>{account.type}</li>
          })
        }
      </ul>

      <p>Linked wallets</p>

      <ul>
        {
          wallets.map((wallet: any, index: number) => {
            return <li key={index}>Wallet {wallet.address}</li>
          })
        }
      </ul>
    </div>
  );
};

export default AuthenticatedUser;
