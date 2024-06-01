"use client";

import { usePrivy } from '@privy-io/react-auth';
import Loading from './components/Loading';
import styles from '@/styles/Home.module.scss';

export default function LoginPage() {
  const { ready, authenticated, login } = usePrivy();

  if (!ready) {
    return <Loading />;
  }

  if (ready && authenticated) {
    // Redirect to user page if already authenticated
    if (typeof window !== 'undefined') {
      window.location.href = '/user';
    }
    return null;
  }

  return (
    <div className={styles.container}>
      <button onClick={login} className={styles.button}>
        Log in with Privy
      </button>
    </div>
  );
}