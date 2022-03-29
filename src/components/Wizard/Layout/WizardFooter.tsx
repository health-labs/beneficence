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
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        type="button"
        onClick={() => onClickNxt()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          wizrdNum === 1 ? ' cursor-not-allowed opacity-50 ' : ''
        }`}>
        Back
      </button>

      <button
        type="button"
        onClick={() => onClickNxt('next')}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
        {wizrdNum === wizrdIdx.length - 1 ? 'Confirm' : 'Next'}
      </button>
    </div>
  );
}
