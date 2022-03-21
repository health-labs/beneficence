import { campColors } from '../const/campColors';

export const generateRandomCardBg = () => {
  const randomIndex = Math.floor(Math.random() * campColors.length);
  return campColors[randomIndex];
};

export const formatTitle = (title: string) => {
  const titleArray = title.split('. ');
  const formattedTitle = titleArray.map((sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });
  return formattedTitle.join('. ');
};

export const calcDaysFromToday = (startDate: string) => {
  const today = new Date();
  const startDateObj = new Date(startDate);
  const diffTime = Math.abs(today.getTime() - startDateObj.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let time = '';
  if (diffDays === 0) {
    time = 'today';
  } else if (diffDays === 1) {
    time = 'yesterday';
  } else if (diffDays > 31) {
    time = `${Math.floor(diffDays / 31)} months ago`;
  } else {
    time = `${diffDays} days ago`;
  }
  return time;
};

export const amtToStr = (amount: number) => {
  const amtInMil = amount / 1000000;
  const amtInThousand = amount / 1000;
  let amtStr = '';
  if (amtInMil > 1) {
    amtStr = `${amtInMil.toFixed(2)}M`;
  } else if (amtInThousand > 1) {
    amtStr = `${amtInThousand.toFixed(1)}k`;
  } else {
    amtStr = `${amount}`;
  }
  return amtStr;
};

export const amountWithCommas = (amount: number) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const amtAsM = (amount: number) => {
  const amtInMil = amount / 1000000;
  if (amtInMil > 1) {
    return `${amtInMil.toFixed(2)} M`;
  }
  return amountWithCommas(amount);
};
