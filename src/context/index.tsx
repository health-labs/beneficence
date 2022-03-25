import React, { Children } from 'react';
import { LoadingAppProvider } from './LoadingApp';
import { SingleModalProvider } from './SingleModalContext';
import { WalletConnectContextProvider } from './WalletConnectContextProvider';

export default function AppCtxProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <WalletConnectContextProvider>
      <LoadingAppProvider>
        <SingleModalProvider>{children}</SingleModalProvider>
      </LoadingAppProvider>
    </WalletConnectContextProvider>
  );
}
