export type CVoteTypes =  "withdrawal_approval" | "next_round_approval";

export type RoundNType = 0 | 1 | 2 | 3 | 4 | 5 ;

export type VoteStatus = "ongoing" | "completed" | "not_started";

export type CVCreationType = "created" | "updated" | "deleted" | "not_created";

export type CVActivationType = "activated" | "not_activated";

export type CVOutcomeType = "passed" | "failed" | "vote_in_progress";

export type CVExecutionType = "executed" | "not_executed" | "executed_partially" | "execution_failed";

export type CVoteOption = "YES" | "NO";

export type VoteCategory = "campaign_vote"

export type VotingStepType = {status:CVCreationType | CVActivationType | CVOutcomeType | CVExecutionType, time?: Date, txHash?: string}

export type VotingSteps = {
    creation:  VotingStepType,
    activation: VotingStepType,
    outcome: VotingStepType,
    execution: VotingStepType
};

export type CVoteMinType = {
    voteId : string,
    cvoteType: CVoteTypes,
    yesVotes: number,
    noVotes: number,
    roundN: RoundNType,
    status: VoteStatus,
    voteContract : string,
    votingPower: number,
    assocVoteAccOrg: string,
    roundRaiseWt : Number,
    outcome?: CVOutcomeType,
}

export type VoteParticipants = {
    voterPubKey: string,
    vote: CVoteOption,
    voteWeight: number,
}

export type CVoteType = CVoteMinType & {
    steps: VotingSteps,
    voteCategory: VoteCategory,
    campaignId: string,
    campaignTitle: string,
    organiserPubKey: string,
    voters: VoteParticipants[],
}
