import React from 'react';
// import mainImg from '../assets/main-img.svg';
import { mpVariables } from '../const/variables';

function Home() {
  const mpCampaigns: MpCampaigns[] = [];
  class MpCampaigns {}
  return (
    <div className="main-outer">
      <div className="main-inner">
        <div className="main-inner-header row-2"> </div>
        <div className="main-inner-body row">
          <div className="main-inner-heading row-2">
            <div className="main-inner-heading-text dark-blue">
              {mpVariables.mpSec1Heading}
            </div>
            <div className="main-inner-heading-text sky-blue">
              {mpVariables.mpSec1Heading2}
            </div>
          </div>
          <div className="main-inner-body-set row-2">
            <div className="main-inner-body-text row-2">
              <span>{mpVariables.mpSec1Body}</span>
              <span className="get-started-txt mt-3">
                {' '}
                {mpVariables.mpSec1Body2}
              </span>
              <span className="buttons-main">
                <button className="btn" type="button">
                  {mpVariables.mpSec1Btn1}
                </button>
                <button className="btn" type="button">
                  {mpVariables.mpSec1Btn2}
                </button>
              </span>
            </div>
            <div className="main-inner-body-img row-2">
              <img src="" alt="intro" />
            </div>
          </div>
        </div>
        <div className="main-inner-body row">
          <div className="main-inner-body-set col-1">
            <div className="main-inner-body-text">
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
