var testDeck =
{
  "name": "Test Deck",
  "image": "",
  "id": "1846774283",
  "mainboard": [
    {
      "name": "Jace, the Mind Sculptor",
      "quantity": 2,
      "current-deck": "1846774283"
    },
    {
      "name": "Logic Knot",
      "quantity": 2,
      "current-deck": "1739264872"
    }
    // "Survival of the Fittest": 4,
    // "Jace, the Mind Sculptor": 4,
    // "Logic Knot": 2,
    // "Path to Exile": 4,
    // "Dovin's Veto": 2
  ],
  "sideboard":{

  }
}

displayDeckDraggableList(testDeck, $('#draggable-container1'));

function importDeck(decklist){

}

function exportDeck(){

}

function getDeckMainboard(){

}

function setDeckMainboard(){

}

function getDeckSideboard(){

}

function setDeckSideboard(){

}

function addCardMainboard(){

}

function removeCardMainboard(){

}

function updateCardMainboard(){

}

function getCardMainboard(){

}

function addCardSideboard(){

}

function removeCardSideboard(){

}

function updateCardSideboard(){

}

function getCardSideboard(){

}

function generateCardUID(){
  var uid = Math.floor(Math.random() * 99999999);
  return uid;
}

function displayDeckDraggableList(deckJson, container){
  container.prev(".deck-name").text(deckJson["name"]);
  var mainboard = deckJson["mainboard"];
  mainboard.forEach(function(element){
    var cardImg = imageSearch(element.name);
    var cardObj = "<div class='draggable-card' draggable='true' ondragstart='cardDrag(event)'' id='" + generateCardUID() + "' style='background:url(" + cardImg +"); background-size:contain;'/></div>"
    container.append(cardObj);
  });
}

function displayDeckList(deckJson, container){
  deckObj = JSON.parse(deckJson);
}
