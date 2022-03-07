import { getData } from "./_library";

//Rundomize function
export const getRandomPicture = () => {
  const cardData = getData();
  const randomCardData = cardData.sort(() => {
    return Math.random() - 0.5;
  });
  return randomCardData;
};
