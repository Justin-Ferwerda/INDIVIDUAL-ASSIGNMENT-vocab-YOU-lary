import renderToDOM from '../helpers/renderToDOM';

const showButtons = () => {
  const buttonString = `<div class="btn-group btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
    <input type="radio" name="options" id="all-languages" autocomplete="off" checked> All Languages
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="javascript" autocomplete="off"> Javascript
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="python" autocomplete="off"> Python
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="html" autocomplete="off"> HTML
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="css" autocomplete="off"> CSS
  </label>
</div>`;
  renderToDOM('#filter-buttons', buttonString);
};

export default showButtons;
