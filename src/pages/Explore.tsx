import React from 'react';
import DonationCard from '../components/Cards/DonationCard';
import ExploreCard from '../components/Cards/ExploreCard';
import childImg from '../assets/mp-cancer-child.svg';
import { CampaignCardProps } from '../types/Campaign';
import joinhand from '../assets/join-hand.svg';
import StartCampBox from '../components/StartCampBox';

function Explore() {
  const mpCampaigns: CampaignCardProps[] = [
    {
      imgSrc: childImg,
      title: "My child has Cancer and it's getting worse",
      description:
        'Help us fight cancer. Help us save a life. Any help you can give will help us. Please donate to our campaign.',
      link: 'https://www.google.com/cancer',
      angelsCount: 360,
      campaignId: '100001',
    },
    {
      imgSrc: childImg,
      title: 'Thalassemia is taking over my child. Help us fight it',
      description:
        'We are fighting for the good of my child. We are out of funds. It is now our last chance. Help us.',
      link: 'https://www.google.com/thalassemia',
      angelsCount: 400,
      campaignId: '100002',
    },
    {
      imgSrc: childImg,
      title: 'My child has stage 3 disease and we need financial support',
      description:
        'Things have been going wrong past couple of months. Help us. We hope god will be with us.',
      link: 'https://www.google.com/stage3',
      angelsCount: 500,
      campaignId: '100003',
    },
    {
      imgSrc: childImg,
      title: 'My child has stage 3 disease and we need financial support',
      description:
        'Things have been going wrong past couple of months. Help us. We hope god will be with us.',
      link: 'https://www.google.com/stage3',
      angelsCount: 500,
      campaignId: '100003',
    },
    {
      imgSrc: childImg,
      title: 'My child has stage 3 disease and we need financial support',
      description:
        'Things have been going wrong past couple of months. Help us. We hope god will be with us.',
      link: 'https://www.google.com/stage3',
      angelsCount: 500,
      campaignId: '100003',
    },
    {
      imgSrc: childImg,
      title: 'My child has stage 3 disease and we need financial support',
      description:
        'Things have been going wrong past couple of months. Help us. We hope god will be with us.',
      link: 'https://www.google.com/stage3',
      angelsCount: 500,
      campaignId: '100003',
    },
  ];
  return (
    <div>
      <div className="explore-join-now text-3xl text-bene-dark-blue font-bold text-left p-8">
        <div className="bg-bene-green-blue justify-between flex rounded-tl-bene-c-2 rounded-br-bene-c-2 px-6 py-12">
          <div className="m-auto0">
            Ongoing efforts to help save lives.
            <div className="text-bene-light-blue">Join now</div>
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
