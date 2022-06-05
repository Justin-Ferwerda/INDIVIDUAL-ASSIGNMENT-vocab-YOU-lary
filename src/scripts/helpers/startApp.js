import { getCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import filterButttons from '../components/filterButtons';
import { showCards } from '../components/cardsPage';

const startApp = () => {
  domBuilder();
  navBar();
  filterButttons();

  getCards().then((cardsArray) => showCards(cardsArray));
};

export default startApp;
