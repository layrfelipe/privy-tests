"use client";

import useAuth from './hooks/useAuth';
import Loading from './components/Loading';
import styles from './page.module.scss';

export default function LoginPage() {
  const { ready, authenticated, login } = useAuth();

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
      <h1 className={styles.heading}>Login</h1>
      <button onClick={login} className={styles.button}>
        Log in with Privy
      </button>
    </div>
  );
}
