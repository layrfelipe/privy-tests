import { usePrivy } from '@privy-io/react-auth';

const useAuth = () => {
  const { ready, authenticated, login, user, logout, linkWallet } = usePrivy();

  return { ready, authenticated, login, user, logout, linkWallet };
};

export default useAuth;
