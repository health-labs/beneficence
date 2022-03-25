import React from 'react';
import DonationSummary from './DonationSummary';
import DonorDetail from './DonorDetail';

function DonateModal() {
  const { organiser, title, donation } = {
    organiser: 'The Beneficent Society',
    title: 'The Beneficent Society',
    donation: {
      amount: '$100',
      currency: 'USD',
    },
  };

  return (
    <div className="donate-modal-content bg-white p-2 w-9/12 rounded-bene-c-2">
      <div className="donate-title text-bene-light-blue flex items-center">
        <img
          className="go-back pr-2"
          src="https://img.icons8.com/ios-glyphs/30/000000/back.png"
          alt="back"
        />
        <h1 className="font-semibold">Donating to &quot;{title}&quot;</h1>
      </div>
      <div className="steps-progress-bar mx-auto w-2/3 flex justify-between pt-6 pb-4">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/checkmark.png"
          alt="checkmark"
          className="w-4"
        />
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/checkmark.png"
          alt="checkmark"
          className="w-4"
        />
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/checkmark.png"
          alt="checkmark"
          className="w-4"
        />
      </div>
      <div className="w-2/3 m-auto">
        <div className="donate-body">
          <DonationSummary />
        </div>
      </div>
      <div className="donate-footer flex flex-row justify-between items-end">
        <div>
          <button
            type="button"
            className="text-bene-dark-blue font-bold hover:underline px-2 hover:cursor-pointer">
            Close
          </button>
        </div>
        <div className="donate-footer-content float-right">
          <button
            type="button"
            onClick={() => undefined}
            className="continue bg-bene-dark-blue hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-bene-1">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonateModal;
