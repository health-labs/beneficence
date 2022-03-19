import React from 'react';
import DonationCard from '../components/Cards/DonationCard';
import ExploreCard from '../components/Cards/ExploreCard';
import joinhand from '../assets/join-hand.svg';
import StartCampBox from '../components/StartCampBox';
import { mpCampaigns } from '../test/data';

function Explore() {
  return (
    <div>
      <div>
        <div className="text-7xl text-bene-dark-blue font-bold text-center">
          <div className="m-auto0 py-14">Explore campaigns</div>
        </div>
      </div>

      <div className="explore-join-now text-3xl text-bene-dark-blue font-bold text-left p-8">
        <div className="bg-bene-green-blue justify-between flex rounded-tl-bene-c-2 rounded-br-bene-c-2 px-6 py-12">
          <div className="m-auto0">
            Ongoing efforts to help save lives.
            <div className="text-bene-light-blue">Join now!</div>
          </div>
          <div className="m-auto0 md:my-ne-2 md:ml-ne-2">
            <img src={joinhand} alt="hands" className="max-h-15vw" />
          </div>
        </div>
      </div>

      <div className="p-8 grid gap-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-left">
        {mpCampaigns.map((campaign) => {
          return (
            <DonationCard
              imgSrc={campaign.imgSrc}
              title={campaign.title}
              description={campaign.description}
              link={campaign.link}
              angelsCount={campaign.angelsCount}
              campaignId={campaign.campaignId}
            />
          );
        })}
      </div>

      <div>
        <StartCampBox />
      </div>
    </div>
  );
}

export default Explore;
