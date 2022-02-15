import { getData } from "./_library";

//Rundomize function
export const getRandomPicture = () => {
  const cardData = getData();
  const randomCardData = cardData.sort(() => Math.random() - 0, 5);
  // console.log(randomCardData);
  return randomCardData;
};
