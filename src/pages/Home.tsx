import React from 'react';
// import mainImg from '../assets/main-img.svg';
import { mpVariables } from '../const/variables';
import beneBeat from '../assets/bene-beat.svg';
import Button from '../components/Button';
import childImg from '../assets/mp-cancer-child.svg';
import wavySmall from '../assets/wavy-small.svg';
import MpCampaignCard from '../components/MpCampaignCard';

function Home() {
  const mpCampaigns: MpCampaigns[] = [];
  class MpCampaigns {}
  return (
    <div className="main-outer">
      <div className="main-inner">
        <div className="main-inner-header row-2"> </div>
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
        <div>
          <div className="main-inner-body-set row-2 px-per-7 text-left md:px-per-15 lg:px-per-20 md:flex justify-between">
            <div className="main-inner-body-text row-2 text-bxl font-semibold w-per-75">
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
                  />
                  <div className="mt-6 md:invisible" />
                  <Button linkto="/explore" text={mpVariables.mpSec1Btn2} />
                </span>
              </div>
            </div>
            <div className="main-inner-body-img row-2 mt-8 text-center md:mt-0">
              <img src={childImg} className="m-auto md:m-unset" alt="intro" />
            </div>
          </div>
        </div>
        <div className="main-inner-body bg-bene-wavy-bg row p-10 min-h-full mt-10">
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
          <h3 className="text-bxl font-semibold mb-6">Ongoing Campaigns</h3>
          <MpCampaignCard
            imgSrc=""
            title="asds as not real"
            description="Asdas lorem ipsum this is not a real description. Skip the reading. Thank you laks kaps ajsd as d s"
            link="As"
            angelsCount={120}
            campaignId="101909"
          />
          {mpCampaigns.map((campaign) => {
            return;
            <div className="main-inner-body-set col-1">Name</div>;
          })}
        </div>
        <div className="mp-quote-box-outer row text-center">
          <div className="mp-quote-inner p-per-15 bg-no-repeat bg-bene-quote w-full h-full font-bold text-bxl text-white">
            {mpVariables.mpQuote}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
