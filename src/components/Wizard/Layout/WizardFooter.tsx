import React from 'react';

export default function WizardFooter({
  onClickNxt,
  wizrdNum,
  wizrdIdx,
}: {
  onClickNxt: any;
  wizrdNum: number;
  wizrdIdx: string[];
}) {
  return (
    <div className="container mt-4 mb-2 flex justify-between px-4">
      <button
        type="button"
        onClick={
          wizrdNum > 1
            ? () => onClickNxt()
            : () => {
                console.log('You are at the first step');
              }
        }
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-gray-800  ${
          wizrdNum === 1
            ? ' cursor-not-allowed opacity-50 '
            : 'text-bene-dark-blue'
        }`}>
        Back
      </button>

      <button
        type="button"
        onClick={
          wizrdNum === wizrdIdx.length
            ? () => {
                console.log("you're on last step");
              }
            : () => onClickNxt('next')
        }
        className={`cursor-pointer rounded-lg bg-bene-dark-blue py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:opacity-90 ${
          wizrdNum === wizrdIdx.length
            ? ' cursor-not-allowed opacity-50 '
            : 'text-white'
        }`}>
        Next
      </button>
    </div>
  );
}
