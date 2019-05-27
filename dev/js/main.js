var cardObj;

$(document).ready(function(){

  $('#card-search-input').on('keyup', function(){
    $('#autocomplete-results').show();
    cardSearchAutocomplete($(this).val());
  });
  fetchCardFromApi("Black Lotus");
  console.log(cardObj);
});

$(document).on('click', '#autocomplete-results li a', function(){
  fillSearchForm($(this).html());
});

$(document).on('mouseover', '#autocomplete-results li a', function(e){
  imageSearch(encodeURIComponent($(this).html()));
  $('#search-image-hover').show();
});

$(document).on('mousemove', function(e){
  var x = e.clientX,
  y = e.clientY;
  $('#search-image-hover').css('top', (y) + 'px');
  $('#search-image-hover').css('left', (x) + 'px');
});

$(document).on('mouseout', '#autocomplete-results li a', function(){
  $('#search-image-hover').hide();
  $('#search-image-hover').attr('src', '');
});

function fillSearchForm(fillString){
  $('#card-search-input').val(fillString);
  $('#autocomplete-results').hide();
}

function cardSearchAutocomplete(query){
  var scryfallUrl;
  scryfallUrl = 'https://api.scryfall.com/cards/autocomplete?q=' + query;

  $.ajax({
    url: scryfallUrl,
    success: function(result){
      var autocompleteQueryResults = result['data'];
      $('#autocomplete-results').html('');
      for (var key in autocompleteQueryResults){
        $('#autocomplete-results').append("<li class='result-child'><a href='#'>" + autocompleteQueryResults[key] + "</a></li>");
      };
    }
  });
}

function imageSearch(cardName){
  var scryfallCardImageUrl, imageUrl;
  scryfallCardImageUrl = "https://api.scryfall.com/cards/named?exact=" + cardName;

  $.ajax({
    url: scryfallCardImageUrl,
    success: function(result){
      imageUrl = result['image_uris']['normal'];
      updateTooltipImage(imageUrl);
    }
  });
}

function fetchCardFromApi(cardName){
  var scryfallCardUrl, cardObj;
  scryfallCardUrl = "https://api.scryfall.com/cards/named?exact=" + cardName;

  $.ajax({
    url: scryfallCardUrl,
    async: true,
    success: function(result){
      //createCardFromApi(result);
      console.log(cardObj);
    }
  });
}

function updateTooltipImage(img){
  $('#search-image-hover').attr('src', img);
}
