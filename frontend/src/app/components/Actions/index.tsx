import React, { useState } from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import styles from '@/styles/Actions.module.scss';
import axios from 'axios';

const Actions = () => {
    const { ready, authenticated, linkWallet, createWallet } = usePrivy();
    const [showInputPreGenerateWallet, setShowInputPreGenerateWallet] = useState(false);
    const [pregenerateWalletEmail, setPregenerateWalletEmail] = useState("");

    const pregenerateWallet = async () => {
        if (pregenerateWalletEmail) {
            try {
                const response = await axios.post('https://auth.privy.io/api/v1/users', {
                    "create_embedded_wallet": true,
                    "linked_accounts": [
                        {
                            "address": pregenerateWalletEmail,
                            "type": "email"
                        }
                    ]
                }, {
                    headers: {
                        'Authorization': 'Basic ' + btoa('clwla9sxx03onbmb3t1lvv0q7:2u4Y2HmrosVSp1vGqMa4G8Km3Qu2gUXSDii26h7zgQDHmBPbCxJGpwrdSHqxDarmTp7umy3kSM37VxWCSH5oYCPy'),
                        'privy-app-id': 'clwla9sxx03onbmb3t1lvv0q7',
                        'Content-Type': 'application/json'
                    }
                });
                
                if (response.status !== 200) {
                    throw new Error('Pregenerate wallet response failed');
                }
          
                const data = response.data;
                console.log('Pregenerate wallet response:', data);
            } catch (error) {
                console.error('ERROR:', error);
            }
        }
        else {
            alert("Enter a valid e-mail")
        }
    };

    return (
        <div className={styles.actionsContainer}>
            <button onClick={linkWallet} className={styles.button}>
                Link wallet
            </button>
            <button disabled={!(ready && authenticated)} onClick={createWallet} className={styles.button}>
                Create a wallet
            </button>
            <button disabled={!(ready && authenticated)} onClick={() => setShowInputPreGenerateWallet(value => !value)} className={showInputPreGenerateWallet ? `${styles.button} ${styles.enabled}` : `${styles.button}`}>
                Pregenerate wallet
            </button>
            { showInputPreGenerateWallet &&
                <div className={styles.pregenerateWalletInputContainer}>
                    <input type="email" minLength={8} onChange={(e) => setPregenerateWalletEmail(e.target.value)}></input>
                    <button className={styles.secondaryButton} onClick={pregenerateWallet}>Submit</button>
                </div>
            }
        </div>
    );
};

export default Actions;
