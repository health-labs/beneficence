export type DonorTypes = {
  name: string;
  amount: number;
  pubKey: string;
  imgSrc?: string;
};

export type PoUTypes = {
  hasContent: boolean;
  text: string;
  imgSrc: string[];
};

export type PoNTypes = {
  text: string;
  imgSrc: string[];
};

export type WhyDonateType = { hasContent: boolean; text?: string };

export type TabContentType = {
  Story: string;
  PoN: PoNTypes;
  PoU: PoUTypes;
  whyDonate: WhyDonateType;
  donors: DonorTypes[];
};
