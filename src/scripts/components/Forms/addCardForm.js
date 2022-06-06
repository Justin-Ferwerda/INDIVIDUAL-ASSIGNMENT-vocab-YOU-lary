import renderToDOM from '../../helpers/renderToDOM';
import clearDom from '../../helpers/clearDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">Language/Tech</label>
        <input type="text" class="form-control" id="languageTech" placeholder="Language/Tech" value="${obj.languageTech || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Card</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
