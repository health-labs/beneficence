import React from 'react';
import DonationCard from '../components/Cards/DonationCard';
import ExploreCard from '../components/Cards/ExploreCard';
import childImg from '../assets/mp-cancer-child.svg';
import { CampaignCardProps } from '../types/Campaign';

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
      Explore
      <div>
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
    </div>
  );
}

export default Explore;
