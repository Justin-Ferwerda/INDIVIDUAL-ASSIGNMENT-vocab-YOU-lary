import { getCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import filterButtons from '../components/filterButtons';
import { showCards } from '../components/cardsPage';
import navEvents from '../components/Events/navEvents';
import formEvents from '../components/Events/formEvents';
import domEvents from '../components/Events/domEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  filterButtons();
  navEvents(user.uid);
  getCards(user.uid).then((cardsArray) => showCards(cardsArray));
};

export default startApp;
