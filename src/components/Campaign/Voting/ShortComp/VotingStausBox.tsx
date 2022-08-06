import React from 'react';
import ProgressBar from '../../../Progress/ProgressBar';

interface VotingStausBoxTypes {
  yVotes: number;
  nVotes: number;
  className?: string;
}

const calcTPercent = (yVotes: number, nVotes: number, type: string) => {
  const totalVotes = yVotes + nVotes;
  if (totalVotes === 0) {
    return 0;
  }
  if (type === 'y') {
    return (yVotes / totalVotes) * 100;
  }
  return (nVotes / totalVotes) * 100;
};

function VotingStausBox({ yVotes, nVotes, className }: VotingStausBoxTypes) {
  return (
    <div className={`${className} rounded-lg p-1 px-2`}>
      <div className="flex justify-between">
        <div className="text-blue-800 text-md font-bold">YES</div>
        <div className="text-red-800 text-md font-bold">NO </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl font-bold">{yVotes}</div>
        <div className="text-xl font-bold">{nVotes}</div>
      </div>
      <ProgressBar
        color={`bg-blue-500 my-1 ${className}`}
        percent={calcTPercent(yVotes, nVotes, 'y')}
      />
      <div className="flex justify-between">
        <div className="text-blue-800 text-base font-semibold">
          {calcTPercent(yVotes, nVotes, 'y')}%
        </div>
        <div className="text-red-800 text-base font-semibold">
          {calcTPercent(yVotes, nVotes, 'n')}%
        </div>
      </div>
    </div>
  );
}

export default VotingStausBox;
