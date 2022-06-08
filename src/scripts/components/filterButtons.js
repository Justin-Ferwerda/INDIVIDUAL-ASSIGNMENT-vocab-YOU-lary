import renderToDOM from '../helpers/renderToDOM';

const filterButtons = () => {
  const buttonString = `<div class="btn-group btn-group-toggle" data-toggle="buttons" id="filterbtn">
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
    <input type="radio" name="options" id="HTML" autocomplete="off"> HTML
  </label>
  <label class="btn btn-secondary">
    <input type="radio" name="options" id="CSS" autocomplete="off"> CSS
  </label>
</div>`;
  renderToDOM('#filter-buttons', buttonString);
};

export default filterButtons;
