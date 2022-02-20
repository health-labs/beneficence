import React, { useEffect } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

function SignIn() {
  const { connected } = useWallet();

  useEffect(() => {
    console.log(`Connection status: ${connected}`);
  }, [connected]);

  return <WalletMultiButton> Sign in </WalletMultiButton>;
}
export default SignIn;
