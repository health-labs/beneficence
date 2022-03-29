import React, { useContext } from 'react';
import WizardContext from '../context/WizardContext';

function useWizardContext() {
  const { campaignData, setCampaignData } = useContext(WizardContext);
  return { campaignData, setCampaignData };
}

export default useWizardContext;
