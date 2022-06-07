import signIn from '../helpers/signIn';
import renderToDOM from '../helpers/renderToDOM';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  renderToDOM('#app', domString);
  document.querySelector('#google-auth').addEventListener('click', signIn);
};
export default loginButton;
