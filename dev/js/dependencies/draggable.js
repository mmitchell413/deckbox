function deckDropEvent(e){
  e.preventDefault();
  var data = e.dataTransfer.getData("text/html");
  if(e.target.className == "draggable-container"){
    e.target.appendChild(document.getElementById(data));
  }else{
    e.target.closest(".draggable-container").appendChild(document.getElementById(data));
  }
}

function deckDragOverEvent(e){
  e.preventDefault();
}

function cardDrag(e){
  e.dataTransfer.setData("text/html", e.target.id);
}
