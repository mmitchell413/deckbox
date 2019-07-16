<html>
  <head>
    <title>EDH Deck Tracker</title>

    <link rel='stylesheet' type='text/css' href='css/main.css' />
  </head>

  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">EDH Deck Helper</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Deck
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Commander Staple Tracker</h1>
          <div class="input-group">
            <input type="text" id="card-search-input" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon1">+</span>
            </div>
          </div>

          <ul id='autocomplete-results'>

          </ul>
          <?php include 'php/card.php'; ?>
          <img src="" id="search-image-hover" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h2 class="deck-name" id="deck1-name">Deck Name</h2>
          <div class="draggable-container" id="draggable-container1" ondrop="deckDropEvent(event)" ondragover="deckDragOverEvent(event)">
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="deck-name" id="deck2-name">Deck Name</h2>
          <div class="draggable-container" id="draggable-container2"  ondrop="deckDropEvent(event)" ondragover="deckDragOverEvent(event)">

          </div>
        </div>
      </div>
    </div>
    <script type='text/javascript' src='js/production.min.js'></script>
  </body>
</html>
