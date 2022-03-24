import React from 'react';
import { WhyDonateType } from '../../../types/CampaignDesc';

function WhyDonate({ whyDonate }: { whyDonate: WhyDonateType }): JSX.Element {
  return (
    <div className="py-3 text-left mt-2">
      <div className="text-lg font-semibold py-2">Why Donate?</div>
      <p>{whyDonate?.text}</p>
    </div>
  );
}

export default WhyDonate;
