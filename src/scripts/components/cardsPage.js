import clearDom from '../helpers/clearDom';
import renderToDOM from '../helpers/renderToDOM';

const noVocabCards = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No Cards</h1>';
};

const showCards = (array) => {
  clearDom();

  if (array.length) {
    let domString = '';
    array.forEach((card) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <p class="card-text">${card.definition}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${card.timeSubmitted}</li>
        <li class="list-group-item"><strong>Language:</strong> ${card.languageTech}</li>
      </ul>
      <div class="card-body">
      <i id="edit-card--${card.firebaseKey}" class="fas fa-edit btn btn-info"></i>
      <i id="delete-card--${card.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>
    `;
    });
    renderToDOM('#card-container', domString);
  } else {
    noVocabCards();
  }
};

export { noVocabCards, showCards };
