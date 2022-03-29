import React, { useMemo, createContext, useState } from 'react';

type WizardContextProps = {
  campaignData: any;
  setCampaignData: React.Dispatch<React.SetStateAction<any>>;
};

const WizardContext = createContext<WizardContextProps>({
  campaignData: {},
  setCampaignData: () => undefined,
});

export function WizardContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [campaignData, setCampaignData] = useState({
    title: '',
    organiser: '',
  });
  const value = useMemo(
    () => ({
      campaignData,
      setCampaignData,
    }),
    [campaignData, setCampaignData]
  );
  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
}

export default WizardContext;
