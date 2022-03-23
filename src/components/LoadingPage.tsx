import React from 'react';
import beneLogoSolo from '../assets/bene-logo-solo.svg';

function LoadingPage() {
  return (
    <div className="h-full items-center bg-bene-load animate-loading-bg bg-load min-h-screen">
      <div className="bg-bene-dim-end flex h-full w-full min-h-screen justify-center ">
        <img
          src={beneLogoSolo}
          alt="bene-logo"
          className="w-14 animate-loading-bene"
        />
      </div>
    </div>
  );
}

export default LoadingPage;
