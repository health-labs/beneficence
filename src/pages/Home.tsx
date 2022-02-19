import React from 'react';
// import mainImg from '../assets/main-img.svg';
import { mpVariables } from '../const/variables';
import beneBeat from '../assets/bene-beat.svg';
import Button from '../components/Button';
import childImg from '../assets/mp-cancer-child.svg';
// import wavyBgBig from '../assets/wavy-bg-big.svg';
import wavySmall from '../assets/wavy-small.svg';

function Home() {
  const mpCampaigns: MpCampaigns[] = [];
  class MpCampaigns {}
  return (
    <div className="main-outer">
      <div className="main-inner">
        <div className="main-inner-header row-2"> </div>
        <div className="get-help-heading-with-beat relative overflow-hidden">
          <div className="-z-1 absolute py-12 min-w-full top-beat-1">
            <img src={beneBeat} alt="#" className="min-w-full max-h-md" />
          </div>
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
          <div className="main-inner-body-set row-2 px-per-7 text-left md:px-per-15 lg:px-per-20 flex justify-between">
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
                <span className="flex justify-between max-w-em-15">
                  <Button
                    linkto="/start-a-fund"
                    text={mpVariables.mpSec1Btn1}
                  />
                  <Button linkto="/explore" text={mpVariables.mpSec1Btn2} />
                </span>
              </div>
            </div>
            <div className="main-inner-body-img row-2">
              <img src={childImg} alt="intro" />
            </div>
          </div>
        </div>
        <div className="main-inner-body row p-10">
          <div className="main-inner-body-set col-1">
            <div className="main-inner-body-text bg-wavy-bg-big">
              <span>{mpVariables.mpSec2Body}</span>
              <span className="get-started-txt mt-3">
                {mpVariables.mpSec2Body2}
              </span>
              <span className="buttons-main">
                <button className="btn" type="button">
                  {mpVariables.mpSec2Btn} <span> {'>'} </span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="main-inner-body row">
          <h3>Ongoing Campaigns</h3>
          {mpCampaigns.map((campaign) => {
            return;
            <div className="main-inner-body-set col-1">Name</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
