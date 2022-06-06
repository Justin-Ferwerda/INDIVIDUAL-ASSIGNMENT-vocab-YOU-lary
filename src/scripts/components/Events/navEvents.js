import addCardForm from '../Forms/addCardForm';

const navEvents = () => {
  document.querySelector('#create-card').addEventListener('click', addCardForm);
};

export default navEvents;
