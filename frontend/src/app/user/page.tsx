"use client";

import { usePrivy } from '@privy-io/react-auth';
import AuthenticatedUser from '../components/AuthenticatedUser';
import Loading from '../components/Loading';
import styles from './user.module.scss';


export default function UserPage() {
  const { ready, authenticated, user, logout, linkWallet } = usePrivy();

  if (!ready) {
    return <Loading />;
  }

  if (!authenticated || !user) {
    // Redirect to login page if not authenticated
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return null;
  }

  return (
    <div className={styles.container}>
      <AuthenticatedUser user={user} logout={logout} linkWallet={linkWallet} />
    </div>
  );
}
