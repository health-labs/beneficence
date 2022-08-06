import React from 'react';
import Close from '../../../Button/Close';
import useSingleModal from '../../../../hooks/useSingleModal';

function AddVotingPower({
  votingAddr,
  votingContractAddr,
}: {
  votingAddr: string;
  votingContractAddr: string;
}) {
  const { handleModalAction } = useSingleModal();
  return (
    <div className="flex flex-col items-center justify-center p-6 pt-3 bg-white rounded-bene-c-2 max-w-md">
      <div className="w-full flex flex-row-reverse">
        <Close onClick={handleModalAction} />
      </div>
      <h1 className="text-2xl font-semibold text-left mb-2">
        Add Voting Power
      </h1>
      <p className="text-gray-400 text-sm">
        You can gain more voting power by adding/sending tokens to the
        associated voting account.
      </p>
      <div className="flex items-center gap-3 mt-4 w-full">
        <input
          type="text"
          className="h-10 rounded-bene-c-2 bg-gray-100 px-4 ring-0 focus:ring-0 focus:outline-none w-full min-w-max"
          placeholder="Token Amount"
        />
        <button
          className="bg-bene-f-sky-blue text-white py-2 px-4 rounded-bene-c-2"
          type="button">
          Add
        </button>
      </div>
      <div className="flex items-center gap-3 mt-4 w-full mb-4">
        <input
          type="text"
          className="h-10 rounded-bene-c-2 text-gray-500 bg-gray-100 px-4 ring-0 focus:ring-0 focus:outline-none w-full min-w-max"
          value={votingAddr}
          disabled
        />{' '}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16 11H13V8H11V11H8V13H11V16H13V13H16V11Z"
            fill="#BDBDBD"
          />
        </svg>
      </div>
    </div>
  );
}

export default AddVotingPower;
