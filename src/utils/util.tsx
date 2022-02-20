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
