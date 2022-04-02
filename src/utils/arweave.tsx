import React from 'react';
import Arweave from 'arweave';
import { JWKInterface } from 'arweave/node/lib/wallet';

export const fundWallet = async (arweave: Arweave, jwk: JWKInterface) => {
  const addr = await arweave.wallets.jwkToAddress(jwk);

  const balance = await arweave.wallets.getBalance(addr);
  console.log('Balance: ', balance);
  if (Number(balance) < 100000000) {
    try {
      await arweave.api.get(`mint/${addr}/10000000000000`);
    } catch (e) {
      console.log(e);
    }
  }
};
