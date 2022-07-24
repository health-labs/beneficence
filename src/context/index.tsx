import React, { Children } from 'react';
import { LoadingAppProvider } from './LoadingApp';
import { WalletConnectContextProvider } from './WalletConnectContextProvider';
import Modal from '../components/Modal/Modal';
import { SingleModalProvider } from './SingleModalContext';

export default function AppCtxProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <WalletConnectContextProvider>
      <LoadingAppProvider>
        <SingleModalProvider>
          {children}
          <Modal />
        </SingleModalProvider>
      </LoadingAppProvider>
    </WalletConnectContextProvider>
  );
}
