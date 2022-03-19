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
