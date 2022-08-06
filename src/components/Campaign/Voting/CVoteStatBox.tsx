import React, { useEffect } from 'react';
import { CampaignCardProps } from '../../../types/Campaign';
import { CVoteMinType, VoteParticipants } from '../../../types/Voting';
import { openPkOnExplorer } from '../../../utils/util';
import CVoteProgress from './FullComp/CVoteProgress';
import votersIco from '../../../assets/voters.svg';
import useSingleModal from '../../../hooks/useSingleModal';
import Voters from './FullComp/Voters';

type CVoteStatBoxTypes = {
  className?: string;
  votingData: CVoteMinType;
  color?: string;
  minCData: CampaignCardProps;
  voteParticipants: VoteParticipants[];
};

function CVoteStatBox({
  className,
  votingData,
  color = 'sky-blue',
  minCData,
  voteParticipants,
}: CVoteStatBoxTypes) {
  const { handleModalAction, isOpen, setIsOpen } = useSingleModal();
  return (
    <div className={`rounded-bene-c-2 p-6 ${className} bg-bene-cmp-${color}`}>
      <div className="cvote-tags flex text-sm gap-3">
        <span
          className={`rounded-full bg-bene-f-${color} text-white py-1 px-2 font-semibold text-center`}>
          {votingData.status === 'not_started'
            ? ''
            : votingData.status[0].toUpperCase() + votingData.status.slice(1)}
        </span>
        <span
          className={`rounded-full bg-bene-f-${color} text-white py-1 px-2 font-semibold text-center`}>
          Campaign Vote
        </span>
      </div>
      <div className="cvheader-title">
        <h1 className="text-2xl font-semibold text-left mt-2 mb-2">
          Allow{' '}
          {votingData.cvoteType === 'next_round_approval'
            ? 'donations to '
            : 'withdrawal from '}
          {`"${minCData.title}"`} for Round {votingData.roundN}{' '}
          {votingData.cvoteType === 'withdrawal_approval' && 'and before '}?
        </h1>
        <div className="flex items-center text-gray-400 text-sm">
          owned by
          <div
            className="ml-1 font-semibold hover:cursor-pointer"
            onClick={(e: any) =>
              openPkOnExplorer(votingData.assocVoteAccOrg, e)
            }
            onKeyDown={(e: any) => {
              if (e.key === 'Enter')
                openPkOnExplorer(votingData.assocVoteAccOrg, e);
            }}
            role="button"
            tabIndex={0}>
            {votingData.assocVoteAccOrg}
          </div>
        </div>
      </div>
      <div className="my-2 flex justify-between gap-20">
        <CVoteProgress
          bgColor="bg-white bg-opacity-25" // may need to change as per bg
          text="YES"
          num={votingData.yesVotes}
          total={votingData.yesVotes + votingData.noVotes}
          innerColor="blue-500"
          className="max-w-sm"
        />
        <CVoteProgress
          bgColor="bg-white bg-opacity-25" // may need to change as per bg
          text="NO"
          num={votingData.noVotes}
          total={votingData.yesVotes + votingData.noVotes}
          innerColor="red-500"
          className="max-w-sm"
        />
      </div>
      <div className="my-6 bg-white bg-opacity-25 rounded-bene-c-2 p-4">
        <div className="flex justify-between">
          <div className="text-left">
            <div className="text-md font-bold">
              {votingData.yesVotes > votingData.noVotes ? 'YES' : 'NO'}
            </div>
            <div className="text-left text-xs font-semibold opacity-50">
              Dominant votes
            </div>
          </div>

          {(votingData.outcome === 'passed' ||
            votingData.outcome === 'failed') && (
            <div className="text-center">
              <div className="text-md font-bold">
                {votingData.outcome.toUpperCase()}
              </div>
              <div className="text-xs font-semibold opacity-50">Outcome</div>
            </div>
          )}
          <div className="text-right">
            <div className="text-md font-bold">
              {votingData.cvoteType === 'next_round_approval'
                ? 'DONORS'
                : 'STAKERS'}
            </div>
            <div className="text-right text-xs font-semibold opacity-50">
              Max Vote Weightage
            </div>
          </div>
        </div>
        <div>
          {votingData.status === 'not_started' && (
            <div className="text-center text-md text-bene-dark-blue mt-2 opacity-80">
              Voting has not started yet
            </div>
          )}
          {votingData.status === 'ongoing' && (
            <div className="text-center text-md text-bene-dark-blue mt-3 opacity-80">
              If passed, organiser will be able to{' '}
              {votingData.cvoteType === 'next_round_approval'
                ? 'raise upto'
                : 'withdraw upto'}{' '}
              <span className="font-bold">${votingData.roundRaiseWt}</span> in
              this round.
            </div>
          )}
          {votingData.status === 'completed' &&
            votingData.outcome === 'passed' && (
              <div className="text-center text-md text-bene-dark-blue mt-3 opacity-80">
                Organiser is able to withdraw upto{' '}
                <span className="font-bold">${votingData.roundRaiseWt}</span>
              </div>
            )}
        </div>
      </div>
      <div className="vote-participants">
        <div className="flex justify-end">
          <div className="font-semibold text-lg flex items-center">
            <img src={votersIco} alt="voters" className="inline mr-1 w-5 h-5" />
            Vote Participants
          </div>
        </div>
        <Voters
          voteParticipants={voteParticipants}
          type="short"
          className=" bg-white bg-opacity-25">
          <div>
            <button
              className="text-bene-f-blue font-semibold text-sm bg-transparent p-0 -top-4 relative shadow-none hover:opacity-90"
              onClick={(e) => {
                e.preventDefault();
                handleModalAction(
                  <Voters
                    voteParticipants={voteParticipants}
                    className=" bg-white opacity-90 min-w-40vw overflow-y-scroll max-h-px-425">
                    <button
                      className="font-semibold absolute text-lg cursor-pointer rounded-full bg-black text-white opacity-60 -ml-4 -mt-4  min-w-30px"
                      type="button"
                      onClick={() => {
                        e.preventDefault();
                        setIsOpen(false);
                      }}>
                      x
                    </button>
                  </Voters>
                );
              }}
              type="button">
              view more
            </button>
          </div>
        </Voters>
      </div>
    </div>
  );
}

export default CVoteStatBox;
