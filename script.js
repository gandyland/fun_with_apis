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
        beerList.append(beer);
      }
    }).fail(function(response){
      console.log("Fail", response);
    });
  });

  $("#post").on("click", function(){
    var beerName = $("#beer-Name").val();
    var breweryName = $("#brewery-Name").val();
    var typeOfHops = $("#type-of-hops").val();
    var typeOfYeast = $("#type-of-yeast").val();
    $.ajax({
      url: url,
      dataType: "json",
      type: "POST",
      data: {
        artist: {
          name: beerName,
          brewery: breweryName,
          hops: typeOfHops,
          yeast: typeOfYeast
        }
      }
    }).done(function(response){
      console.log(response);
    }).fail(function(response){
      console.log("FAIL", response);
    });
  });
})
