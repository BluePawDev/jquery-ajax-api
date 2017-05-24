// console.log('js/jq sourced!');

$(document).on('click', '#serachNow', function(){
  // assemble search URL
  // redefine search url
  var searchURL = 'https://api.giphy.com/v1/gifs/search?q=';
  // append user input into URL
  searchURL += $('#searchIn').val();
  searchURL += '&api_key=dc6zaTOxFJmzC';
  // make ajax call to Giphy to retrieve JSON
  $.ajax({
    url: searchURL,
    dataType: 'JSON',
    success: function(data){
      // successfully hit API
      console.log('successful API hit:', data);
    } // end success
  }); // end ajax
}); // end click on search button
