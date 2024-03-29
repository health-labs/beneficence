/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Tab } from '@headlessui/react';
import Title from '../../components/Campaign/Title';
import { Campaign } from '../../types/Campaign';
import childImg from '../../assets/campimg-1.png';
import ShortInfoCard from '../../components/Campaign/ShortInfoCard';
import { generateRandomCardBg, pkColor } from '../../utils/util';
import { campColorRgb } from '../../const/campColors';
import { rgbaToHex } from '../../utils/campaign';
import DonateBox from '../../components/Campaign/DonateBox';
import CampaignStory from '../../components/Campaign/Tabs/CampaignStory';
import ProofOfNeed from '../../components/Campaign/Tabs/ProofOfNeed';
import ProofOfUse from '../../components/Campaign/Tabs/ProofOfUse';
import { TabContentType } from '../../types/CampaignDesc';
import WhyDonate from '../../components/Campaign/Tabs/WhyDonate';
import Donors from '../../components/Campaign/Tabs/Donors';
import useWindowResize from '../../hooks/useWindowResize';
import SFNav from '../../components/SubFund/SFNav';
import VotingShortBox from '../../components/Campaign/Voting/VotingShortBox';
import { CVoteMinType } from '../../types/Voting';

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
  const campThemeName = pkColor(createdBy.pubKey);

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

  const [votingData, setVotingData] = useState<CVoteMinType>({
    voteId: '',
    cvoteType: 'withdrawal_approval',
    yesVotes: 0,
    noVotes: 0,
    roundN: 0,
    status: 'not_started',
    voteContract: '',
    votingPower: 0,
    assocVoteAccOrg: '',
    roundRaiseWt: 1,
  });

  useEffect(() => {
    if (title) {
      document.title = `${title} | Beneficence`;
    }
  }, []);
  const handleScroll = () => {
    if (window.innerWidth < 768) {
      return;
    }
    const donateWgt = document.querySelectorAll('.ogninf')[1];
    if (window.scrollY > 32 && window.innerWidth > 767) {
      donateWgt?.classList.add('posn-card-sticky');
    } else {
      donateWgt?.classList.remove('posn-card-sticky');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

    // setting votingData
    setVotingData({
      voteId: '1',
      cvoteType: 'withdrawal_approval',
      yesVotes: 20000,
      noVotes: 5000,
      roundN: 1,
      status: 'ongoing',
      voteContract: '0x9okoj0abdc2naasiuv',
      votingPower: 3000,
      assocVoteAccOrg: '0x0a9oioj0abdc00nasdj',
      roundRaiseWt: 1,
    });
  }, []);

  return (
    <>
      <div className="flex p-8 pl-per-5 flex-wrap flex-row justify-between">
        <div className="basis-3/5 w-full md:w-fit md:max-w-per-60">
          <Title title={title} />
          <div className="py-3">
            <img
              src={image}
              alt={`${title} cover`}
              className="rounded-bene-c-2 w-full"
            />
          </div>

          <div className="basis-2/5 md:hidden flex flex-col md:max-w-per-40 mx-auto py-4 items-center">
            <div>
              <div className="sticky top-12 gap-8 flex flex-col">
                <ShortInfoCard data={campData} ctheme={campThemeName} />
                <DonateBox data={campData} ctheme={campThemeName} />
                <VotingShortBox
                  votingData={votingData}
                  className={campThemeName}
                />
              </div>
            </div>
          </div>

          <div className="py-3 w-full py-auto px-0 overflow-hidden">
            <Tab.Group defaultIndex={0}>
              <Tab.List
                className={`tab-list flex p-2 lg:min-w-min overflow-x-scroll lg:overflow-x-hidden space-x-1 bg-bene-cmp-${campThemeName} rounded-xl`}>
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

        <div className="basis-2/5 donate-bar-right flex flex-col md:max-w-per-40  pl-4 mx-auto">
          <div className="flex-grow">
            <div className="sticky top-12 w-full max-w-em-24">
              <div className="m max-h-screen overflow-y-scroll gap-8 flex flex-col no-scrollbar px-2">
                <ShortInfoCard data={campData} ctheme={campThemeName} />
                <DonateBox data={campData} ctheme={campThemeName} />
                <VotingShortBox
                  votingData={votingData}
                  className={campThemeName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SFNav ctheme={campThemeName} />
    </>
  );
}

export default CampaignPage;
