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
      className="group campaign-donate p-cust-btn px-cust-xx bg-bene-dark-blue text-white font-semibold rounded-bene-1 animation-pulse"
      onClick={() => onDonateBtnClick()}>
      <div className="donate-button-small-inner ">
        <img
          className="transform group-hover:scale-105 transition duration-350 ease-out"
          src={donate}
          alt="donate"
        />
      </div>
    </button>
  );
}

export default DonateButtonSmall;
