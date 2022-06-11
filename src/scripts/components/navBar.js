import renderToDOM from '../helpers/renderToDOM';

const navBar = () => {
  const domString = `<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">vocab-YOU-lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" id="create-card" aria-current="page" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Create Card</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="logout"  href="#">Logout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="community"  href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Community</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Order Cards By
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" id="alphabetical" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Alphabetical</a></li>
            <li><a class="dropdown-item" id="newest" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Newest</a></li>
            <li><a class="dropdown-item" id="oldest" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Oldest</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" id="search-form" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" id ="search-text" aria-label="Search">
        <button class="btn btn-outline-success" id="search-button" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
