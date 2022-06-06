import { getCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import filterButttons from '../components/filterButtons';
import { showCards } from '../components/cardsPage';
import logoutButton from '../components/logoutButton';

const startApp = () => {
  domBuilder();
  navBar();
  filterButttons();
  logoutButton();
  getCards().then((cardsArray) => showCards(cardsArray));
};

export default startApp;
