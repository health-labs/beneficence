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
