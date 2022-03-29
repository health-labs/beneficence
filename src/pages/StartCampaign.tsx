import React, { useState } from 'react';
import ActiveWizard from '../components/Wizard/Layout/ActiveWizard';
import WizardFooter from '../components/Wizard/Layout/WizardFooter';

import Account from '../components/Wizard/CampaignInfo';
import { WizardContextProvider } from '../context/WizardContext';

function StartCampaign() {
  const [wizrdNum, setwizrdNum] = useState(1);

  const wizrdIdx = ['Details'];

  const showWizrd = (step: number) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <div />;
      default:
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
        <ActiveWizard wizrdIdx={wizrdIdx} wizrdNum={wizrdNum} />

        <div className="my-10 p-10 ">
          <WizardContextProvider>{showWizrd(wizrdNum)}</WizardContextProvider>
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
