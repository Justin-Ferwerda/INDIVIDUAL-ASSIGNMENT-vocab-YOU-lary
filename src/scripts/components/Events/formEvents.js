import { createCard } from '../../../api/cardData';
import { showCards } from '../cardsPage';
import time from '../timeSubmit';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const vocabCard = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        languageTech: document.querySelector('#languageTech').value,
        timeSubmitted: time()
      };
      createCard(vocabCard).then(showCards);
    }
  });
};

export default formEvents;
