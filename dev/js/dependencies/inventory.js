var inventory =
{
  "inventory_uid": 1288172787,
  "inventory_user": "Ajax413",
  "inventory": [
    {
      "name": "Jace, the Mind Sculptor",
      "set": "EMA",
      "quantity": 1,
      "condition": "NM",
      "modifiers": [
        {
          "foil": false,
          "artist_signed": false
        }
      ],
      "trade": false
    },
    {
      "name": "Vendilion Clique",
      "set": "M25",
      "quantity": 2,
      "condition": "NM",
      "modifiers": [
        {
          "foil": false,
          "artist_signed": false
        }
      ],
      "trade": false
    }
  ]
};
var inventory = JSON.stringify(inventory);

var inventoryObj;

importInventory(inventory);
addCardInventory("Teferi, Hero of Dominaria", "DOM", 2, "NM", false, false);


/**
*
*/
function importInventory(inv){
  inventoryObj = JSON.parse(inventory);
}

/**
*
*/
function exportInventory(){

}

/**
* Function to add card to inventory object
*/
function addCardInventory(name, set, quantity, condition, modifiers, trade){
  // TODO Check if card is already in inventory, then update if so

  var card = {
    "name": name,
    "set": set,
    "condition": condition,
    "modifiers": modifiers,
    "trade": trade
  }

  inventoryObj['inventory'].push(card);
}

/**
*
*/
function removeCardInventory(name){
  var index = getCardInventory(name)['index'];
  console.log(index);
  if(index > -1){
    inventoryObj['inventory'].splice(index, 1);
  }
}

/**
*
*/
function updateCardInventory(){

}

/**
*
*/
function getCardInventory(name){
  var index = -1;
  var val = name;
  inventoryObj['inventory'].find(function(item, i){
    if(item.name === val){
      index = i;
    }
  });
  var filteredObj = inventoryObj['inventory'][index];
  return {"index": index, "cardObj": filteredObj};
}
