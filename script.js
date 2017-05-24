// console.log('js/jq sourced!');

$(document).on('click', '#serachNow', function(){
  if ($('#searchIn').val() === '') {
    alert('nothing to search for?!?');
  }
  else {
    // assemble search URL
    // redefine search url
    var searchURL = 'https://api.giphy.com/v1/gifs/search?q=';
    // append user input into URL
    searchURL += $('#searchIn').val();
    searchURL += '&api_key=dc6zaTOxFJmzC';
    // make ajax call to Giphy to retrieve JSON
    $.ajax({
      type: 'GET', // default of .ajax()...do not need to explicitly define(?)
      url: searchURL,
      dataType: 'JSON',
      success: function(response){ // 'data' argument (or whatever you want to call it) will always be the response from the server
        // successfully hit API
        console.log('successful API hit:', response);
        console.log('array?', response.data);
        console.log('0th result:', response.data[0]);
        console.log('0th result.images:', response.data[0].images);
        console.log('0th result.images.downsized:', response.data[0].images.downsized);
        console.log('0th result.images.downsized.url:', response.data[0].images.downsized.url);
        // display on document
        var outputDiv = $('#outputDiv');
        outputDiv.empty();
        outputDiv.append('<img src="' + response.data[0].images.downsized.url +'">');
        console.log(response.data[0].images.downsized.url);



      } // end success
    }); // end ajax
  } // end of actual input
}); // end click on search button
