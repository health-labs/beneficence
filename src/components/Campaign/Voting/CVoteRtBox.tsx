import React from 'react';
import addFund from '../../../assets/add-fund.svg';
import useSingleModal from '../../../hooks/useSingleModal';
import AddVotingPower from './FullComp/AddVotingPower';
import VoteOptBox from './FullComp/VoteOptBox';
import { CVoteType } from '../../../types';
import VotingHistory from './FullComp/VotingHistory';

interface VotingRtBoxTypes {
  className?: string;
  votingData: CVoteType;
  color?: string;
}

function CVoteRtBox({
  className,
  votingData,
  color = 'sky-blue',
}: VotingRtBoxTypes) {
  const { handleModalAction } = useSingleModal();
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
    <div className="grid gap-4">
      <div className="bg-white md:max-w-34vw mmd:max-w-40vw">
        <div
          className={`rounded-bene-c-2 p-5 pb-2 pt-4 ${className} bg-bene-cmp-${color}`}>
          <div className="flex justify-between">
            <div
              className={`flex justify-between gap-14 md:gap-4 sm:overflow-scroll mmd:overflow-none mmd:gap-14 text-white font-bold rounded-xl p-2 px-3 m-auto bg-bene-f-${color}`}>
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
          </div>
          <VoteOptBox
            votingData={votingData}
            className="bg-white bg-opacity-25 my-2 mt-5"
          />
          <div className="text-xs text-black text-opacity-50 mt-1">
            {votingData?.status === 'not_started' &&
              'Voting has not started yet'}
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
      </div>
      <div className="bg-white">
        <div
          className={`rounded-bene-c-2 p-2 ${className} bg-bene-cmp-${color}`}>
          <div className={`${className} rounded-lg p-1 px-2`}>
            <div className="font-bold text-bene-dark-blue text-lg">
              Voting History
            </div>
            <VotingHistory
              historyArr={votingData.steps}
              className="bg-white bg-opacity-25 my-2 mt-5"
            />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div
          className={`all-rounds rounded-bene-c-2 p-2 ${className} bg-bene-cmp-${color}`}>
          <div className={`${className} rounded-lg p-1 px-2`}>
            <div className="font-semibold text-bene-dark-blue text-lg">
              All voting rounds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVoteRtBox;
