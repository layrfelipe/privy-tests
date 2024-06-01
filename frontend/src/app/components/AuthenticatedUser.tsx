import React from 'react';
import styles from './AuthenticatedUser.module.scss';
import { usePrivy, useWallets } from '@privy-io/react-auth';

const AuthenticatedUser = ({ user, logout, linkWallet }: any) => {
  const { ready, authenticated, createWallet } = usePrivy();

  const { wallets } = useWallets();

  const pregenerateWallet = async () => {
    try {
      const response = await fetch('https://auth.privy.io/api/v1/users', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa('clwla9sxx03onbmb3t1lvv0q7:2u4Y2HmrosVSp1vGqMa4G8Km3Qu2gUXSDii26h7zgQDHmBPbCxJGpwrdSHqxDarmTp7umy3kSM37VxWCSH5oYCPy'),
          'privy-app-id': 'clwla9sxx03onbmb3t1lvv0q7',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "create_embedded_wallet": true,
          "linked_accounts": [
            {
              "address": "layrfpf@gmail.com",
              "type": "email"
            }
          ]
        })
      });
  
      if (!response.ok) {
        throw new Error('POST ');
      }
  
      const data = await response.json();
      console.log('Pregenerate wallet response:', data);
      // Handle the response data as needed
    } catch (error) {
      console.error('Pregenerate wallet response: failed', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>You are logged in!</p>
        <p>User ID: {user.id}</p>

        <br />

        <button onClick={logout} className={styles.button}>
          Log out
        </button>
        <button onClick={linkWallet} className={styles.button}>
          Link wallet
        </button>
        <button disabled={!(ready && authenticated)} onClick={createWallet} className={styles.button}>
          Create a wallet
        </button>

        <button disabled={!(ready && authenticated)} onClick={pregenerateWallet} className={styles.button}>
          Pregenerate wallet
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
        <ul>
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

export default AuthenticatedUser;
