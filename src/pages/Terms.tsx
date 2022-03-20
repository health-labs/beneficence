import React, { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms | Beneficence';
  }, []);
  return (
    <div className="p-12">
      <div className="text-lg font-bold py-5">Terms</div>
      <p>
        {`This platform is provided by Health Labs, Inc. (“Health Labs”, "We",
        "Us", "Our") and is owned by Health Labs. Beneficence allows
        decentralized fundraisers to raise funds for the benefit of the
        community. Beneficence does not provide any financial services or
        returns to the community in any way. Donations to any fund should not be
        considered as an investment.`}
        <br />
        <br />
      </p>
    </div>
  );
}
