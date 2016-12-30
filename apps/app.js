// TODO
// Optional Advanced functionality challenges
// Make the images clickable, leading the user to the YouTube video, on YouTube
// Make The images clickable, playing them in a lightbox
// Show a link for more from the channel that each video came from
// Show buttons to get more results (using the previous and next page links from the JSON)

$(function() {

  $('#search-term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });

  // $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
  //   //var myData = data.Search;
  //   //var myData = data.Search[0].Title;
  //   //console.log(data);
  //   //console.log(myData);
  //   showResults(data.Search);
  // },
  // //'xml'
  // 'json'
  // );

  

});

function getRequest(searchTerm) {

  var params = {
    part: 'snippet',
    key: '', // YouTube Data API v3 Key goes here 
    q: searchTerm
  };
  //url = 'https://www.omdbapi.com';
  url = 'https://www.googleapis.com/youtube/v3/search';

  // $.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data){
  $.getJSON(url, params, function(data){
    //console.log(data);
    //console.log(data.items[0].snippet.thumbnails.default.url);
    showResults(data.items);
  },
  'json'
  );
}

function showResults(results) {
  var html = "";
  $.each(results, function(index, value) {
    html += '<p><img src="' + value.snippet.thumbnails.medium.url + '"></p>';
    console.log(value.snippet.thumbnails.medium.url);
  });
  $('#search-results').html(html);
}