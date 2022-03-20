import React, { useEffect } from 'react';
import Title from '../../components/Campaign/Title';
import { Campaign } from '../../types/Campaign';
import childImg from '../../assets/campimg-1.png';
import ShortInfoCard from '../../components/Campaign/ShortInfoCard';
import { generateRandomCardBg } from '../../utils/util';
import { campColorRgb } from '../../const/campColors';
import { rgbaToHex } from '../../utils/campaign';
import DonateBox from '../../components/Campaign/DonateBox';

const campData: Campaign = {
  id: '1',
  image: childImg,
  title: `Help my son's cancer`,
  description: 'Campaign description',
  startDate: '2020-01-01',
  endDate: '2020-01-01',
  createdBy: { pubKey: '0x0098aJnDX09a8sdHh', name: 'Vink' },
  isApproved: true,
  fundToCollect: 2000,
  fundCollected: 110,
  angelsCount: 8,
};

function CampaignPage() {
  const {
    id,
    image,
    title,
    description,
    startDate,
    endDate,
    createdBy,
    isApproved,
    fundToCollect,
    fundCollected,
    angelsCount,
  } = campData;
  const campThemeName = generateRandomCardBg();
  const campThemeColor = rgbaToHex(campColorRgb[campThemeName]);
  useEffect(() => {
    document.title = `${title} | Beneficence`;
  }, []);
  return (
    <div className="flex p-8 pl-per-5 flex-wrap flex-row justify-between">
      <div className="basis-3/5">
        <Title title={title} />
        <div className="py-3">
          <img
            src={image}
            alt={`${title} cover`}
            className="w-beat-2 rounded-bene-c-2"
          />
        </div>
      </div>
      <div className="basis-2/5 flex flex-col md:max-w-per-30">
        <div className="flex-grow">
          <div className="sticky top-12 gap-8 flex flex-col">
            <ShortInfoCard data={campData} ctheme={campThemeName} />
            <DonateBox data={campData} ctheme={campThemeName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignPage;
