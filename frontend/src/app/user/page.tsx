"use client";

import { useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import AuthenticatedUserData from '../components/AuthenticatedUserData';
import Loading from '../components/Loading';
import styles from '@/styles/User.module.scss';
import Actions from '../components/Actions';

export default function UserPage() {
  const { ready, authenticated, user, logout, linkWallet } = usePrivy();

  useEffect(() => {
    console.log(user)
  }, [user])

  if (!ready) {
    return <Loading />;
  }

  if (!authenticated || !user) {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return null;
  }

  return (
    <div className={styles.container}>
      <Actions />
      <AuthenticatedUserData user={user} logout={logout} linkWallet={linkWallet} />
    </div>
  );
}