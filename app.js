$(document).ready(function(){
  
  
  var refreshWatchTable = function(){
    $("#toWatchTable td").empty();
    for (var i = 0; i < localStorage.length; i++){
      var movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
      // console.log("movie", movie)
      $("#toWatchTable").append(`<tr align = 'middle' ><td>${movie[0]}</td><td>${movie[1]}</td><td>${movie[2]}</td><td>${movie[3]}</td><td><button class = 'yesButton'>Yes</button></td><td><button class = 'editButton' id ='${movie[0]}'>Edit</button><button class = 'deleteButton' id ='${movie[0]}'>Delete</button></td></tr>`);
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
   

    movieDetails.push(curTitleValue)
    movieDetails.push(curGenreValue)
    movieDetails.push(curYearValue)
    movieDetails.push(curScoreValue)

    // console.log("movieDetails", movieDetails)
    
    localStorage.setItem(curKeyValue, JSON.stringify(movieDetails));
    
    movieDetails = []
    refreshWatchTable();

    
  });

  $(document).on('click',".deleteButton", function(){
    console.log(event)
    console.log("eventsrc", localStorage[event.srcElement.id])
    console.log("editkeyValue1", editKeyValue)
    localStorage.removeItem(event.srcElement.id);

    refreshWatchTable();

  });


  var valueToEdit;
  var editArray = []
  var editKeyValue;


  $(document).on('click',".update-movie", function(){

    // console.log("before ", localStorage[valueToEdit])
    
    
    var editTitleValue = $('#title').val(); // reading from <input>
    // editKeyValue = editTitleValue; // change to dynamic key?
    // console.log("editKeyValue2", editKeyValue)
    var editGenreValue = $('#genre').val();
    var editYearValue = $('#year').val();
    var editScoreValue = $('#score').val();

    editArray.push(editTitleValue)
    editArray.push(editGenreValue)
    editArray.push(editYearValue)
    editArray.push(editScoreValue)
    
    // console.log("editArray ", editArray)

    localStorage.setItem(valueToEdit, JSON.stringify(editArray))
    

    editArray = []

    // console.log("after ", localStorage[valueToEdit])

    refreshWatchTable();

  });

  $(document).on('click',".editButton", function(){
    // console.log(event)
    var itemToEdit = event.srcElement.id
    // console.log("itemToedit ", itemToEdit)
    var movieToEdit = JSON.parse(localStorage.getItem(itemToEdit));
    // console.log("movieToEdit ", movieToEdit)

    valueToEdit = (movieToEdit[0])
    console.log("valueToEdit", valueToEdit)

    $('#title').val(movieToEdit[0])
    $('#genre').val(movieToEdit[1]) 
    $('#year').val(movieToEdit[2]) 
    $('#score').val(movieToEdit[3])

    // refreshWatchTable();

  });


  console.log("after\n", window.localStorage);




  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
  });

});