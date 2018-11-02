$(document).ready(function(){
  
  var refreshWatchTable = function(){
    $("#toWatchTable td").empty();
    $("#watchedItems td").empty();
    for (var i = 0; i < localStorage.length; i++){
      var movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
      // console.log("movie", movie)
      if(movie[4] === true){
        if(movie[5]=== undefined){
          $("#watchedItems").append(`<tr><td>${movie[0]}</td><td>${movie[1]}</td><td>${movie[2]}</td><td><input type="number" class="myScore" name="myScore" placeholder='1.0' min='0' max='10' onfocus="this.value=''"><button class="addMyScore" id ='${movie[0]}'>Add My Score</button></td><td><button class = 'noButton' id ='${movie[0]}'>No</button></td></tr>`);
        }
        else{
          $("#watchedItems").append(`<tr><td>${movie[0]}</td><td>${movie[1]}</td><td>${movie[2]}</td><td>${movie[5]}</td><td><button class = 'noButton' id ='${movie[0]}'>No</button></td></tr>`);
        }
      }
      else if(movie[4] === false){
        $("#toWatchTable").append(`<tr><td>${movie[0]}</td><td>${movie[1]}</td><td>${movie[2]}</td><td>${movie[3]}</td><td><button class = 'yesButton' id ='${movie[0]}'>Yes</button></td><td><button class = 'editButton' id ='${movie[0]}'>Edit</button><button class = 'deleteButton' id ='${movie[0]}'>Delete</button></td></tr>`);
      }
    }
  }

  var deleteItem = function(item){
      localStorage.removeItem(item);
      refreshWatchTable();
  }

  refreshWatchTable();

  var movieDetails = []


  $("#add-text-btn").on("click", function(){

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
    movieDetails.push(false)

    console.log("movieDetails", movieDetails)
    
    localStorage.setItem(curKeyValue, JSON.stringify(movieDetails));
    
    movieDetails = []
    refreshWatchTable();

    
  });

  $(document).on('click',".deleteButton", function(){
    // console.log(event)
    // console.log("eventsrc", localStorage[event.srcElement.id])
    // console.log("editkeyValue1", editKeyValue)
    deleteItem(event.srcElement.id)
    // localStorage.removeItem(event.srcElement.id);

    refreshWatchTable();

  });


  var valueToEdit;
  var editArray = []
  // var editKeyValue;


  $(document).on('click',"#update-movie", function(){

    // console.log("before ", localStorage[valueToEdit])
    
    deleteItem(valueToEdit)

    var editTitleValue = $('#title').val(); // reading from <input>
    var editKeyValue = editTitleValue; // change to dynamic key?
    var editGenreValue = $('#genre').val();
    var editYearValue = $('#year').val();
    var editScoreValue = $('#score').val();

    editArray.push(editTitleValue)
    editArray.push(editGenreValue)
    editArray.push(editYearValue)
    editArray.push(editScoreValue)
    editArray.push(false)

    
    // console.log("editArray ", editArray)

    localStorage.setItem(editKeyValue, JSON.stringify(editArray))
    
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
    // console.log("valueToEdit", valueToEdit)

    $('#title').val(movieToEdit[0])
    $('#genre').val(movieToEdit[1]) 
    $('#year').val(movieToEdit[2]) 
    $('#score').val(movieToEdit[3])

    // refreshWatchTable();

  });

  $(document).on('click',".yesButton", function(){
    // console.log(event)
    var itemToMove = event.srcElement.id
    // console.log("itemToMove ", itemToMove)
    var movieToMove = JSON.parse(localStorage.getItem(itemToMove));
    // console.log("movieToMove ", movieToMove)
    movieToMove[4] = true
    localStorage.setItem(itemToMove, JSON.stringify(movieToMove));
    // console.log("movieToMove2 ", movieToMove)
    // console.log("bok", localStorage.getItem(itemToMove))

    // valueToMove= (movieToMove[0])
    // console.log("valueToMove", valueToMove)

    refreshWatchTable();

  });

  $(document).on('click',".noButton", function(){
    // console.log(event)
    var itemToMove = event.srcElement.id
    // console.log("itemToMove ", itemToMove)
    var movieToMove = JSON.parse(localStorage.getItem(itemToMove));
    // console.log("movieToMove ", movieToMove)
    movieToMove[4] = false
    localStorage.setItem(itemToMove, JSON.stringify(movieToMove));
    // console.log("movieToMove2 ", movieToMove)
    // console.log("bok", localStorage.getItem(itemToMove))

    // valueToMove= (movieToMove[0])
    // console.log("valueToMove", valueToMove)

    refreshWatchTable();

  });

  $(document).on('click',".addMyScore", function(){
    // console.log("hello")
    var myScoreValue = $('.myScore').val()

    // console.log(event)
    var itemOfMyScore = event.srcElement.id
    // console.log("itemOfMyScore ", itemOfMyScore)
    var movieOfMyScore = JSON.parse(localStorage.getItem(itemOfMyScore));
    // console.log("movieOfMyScore ", movieOfMyScore)
    movieOfMyScore[5] = myScoreValue
    localStorage.setItem(itemOfMyScore, JSON.stringify(movieOfMyScore));

    refreshWatchTable();

  });


  console.log("after\n", window.localStorage);

  $("#clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    refreshWatchTable()
  });

});