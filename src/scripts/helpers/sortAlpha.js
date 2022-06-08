import { showCards } from '../components/cardsPage';

const sortAlpha = (cardArray) => {
  cardArray.sort((a, b) => a.title.localeCompare(b.title));
  showCards(cardArray);
};

export default sortAlpha;
