import { createCard, updateCard } from '../../../api/cardData';
import { showCards } from '../cardsPage';
import time from '../timeSubmit';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const vocabCard = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#languageTech').value,
        timeSubmitted: time(),
        uid
      };
      createCard(vocabCard).then((cardsArray) => showCards(cardsArray));
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const updatedCard = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#languageTech').value,
        firebaseKey,
        uid
      };
      updateCard(updatedCard).then((cardsArray) => showCards(cardsArray));
    }
  });
};

export default formEvents;
