import React from 'react';
import share from '../../assets/share.svg';
import angels from '../../assets/angels.svg';
import donate from '../../assets/donate.svg';
import campimg1 from '../../assets/campimg-1.png';
import dashedsep from '../../assets/dashedsep.svg';
import { campColors } from '../../const/campColors';
import { formatTitle, generateRandomCardBg } from '../../utils/util';
import DonateButtonSmall from '../Button/DonateButtonSmall';
import { CampaignCardProps } from '../../types/Campaign';

function DonationCard(props: CampaignCardProps) {
  const { imgSrc, title, description, link, angelsCount, campaignId } = props;
  return (
    <div className="campaign-outer-box rounded-bene-c-1 snap-center shadow-c-1 max-w-xs m-auto md:m-0">
      <div className="campaign-img">
        <img src={campimg1} alt={title} className=" rounded-t-bene-c-1" />
      </div>
      <div className="campaign-body p-2">
        <div
          className={`campaign-body-inner-box rounded-bene-c-2 p-2 bg-bene-cmp-${generateRandomCardBg()}`}>
          <div className="campaign-title text-cmpheading font-extrabold">
            {formatTitle(title)}
          </div>
          <div className="dashed-separator">
            <img src={dashedsep} alt="separator" className="w-half mt-2" />
          </div>
          <div className="campaign-description my-2 text-cmpdesc-shrt max-h-em-3-1/4 min-h-em-3-1/4">
            {description}
          </div>
          <div className="campaign-progress">
            <div className="campaign-progress-percent">
              <div className="campaign-total-val"> </div>
              <div className="campaign-progress-bar">
                <div className="campaign-progress-bar-inner"> </div>
              </div>
            </div>
            <div className="interaction-opt flex justify-between">
              <div className="interaction-opt-inner-left flex my-auto mx-0">
                <div className="campaign-share mr-4">
                  <img src={share} alt="share" />
                </div>
                <div className="campaign-angels flex items-center">
                  <img src={angels} alt="angels" />
                  <div className="campaign-angels-val text-bene-dark-blue ml-2">
                    {angelsCount}
                  </div>
                </div>
              </div>
              <div className="interaction-opt-inner-right">
                <DonateButtonSmall campaignid={campaignId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationCard;
