export type Campaign = {
  id: string;
  image: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  createdBy: { pubKey: string; name: string };
  isApproved: boolean;
  fundToCollect: number;
  fundCollected: number;
  angelsCount: number;
};

export type CampaignCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  angelsCount: number;
  campaignId: string;
};

export type CampaignCardProp = {
  image: string;
  title: string;
  description: string;
  link: string;
  angelsCount: number;
  campaignId: string;
};

// onboarding

export type OrganiserTypes = {
  organiserName: string;
  organiserPubkey: string;
  organiserEmail: string;
  organiserId: string;
  organiserCountry: string;
  organiserPin: string;
};
export type CampaignTagsTypes =
  | 'Diabetes'
  | 'Cancer'
  | 'Cardiovascular'
  | 'Alzheimer'
  | 'Hypertension'
  | 'Obesity'
  | 'Old Age'
  | 'Infection'
  | 'Cerebral palsy'
  | 'Mental Disorder'
  | 'Schizophrenia'
  | 'Autism'
  | 'Depression'
  | 'HIV'
  | 'Hemorrhage'
  | 'Stroke'
  | 'Heart Attack'
  | 'Asthma'
  | 'Respiratory Infection'
  | 'Transplant'
  | 'Tumomur'
  | 'Kidney'
  | 'Brain'
  | 'Addiction'
  | 'Stroke'
  | 'Operation'
  | 'Medicine'
  | 'Treatment'
  | 'Dementia'
  | 'Pneumonia';

export type CampaignDetailsTypes = {
  id: string;
  title: string;
  description: string;
  goal: number;
  createdDate: string;
  startDate: string;
  stoppedDate: string;
  status: string;
  cover: string;
  tags: Array<CampaignTagsTypes>;
};

export type PONTypes = {
  description?: string;
  imgArr: string[];
};

export type POUTypes = {
  hasContent: boolean;
  description: string;
  imgArr: string[];
};

export type WhyDonateType = { hasContent: boolean; text?: string };

export type CampaignArweaveTypes = {
  id: string;
  organiser: OrganiserTypes;
  campaign: CampaignDetailsTypes;
  pon: PONTypes;
  pou?: POUTypes;
  whyDonate: WhyDonateType;
};
