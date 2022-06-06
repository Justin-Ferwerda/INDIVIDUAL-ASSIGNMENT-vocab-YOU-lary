import { getCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import filterButttons from '../components/filterButtons';
import { showCards } from '../components/cardsPage';
import logoutButton from '../components/logoutButton';
import navEvents from '../components/Events/navEvents';
import formEvents from '../components/Events/formEvents';

const startApp = () => {
  domBuilder();
  formEvents();
  navBar();
  filterButttons();
  logoutButton();
  navEvents();
  getCards().then((cardsArray) => showCards(cardsArray));
};

export default startApp;
