export type Campaign = {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  createdBy: string;
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
