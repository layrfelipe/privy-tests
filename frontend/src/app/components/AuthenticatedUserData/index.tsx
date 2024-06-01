import React from 'react';
import { useWallets } from '@privy-io/react-auth';
import styles from '@/styles/AuthenticatedUserData.module.scss';

const AuthenticatedUserData = ({ user, logout, linkWallet }: any) => {
  const { wallets } = useWallets();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>You are logged in!</p>
        <p>User ID: {user.id}</p>

        <br />

        <button onClick={logout} className={styles.button}>
          Log out
        </button>
      </div>

      <div className={styles.right}>
        <h3>Linked accounts types</h3>
        <ul className={styles.accountsList}>
          {
            user.linkedAccounts.map((account: any, index: number) => {
              return <li key={index}>{account.type}</li>
            })
          }
        </ul>
        
        <br />

        <h3>Linked wallets</h3>
        <ul className={styles.accountsList}>
          {
            wallets.map((wallet: any, index: number) => {
              return <li key={index}>Wallet {wallet.address}</li>
            })
          }
        </ul>
        
        <br />

        <h5>PS: if a wallet wasn&apos;t automatically created for you, click in the &apos;Create a wallet&apos; button</h5>
      </div>
      
    </div>
  );
};

export default AuthenticatedUserData;