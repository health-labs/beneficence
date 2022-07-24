import React from 'react';
import { mpVariables } from '../const/variables';
import Button from '../components/Button/Button';
import childImg from '../assets/mp-cancer-child.svg';
import wavySmall from '../assets/wavy-small.svg';
import MpCampaignCard from '../components/Cards/MpCampaignCard';
import SocialStrip from '../components/Socials/SocialStrip';
import { CampaignCardProps } from '../types/Campaign';
import quote from '../assets/quote.svg';

function Home() {
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
    <div className="main-outer">
      <div className="main-inner">
        <div className="main-inner-header row-2 min-h-v1screen flex flex-col justify-center">
          <div className="get-help-heading-with-beat relative overflow-hidden bg-bene-beat-bg bg-repeat-x bg-center">
            <div className="main-inner-body row px-per-7 text-left md:px-per-15 lg:px-per-20 relative py-12">
              <div className="main-inner-heading row-2 max-w-em-10 font-bold bg-white text-7xl">
                <div className="main-inner-heading-text text-bene-dark-blue">
                  {mpVariables.mpSec1Heading}
                </div>
                <div className="main-inner-heading-text text-bene-light-blue">
                  {mpVariables.mpSec1Heading2}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="main-inner-body-set row-2 px-per-7 text-left md:px-per-15 lg:px-per-20 md:flex justify-between">
              <div className="main-inner-body-text row-2 text-bxl font-semibold sm:w-per-75">
                <span>{mpVariables.mpSec1Body[0]}</span>{' '}
                <span className="text-bene-nav-blue">
                  {mpVariables.mpSec1Body[1]}
                </span>{' '}
                <span>{mpVariables.mpSec1Body[2]}</span>
                <br />
                <span className="get-started-txt relative top-cust-16">
                  {' '}
                  {mpVariables.mpSec1Body2}
                </span>
                <div className="buttons-main mt-cust-45">
                  <span className="md:flex justify-between max-w-em-16">
                    <Button
                      linkto="/start-a-fund"
                      text={mpVariables.mpSec1Btn1}
                      className="w-vw-08 w-full sm:w-fit"
                    />
                    <div className="mt-6 md:invisible" />
                    <Button
                      linkto="/explore"
                      text={mpVariables.mpSec1Btn2}
                      className="w-vw-08 w-full sm:w-fit"
                    />
                  </span>
                </div>
              </div>
              <div className="main-inner-body-img row-2 mt-8 text-center md:mt-0">
                <img src={childImg} className="m-auto md:m-unset" alt="intro" />
              </div>
            </div>
          </div>
        </div>
        <div className="main-inner-body bg-bene-wavy-bg row p-10 min-h-full">
          <div className="main-inner-body-set col-1 pl-10">
            <div className="main-inner-body-text w-per-85 md:w-per-35 text-left text-bxl font-semibold text-white">
              <div className="">
                <img src={wavySmall} alt="wavy" />
              </div>
              <span>{mpVariables.mpSec2Body}</span>
              <br />
              <span className="get-started-txt relative top-cust-16">
                {mpVariables.mpSec2Body2}
              </span>
              <div className="buttons-main mt-cust-45">
                <Button linkto="/learn" text={mpVariables.mpSec2Btn} />
              </div>
            </div>
          </div>
        </div>
        <div className="mp-ongoing-campaign-body row text-left p-10 px-20">
          <h3 className="text-bxl font-semibold text-center sm:text-left mb-11 md:mb-6 ">
            Ongoing Campaigns
          </h3>
          <div className="on-cmp-row snap-xrelative w-full flex gap-6 snap-x overflow-x-auto py-5 rounded-2xl px-2">
            {mpCampaigns.map((campaign) => {
              return (
                <MpCampaignCard
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

        <div className="mp-quote-box-outer row text-center">
          <div className="flex flex-col justify-center bg-cover mp-quote-inner p-per-15 bg-no-repeat bg-bene-quote w-full h-full font-bold text-bxl text-bene-dark-blue max-h-px-425">
            <div className="flex justify-center mb-2">
              <img src={quote} alt="quote" />
            </div>
            <div className="mp-quote-text">{mpVariables.mpQuote}</div>
            <div className="flex justify-center mt-4 font-semibold">
              {mpVariables.mpQuoteBy}
            </div>
          </div>
        </div>
        <div className="mp-btm-strip-outer">
          <SocialStrip />
        </div>
      </div>
    </div>
  );
}

export default Home;
