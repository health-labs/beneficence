import { campColors } from '../const/campColors';

export const generateRandomCardBg = () => {
  const i = Math.floor(Math.random() * campColors.length);
  return campColors[i];
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

export const dateAsTimeStamp = () => {
  const date = new Date();
  return date.getTime();
};

export const emailAsEncodedId = (email: string) => {
  const emailStrt = email.split('@')[0];
  const encodedId = Buffer.from(emailStrt).toString('base64');
  const res = encodedId.length < 5 ? encodedId : encodedId.substring(0, 5);
  return res;
};

export const formattedUserId = (pk: string, email: string) => {
  return `${emailAsEncodedId(email)}${pk.substring(
    1,
    3
  )}${dateAsTimeStamp()}${pk}`;
};

export const pkColor = (pk: string) => {
  const pkEval = pk.split('').reduce((acc, val) => {
    return acc + val.charCodeAt(0);
  }, 0);
  const i = Math.floor(pkEval % campColors.length);
  return campColors[i];
};

export const openPkOnExplorer = (pk: string, e: any) => {
  window.open(`https://explorer.solana.com/address/${pk}`, '_blank');
};
