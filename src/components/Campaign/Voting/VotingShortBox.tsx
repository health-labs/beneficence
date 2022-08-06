import React from 'react';
import { CVoteMinType } from '../../../types/Voting';
import VotingStausBox from './ShortComp/VotingStausBox';
import extLink from '../../../assets/extLink.svg';
import addFund from '../../../assets/add-fund.svg';
import useSingleModal from '../../../hooks/useSingleModal';
import AddVotingPower from './FullComp/AddVotingPower';
import VoteOptBox from './FullComp/VoteOptBox';

interface VotingShortBoxTypes {
  className?: string;
  votingData: CVoteMinType;
  color?: string;
}

function VotingShortBox({
  className,
  votingData,
  color = 'sky-blue',
}: VotingShortBoxTypes) {
  const { handleModalAction } = useSingleModal();
  const goToVotingPage = () => {
    const url = `${window.location.href}/vote/${votingData.voteId}`;
    window.open(url, '_blank');
  };
  const votingAccAddress = '0xasoaoisnd';
  const addVotingPower = () => {
    handleModalAction(
      <AddVotingPower
        votingAddr={votingAccAddress}
        votingContractAddr="0x89hab9sd"
      />
    );
  };

  return (
    <div
      className={`rounded-bene-c-2 p-5 pb-2 pt-4 ${className} bg-bene-cmp-${color}`}>
      <div className="flex justify-between">
        <div className="w-5" />
        <div
          className={`flex justify-between gap-14 text-white font-bold rounded-xl p-2 px-3 m-auto bg-bene-f-${color}`}>
          <div className="text-md whitespace-nowrap">Voting Power</div>
          <div className="text-md flex gap-2 whitespace-nowrap">
            {votingData?.votingPower} BENE{' '}
            <input
              type="image"
              onClick={(e) => {
                e.preventDefault();
                addVotingPower();
              }}
              src={addFund}
              alt="add vp"
            />
          </div>
        </div>
        <div className="mr-0 w-5">
          <input
            type="image"
            src={extLink}
            alt="view"
            className="w-4 h-4 ml-2 hover:opacity-90"
            onClick={goToVotingPage}
          />
        </div>
      </div>
      <div className="text-lg font-bold py-3">
        Voting to allow{' '}
        {votingData?.cvoteType === 'next_round_approval'
          ? 'further donations'
          : 'withdrawal'}
      </div>
      <div>
        <VotingStausBox
          yVotes={votingData?.yesVotes || 0}
          nVotes={votingData?.noVotes || 0}
          className="bg-white bg-opacity-25"
        />
      </div>
      <VoteOptBox
        votingData={votingData}
        className="bg-white bg-opacity-25 my-2 mt-5"
      />
      <div className="text-xs text-black text-opacity-50 mt-1">
        {votingData?.status === 'not_started' && 'Voting has not started yet'}
        {`${votingData?.status} voting for `}
        <span className="font-bold">
          {`Round ${votingData?.roundN} - ${
            votingData?.cvoteType === 'next_round_approval'
              ? 'Donations'
              : 'Withdrawals'
          }`}
        </span>
      </div>
    </div>
  );
}

export default VotingShortBox;
