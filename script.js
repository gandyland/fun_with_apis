$(document).ready(function(){
  var url = "http://api.brewerydb.com/v2/?key=ec6f3c8efee0b4b2dc2e24c89a4c98c3"
  var beerList = $("ul");
  $("#get").on("click", function(){
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      for(var i=0; i<response.length; i++){
        var artist = $("<li>" + response[i].name + "</li>");
        artistList.append(artist);
      }
    }).fail(function(response){
      console.log("sucks for you", response);
    });
  });

  $("#post").on("click", function(){
    var artistName = $("#artist-name").val();
    var artistPhotoUrl = $("#artist-photo-url").val();
    var artistNationality = $("#artist-nationality").val();
    $.ajax({
      url: url,
      dataType: "json",
      type: "POST",
      data: {
        artist: {
          name: artistName,
          photo_url: artistPhotoUrl,
          nationality: artistNationality
        }
      }
    }).done(function(response){
      console.log(response);
    }).fail(function(response){
      console.log("FAIL", response);
    });
  });

  $("#delete").on("click", function(){
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: "https://tunr-api.herokuapp.com/artists/"
    }).done(function(response){
      console.log("DELETED");
      console.log(response);
    }).fail(function(){
      console.log("failed to delete");
    })
  })
})
