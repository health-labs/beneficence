import React, { useEffect } from 'react';
import CVoteStatBox from '../../components/Campaign/Voting/CVoteStatBox';
import CVoteRtBox from '../../components/Campaign/Voting/CVoteRtBox';
import {
  CampaignCardProps,
  CVoteMinType,
  CVoteType,
  VoteParticipants,
  VotingSteps,
} from '../../types';

const minCData: CampaignCardProps = {
  imgSrc: '',
  title: "Help my son's cancer",
  description:
    'My son is suffering from cancer and we need your help to get him the treatment he needs.',
  link: 'https://www.google.com',
  angelsCount: 8,
  campaignId: '100001',
  collectedFund: 1000,
  orgPubkey: '0x1234567890',
  orgLoc: 'Australia',
};

const minVotingData: CVoteMinType = {
  voteId: '100001',
  cvoteType: 'next_round_approval',
  roundN: 1,
  status: 'ongoing',
  yesVotes: 2080,
  noVotes: 120,
  votingPower: 1000,
  voteContract: '0x89hnasd',
  assocVoteAccOrg: '0xasib8bnas',
  roundRaiseWt: 500,
  outcome: 'passed',
};
const votingSteps: VotingSteps = {
  creation: {
    time: new Date('2021-08-01T00:00:00.000Z'),
    status: 'created',
    txHash: '0x89hnasd11',
  },
  activation: {
    time: new Date('2021-08-01T00:00:00.000Z'),
    status: 'activated',
    txHash: '0x89hnasd12',
  },
  outcome: {
    status: 'vote_in_progress',
  },
  execution: {
    status: 'not_executed',
  },
};

const voteParticipants: VoteParticipants[] = [
  {
    voterPubKey: 'Bene7gabsduib',
    vote: 'YES',
    voteWeight: 345,
  },
  {
    voterPubKey: 'Bene8fabsduib',
    vote: 'NO',
    voteWeight: 5,
  },
  {
    voterPubKey: 'Bene9kadsduib',
    vote: 'YES',
    voteWeight: 1211,
  },
  {
    voterPubKey: 'Bene0kadsduib',
    vote: 'YES',
    voteWeight: 12,
  },
];

const fullVotingData: CVoteType = {
  ...minVotingData,
  steps: votingSteps,
  voteCategory: 'campaign_vote',
  campaignId: '100001',
  campaignTitle: "Help my son's cancer",
  organiserPubKey: '0x1234567890',
  voters: voteParticipants,
};
function CVoting() {
  useEffect(() => {
    document.title = 'Campaign Voting | Beneficence';
  }, []);
  return (
    <div className="flex p-8 bg-bene-cvote-bg bg-no-repeat pl-per-5 bg-opacity-10 flex-wrap flex-row justify-between min-h-v1screen">
      <div className="basis-3/5 w-full md:w-fit md:max-w-per-60 bg-white">
        <div>
          <CVoteStatBox
            minCData={minCData}
            voteParticipants={voteParticipants}
            votingData={minVotingData}
          />
        </div>
      </div>
      <div className="basis-2/5 donate-bar-right flex flex-col md:max-w-per-40  pl-4 mx-auto">
        <CVoteRtBox votingData={fullVotingData} />
      </div>
    </div>
  );
}

export default CVoting;
