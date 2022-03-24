/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Tab } from '@headlessui/react';
import Title from '../../components/Campaign/Title';
import { Campaign } from '../../types/Campaign';
import childImg from '../../assets/campimg-1.png';
import ShortInfoCard from '../../components/Campaign/ShortInfoCard';
import { generateRandomCardBg } from '../../utils/util';
import { campColorRgb } from '../../const/campColors';
import { rgbaToHex } from '../../utils/campaign';
import DonateBox from '../../components/Campaign/DonateBox';
import CampaignStory from '../../components/Campaign/Tabs/CampaignStory';
import ProofOfNeed from '../../components/Campaign/Tabs/ProofOfNeed';
import ProofOfUse from '../../components/Campaign/Tabs/ProofOfUse';
import { TabContentType } from '../../types/CampaignDesc';
import WhyDonate from '../../components/Campaign/Tabs/WhyDonate';
import Donors from '../../components/Campaign/Tabs/Donors';

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

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
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
  const tabTitles = [
    'Story',
    'Proof of need',
    'Proof of use',
    'Why Donate?',
    'Donors',
  ];
  const [tabContent, setTabContent] = useState<TabContentType>({
    Story: '',
    PoN: {
      text: '',
      imgSrc: [],
    },
    PoU: {
      hasContent: false,
      text: '',
      imgSrc: [],
    },
    whyDonate: { hasContent: false, text: '' },
    donors: [],
  });
  const [pouEnabled, setPouEnabled] = useState(false);
  useEffect(() => {
    setTabContent({
      Story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

      PoN: {
        text: 'The documents in the images below are proof of need',
        imgSrc: [
          'https://freesvg.org/img/abstract-user-flat-4.png',
          'https://img.bb/9asd88',
        ],
      },
      PoU: { hasContent: false, text: '', imgSrc: [] },
      whyDonate: {
        hasContent: false,
        text: 'Lorem ipsum todo donate to help succeed his treatment',
      },

      donors: [
        {
          name: 'Vink',
          pubKey: '0x0a9oioj0abdc00nasdj',
          imgSrc: 'https://freesvg.org/img/abstract-user-flat-4.png',
          amount: 100,
        },
        {
          name: 'Vink',
          pubKey: '0x0a9oioj0abdc00nasdj',
          imgSrc: 'https://freesvg.org/img/abstract-user-flat-4.png',
          amount: 70,
        },
        {
          name: 'Vink',
          pubKey: '0x0a9oioj0abdc00nasdj',
          imgSrc: 'https://freesvg.org/img/abstract-user-flat-4.png',
          amount: 70,
        },
        {
          name: 'Vink',
          pubKey: '0x0a9oioj0abdc00nasdj',
          imgSrc: 'https://freesvg.org/img/abstract-user-flat-4.png',
          amount: 70,
        },
        {
          name: 'Vink',
          pubKey: '0x0a9oioj0abdc00nasdj',
          imgSrc: 'https://freesvg.org/img/abstract-user-flat-4.png',
          amount: 70,
        },
        {
          name: 'Vink',
          pubKey: '0x0a9oioj0abdc00nasdj',
          imgSrc: 'https://freesvg.org/img/abstract-user-flat-4.png',
          amount: 70,
        },
      ],
    });
    const pouEnableStatus = tabContent?.PoU?.hasContent;
    if (typeof pouEnableStatus === 'boolean') {
      setPouEnabled(pouEnableStatus);
    }
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
        <div className="py-3 w-full sm:max-w-60vw py-auto px-0">
          <Tab.Group defaultIndex={0}>
            <Tab.List
              className={`tab-list flex p-2 min-w-min space-x-1 bg-bene-cmp-${campThemeName} rounded-xl`}>
              {tabTitles.map((tabt, index) => (
                <Tab
                  disabled={!pouEnabled && index === 2}
                  className={({ selected }) =>
                    classNames(
                      `w-full p-2 px-4 font-semibold text-lg text-bene-f-${campThemeName} whitespace-nowrap rounded-lg focus:outline-none`,
                      selected
                        ? `bg-white shadow-bene-f-${campThemeName}`
                        : `text-bene-cmp-${campThemeName} hover:bg-white hover:opacity-70`,
                      tabt === 'Proof of use' &&
                        !pouEnabled &&
                        `cursor-not-allowed disabled opacity-50 hover:text-bene-f-${campThemeName}`
                    )
                  }
                  data-tip
                  data-for={!pouEnabled && index === 2 && 'noPou'}
                  key={tabt}>
                  {tabt}
                  <ReactTooltip
                    id="noPou"
                    place="bottom"
                    effect="solid"
                    className="rounded-md">
                    No proof of use given yet
                  </ReactTooltip>
                </Tab>
              ))}
            </Tab.List>
            {tabContent !== undefined && tabContent?.Story && (
              <Tab.Panels className="tab-panels">
                {/* Story */}
                <Tab.Panel className="tab-panel">
                  <CampaignStory story={tabContent?.Story} />
                </Tab.Panel>
                {/* Proof of need */}
                <Tab.Panel className="tab-panel">
                  <ProofOfNeed pon={tabContent?.PoN} title={title} />
                </Tab.Panel>
                {/* Proof of use */}
                <Tab.Panel className="tab-panel">
                  <ProofOfUse pou={tabContent?.PoU} title={title} />
                </Tab.Panel>
                {/* Why donate */}
                <Tab.Panel className="tab-panel">
                  <WhyDonate whyDonate={tabContent?.whyDonate} />
                </Tab.Panel>
                <Tab.Panel className="tab-panel">
                  <Donors
                    title={title}
                    donors={tabContent?.donors}
                    ctheme={campThemeName}
                  />
                </Tab.Panel>
              </Tab.Panels>
            )}
          </Tab.Group>
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
