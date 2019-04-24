$(document).ready(function(){
  $('#card-search-input').on('keyup', function(){
    $('#autocomplete-results').show();
    cardSearchAutocomplete($(this).val());
  });
});

$(document).on('click', '#autocomplete-results li a', function(){
  fillSearchForm($(this).html());
});

$(document).on('mouseover', '#autocomplete-results li a', function(){
  console.log(imageSearch(encodeURIComponent($(this).html())));
  imageSearch(encodeURIComponent($(this).html()));
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
      imageUrl = result['image_uris']['large'];
      updateTooltipImage(imageUrl);
    }
  });
}

function updateTooltipImage(img){
  $('#search-image-hover').attr('src', img);
}
