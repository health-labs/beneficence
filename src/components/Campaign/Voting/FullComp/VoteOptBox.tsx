import React from 'react';
import favor from '../../../../assets/favor.svg';
import against from '../../../../assets/against.svg';
import { CVoteMinType } from '../../../../types';

interface VoteOptBoxTypes {
  className?: string;
  votingData: CVoteMinType;
  color?: string;
}

function VoteOptBox({
  className,
  votingData,
  color = 'sky-blue',
}: VoteOptBoxTypes) {
  return (
    <div className={`${className} rounded-lg p-1 px-2`}>
      <div className="font-bold text-bene-dark-blue text-lg mt-1">
        Your vote?
      </div>
      <div className="flex justify-around py-1">
        <div>
          <button
            type="button"
            className="bg-white hover:opacity-80 hover:translate-y-1 transform duration-300 p-4 py-3 rounded-md drop-shadow-c-2">
            <img
              className={`optbtn ${
                votingData.status === 'ongoing' ? '' : 'opacity-20'
              }`}
              src={favor}
              alt="favor"
            />
          </button>
          <div className="font-bold text-sm mt-2">YES</div>
        </div>
        <div>
          <button
            type="button"
            className="bg-white hover:opacity-80 hover:translate-y-1 transform duration-300 p-4 py-3 rounded-md drop-shadow-c-2">
            <img
              className={`optbtn ${
                votingData.status === 'ongoing' ? '' : 'opacity-20'
              }`}
              src={against}
              alt="against"
            />
          </button>
          <div className="font-bold text-sm mt-2">NO</div>
        </div>
      </div>
    </div>
  );
}

export default VoteOptBox;
