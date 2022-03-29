import React from 'react';

function WizardInfo({ text1, text2 }: { text1: string; text2: string }) {
  return (
    <div className="md:col-span-1 m-auto">
      <div className="px-4 sm:px-0 text-left">
        <h3 className="pb-4 font-semibold text-left leading-6 text-2xl text-gray-900">
          {text1}
        </h3>
        <p className="mt-1 text-sm leading-5 text-gray-500">{text2}</p>
      </div>
    </div>
  );
}

export default WizardInfo;
