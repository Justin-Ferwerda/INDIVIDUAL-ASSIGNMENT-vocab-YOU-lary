import addCardForm from '../Forms/addCardForm';
import signOut from '../../helpers/signOut';

const navEvents = () => {
  document.querySelector('#create-card').addEventListener('click', addCardForm);
  document.querySelector('#logout').addEventListener('click', signOut);
};

export default navEvents;
