import React from 'react';
import donate from '../assets/donate.svg';

interface DonateBtnProps {
  campaignid: string;
}

function DonateButtonSmall(props: DonateBtnProps) {
  const { campaignid } = props;
  const onDonateBtnClick = () => {
    const goCampaignUrl = `/campaign/$(campaignid)/donate/`;
    window.location.href = goCampaignUrl;
  };
  return (
    <button
      type="button"
      className="campaign-donate p-cust-btn px-cust-xx bg-bene-dark-blue text-white font-semibold rounded-bene-1 animation-pulse"
      onClick={() => onDonateBtnClick()}>
      <div className="donate-button-small-inner">
        <img src={donate} alt="donate" />
      </div>
    </button>
  );
}

export default DonateButtonSmall;
