import React from 'react';
import { VoteParticipants } from '../../../../types';

interface VotersBoxType {
  voteParticipants: VoteParticipants[];
  children?: React.ReactNode;
  type?: string;
  className?: string;
  color?: string;
}

function Voters({
  voteParticipants,
  children,
  type = 'long',
  className = '',
  color,
}: VotersBoxType) {
  const voteParticipantsList =
    type === 'short' ? voteParticipants.slice(0, 3) : voteParticipants;

  return (
    <div className={`flex flex-col gap-2 mt-2 rounded-bene-c-2 ${className}`}>
      {voteParticipantsList.map((voter: any, index) => (
        <div
          className={`flex justify-between p-2 gap-2 ${
            index % 2 === 1 && 'bg-white bg-opacity-30'
          }`}
          key={voter.voterPubKey}>
          <div className="flex text-center justify-start gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-bene-f-blue text-white text-sm font-semibold" />
            <div className="font-semibold text-sm flex self-center">
              {voter.voterPubKey.slice(0, 4)}...
              {voter.voterPubKey.slice(-5)}
            </div>
          </div>
          <div className="flex text-md font-bold">
            <span className="flex self-center">{voter.voteWeight}</span>
            <span className="text-xs flex self-center ml-1 opacity-60">
              {voter.vote} {voter.voteWeight > 1 ? 'VOTES' : 'VOTE'}
            </span>
          </div>
        </div>
      ))}
      {children}
    </div>
  );
}

export default Voters;
