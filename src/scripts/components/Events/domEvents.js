import { deleteCard, getCards, getSingleCard } from '../../../api/cardData';
import { showCards } from '../cardsPage';
import addCardForm from '../Forms/addCardForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, uid).then((cardArray) => showCards(cardArray));
      }
    }

    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObject) => addCardForm(uid, cardObject));
    }

    if (e.target.id.includes('all-languages')) {
      getCards(uid).then((cardArray) => showCards(cardArray));
    }

    const languageFilter = (language) => {
      if (e.target.id.includes(`${language}`)) {
        const langArray = [];
        getCards(uid).then((cardArray) => {
          cardArray.forEach((card) => {
            if (card.languageTech === `${language}`) {
              langArray.push(card);
              showCards(langArray);
            }
          });
        });
      }
    };

    languageFilter('javascript');
    languageFilter('python');
    languageFilter('HTML');
    languageFilter('CSS');
  });
};

export default domEvents;
