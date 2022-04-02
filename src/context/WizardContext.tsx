import React, { useMemo, createContext, useState } from 'react';
import {
  OrganiserTypes,
  CampaignTagsTypes,
  CampaignDetailsTypes,
  PONTypes,
  POUTypes,
  WhyDonateType,
} from '../types/Campaign';

type WizardContextProps = {
  organiserInfo: OrganiserTypes;
  setOrganiserInfo: React.Dispatch<React.SetStateAction<OrganiserTypes>>;
  campaignInfo: CampaignDetailsTypes;
  setCampaignInfo: React.Dispatch<React.SetStateAction<CampaignDetailsTypes>>;
  ponInfo: PONTypes;
  setPonInfo: React.Dispatch<React.SetStateAction<PONTypes>>;
  pouInfo: POUTypes;
  setPouInfo: React.Dispatch<React.SetStateAction<POUTypes>>;
  whyDonateInfo: WhyDonateType;
  setWhyDonateInfo: React.Dispatch<React.SetStateAction<WhyDonateType>>;
};

const defaultCampaignState = {
  organiserInfo: {
    organiserName: '',
    organiserPubkey: '',
    organiserEmail: '',
    organiserId: '',
    organiserCountry: '',
    organiserPin: '',
  },
  campaignInfo: {
    id: '',
    title: '',
    description: '',
    goal: 0,
    createdDate: '',
    startDate: '',
    stoppedDate: '',
    status: '',
    cover: '',
    tags: [],
  },
  ponInfo: {
    description: '',
    imgArr: [],
  },
  pouInfo: {
    hasContent: false,
    description: '',
    imgArr: [],
  },
  whyDonateInfo: {
    hasContent: false,
  },
};
const WizardContext = createContext<WizardContextProps>({
  organiserInfo: defaultCampaignState.organiserInfo,
  setOrganiserInfo: () => undefined,
  campaignInfo: defaultCampaignState.campaignInfo,
  setCampaignInfo: () => undefined,
  ponInfo: defaultCampaignState.ponInfo,
  setPonInfo: () => undefined,
  pouInfo: defaultCampaignState.pouInfo,
  setPouInfo: () => undefined,
  whyDonateInfo: defaultCampaignState.whyDonateInfo,
  setWhyDonateInfo: () => undefined,
});

export function WizardContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [organiserInfo, setOrganiserInfo] = React.useState<OrganiserTypes>(
    defaultCampaignState.organiserInfo
  );
  const [campaignInfo, setCampaignInfo] = React.useState<CampaignDetailsTypes>(
    defaultCampaignState.campaignInfo
  );

  const [ponInfo, setPonInfo] = React.useState<PONTypes>(
    defaultCampaignState.ponInfo
  );

  const [pouInfo, setPouInfo] = React.useState<POUTypes>(
    defaultCampaignState.pouInfo
  );

  const [whyDonateInfo, setWhyDonateInfo] = React.useState<WhyDonateType>(
    defaultCampaignState.whyDonateInfo
  );

  const value = useMemo(
    () => ({
      organiserInfo,
      setOrganiserInfo,
      campaignInfo,
      setCampaignInfo,
      ponInfo,
      setPonInfo,
      pouInfo,
      setPouInfo,
      whyDonateInfo,
      setWhyDonateInfo,
    }),
    [
      organiserInfo,
      campaignInfo,
      ponInfo,
      pouInfo,
      whyDonateInfo,
      setOrganiserInfo,
      setCampaignInfo,
      setPonInfo,
      setPouInfo,
      setWhyDonateInfo,
    ]
  );
  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
}

export default WizardContext;
