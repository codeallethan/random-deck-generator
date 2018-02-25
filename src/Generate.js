import { CardList } from './CardList';

export const selectRandomCards = () => {
  let CardArr = CardList.slice(0);
  let deckArr = [];
  for (let i = 0; i < 8; i++) {
    let pickCard = CardArr[Math.floor(Math.random() * CardArr.length)];
    let index = CardArr.indexOf(pickCard);
    CardArr.splice(index, 1);
    deckArr.push(pickCard);
  }
  return deckArr;
};
