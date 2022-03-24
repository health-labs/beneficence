export type ShareCampaignTypes = {
  id: string;
  organiser: string;
  title: string;
  className?: string;
};

export type Category = 'social' | 'personal';

export type ShareOptionsTypes = {
  img: string;
  alt: string;
  icoName: string;
  category: Category;
  url: string;
};
