import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import ActiveWizard from '../components/Wizard/Layout/ActiveWizard';
import WizardFooter from '../components/Wizard/Layout/WizardFooter';
import CampaignInfo from '../components/Wizard/CampaignInfo';
import { WizardContextProvider } from '../context/WizardContext';
import SignIn from '../components/Signin/SignIn';
import AbtCampaign from '../components/Wizard/AbtCampaign';
import SubmitCampaign from '../components/Wizard/SubmitCampaign';

function StartCampaign() {
  const [wizrdNum, setwizrdNum] = useState(1);
  const { connected, publicKey } = useWallet();

  const wizrdIdx = ['Details', 'Campaign details', 'Proof of need'];

  const showWizrd = (step: number) => {
    switch (step) {
      case 1:
        return <CampaignInfo />;
      case 2:
        return <AbtCampaign />;
      case 3:
        return <SubmitCampaign />;
      default:
        return <div>Oops something&apos;s not right. Please refresh</div>;
    }
    return <div />;
  };

  const onClickNxt = (goto: string) => {
    let newStep = wizrdNum;
    if (goto === 'next') {
      newStep += 1;
    } else {
      newStep -= 1;
    }
    if (newStep > 0 && newStep <= wizrdIdx.length) {
      setwizrdNum(newStep);
    }
  };

  return (
    <div className="mx-auto rounded-2xl m-8 bg-bene-very-light-blue pb-2 shadow-xl md:w-per-90">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        {connected && <ActiveWizard wizrdIdx={wizrdIdx} wizrdNum={wizrdNum} />}
        <div className="my-10 p-10 ">
          <WizardContextProvider>
            {connected ? (
              showWizrd(wizrdNum)
            ) : (
              <div className="flex justify-center items-center">
                <div className="text-center text-gray-500 flex flex-col gap-5 justify-center">
                  <p className="text-xl font-semibold">
                    Connect your wallet to continue
                  </p>
                  <SignIn />
                </div>
              </div>
            )}
          </WizardContextProvider>
        </div>
      </div>

      {wizrdNum !== wizrdIdx.length && (
        <WizardFooter
          onClickNxt={onClickNxt}
          wizrdNum={wizrdNum}
          wizrdIdx={wizrdIdx}
        />
      )}
    </div>
  );
}

export default StartCampaign;
