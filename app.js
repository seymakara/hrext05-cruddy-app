$(document).ready(function(){
  
  
  var refreshWatchTable = function(){
    $("#toWatchTable").empty();
    for (var i = 0; i < localStorage.length; i++){
      var movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log("movie", movie)
      $("#toWatchTable").append(`<tr align = 'middle' ><td>${movie[0]}</td><td>${movie[1]}</td><td>${movie[2]}</td><td>${movie[3]}</td><td><button>Yes</button></td><td><button>Edit</button><button class = 'deleteButton' id ='${movie[0]}'>Delete</button></td></tr>`);
    }
  }
  
  refreshWatchTable();



  

  var movieDetails = []

  // add event listener
  $(".add-text-btn").on("click", function(){
    // $(".show-text").empty();

    var curTitleValue = $('#title').val(); // reading from <input>
    var curKeyValue = curTitleValue; // change to dynamic key?
    var curGenreValue = $('#genre').val();
    var curYearValue = $('#year').val();
    var curScoreValue = $('#score').val();

    movieDetails = localStorage.getItem(curTitleValue) ? JSON.parse(localStorage.getItem(curTitleValue)) : [];

    // localStorage.setItem(curKeyValue, JSON.stringify(movieDetails));
   

    movieDetails.push(curTitleValue)
    movieDetails.push(curGenreValue)
    movieDetails.push(curYearValue)
    movieDetails.push(curScoreValue)

    console.log("movieDetails", movieDetails)
    
    localStorage.setItem(curKeyValue, JSON.stringify(movieDetails));
    // var data = JSON.parse(localStorage.getItem(curKeyValue));
    // console.log("data", data[0])
    

    movieDetails = []

    // var createList = function(movie){
    //   $("#toWatchTable").append(`<tr align = 'middle' ><td>${movie[0]}</td><td>${movie[1]}</td><td>${movie[2]}</td><td>${movie[3]}</td><td><button>Yes</button></td><td><button>Edit</button><button>Delete</button></td></tr>`);
    // }
    refreshWatchTable();

    // createList(data);

    // var storage = window.localStorage
    // for(item in storage){
    //   console.log("item", item)
    //   console.log("item", item[curKeyValue])

    //   localStorage.setItem(curKeyValue, JSON.stringify(movieDetails));
    //   var data = JSON.parse(localStorage.getItem(item[curKeyValue]));
    //   createList(data);
    // }

    
  });

  $(document).on('click',".deleteButton", function(){
    console.log(event)
    localStorage.removeItem(event.srcElement.id);
    refreshWatchTable();

  });


  console.log("after\n", window.localStorage);



  // remove item from app

  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    // $(".show-text").empty();
  });

});