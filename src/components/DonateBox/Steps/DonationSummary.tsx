import React from 'react';

function DonationSummary() {
  const test = {
    organiser: 'Vink',
    title: 'The Beneficent Society',
    donation: {
      amount: 100,
      currency: 'USD',
    },
  };

  return (
    <div className="">
      <div className="text-center font-bold py-2 text-2xl">
        Review and Donate
      </div>
      <div className="donate-summary-content p-4 bg-white max-w-sm mx-auto mt-4 rounded-xl flex justify-start dark:bg-gray-800 md:flex-row flex-col gap-4">
        <div className="review-box w-3/4 m-auto">
          <div className="review-box-content">
            Your donations will directly impact {test.organiser} and their
            family.
          </div>
          <div>Donation</div>

          <div className="grid grid-cols-3 max-w-max m-auto bg-indigo-50 mt-5 p-4 rounded-bene-1">
            <div className="col-span-1 self-center">
              <img
                className="w-15 lg:w-12"
                src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png"
                alt="music icon"
              />
            </div>
            <div className="col-span-1 pt-1">
              <p className="text-gray-600 font-bold lg:text-sm">
                To {test.organiser}
              </p>
              <p className="text-gray-800 font-bold text-xl">
                ${test.donation.amount}
              </p>
            </div>
            <div className="pt-2 flex items-center justify-end">
              <button
                type="button"
                onClick={() => undefined}
                className="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">
                <img
                  className="edit-icon w-8 h-8"
                  src="https://img.icons8.com/ios-glyphs/30/000000/edit.png"
                  alt="edit"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="confirm-n-donate">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Confirm and Donate
        </button>
      </div>
    </div>
  );
}

export default DonationSummary;
