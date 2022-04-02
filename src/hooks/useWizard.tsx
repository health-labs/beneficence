import React, { useContext } from 'react';
import WizardContext from '../context/WizardContext';

function useWizardContext() {
  const {
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
  } = useContext(WizardContext);
  return {
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
  };
}

export default useWizardContext;
