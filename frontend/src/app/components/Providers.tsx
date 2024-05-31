'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="clwla9sxx03onbmb3t1lvv0q7"
      config={{
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        loginMethods: ["email", "google", 'github', "wallet"]
      }}
    >
      {children}
    </PrivyProvider>
  );
}
