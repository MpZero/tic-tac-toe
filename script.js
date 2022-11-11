const game = (() => {

  // let arrayTiles = [
  //   "Z", "X", "X",
  //   "O", "O", "O", 
  //   "O", "O", "Z", 
  // ];

  let arrayTiles = [
    "", "", "",
    "", "", "", 
    "", "", "", 
  ];
  
  let currentPlayer = "X"
  
  //set up the gameboard
  const gameBoard = () => {

   
    //Select all html tiles // tilesEl = NodeList
    const tilesEl = document.querySelectorAll("[data-tile]");

    //Add listener for clicks(one per clicked tile) on each tile
    //Call putMark() to change the text content
    tilesEl.forEach(tile => {
      tile.addEventListener("click", (e) => {
        putMark(e.target)}, { once: true });
    });
    // console.log(tiles)

    //converts tiles from NodeList to Array 
    const arrayOfTilesEl = Array.from(tilesEl); 

    console.log(arrayOfTilesEl);

    //array to be modified and rendered on the page
    function displayArray() {
      for (let i = 0; i < arrayTiles.length; i++) {
        arrayOfTilesEl[i].textContent = arrayTiles[i]
      }
    }

    // console.log(arrayTiles)
    
    displayArray()
    // //for every index in the array change the text content of the tiles
    // for (let i = 0; i < arrayTiles.length; i++) {
    //   // tiles[i].textContent = arrayTiles[i] // WORKS
    //   arrayOfTilesEl[i].textContent = arrayTiles[i] // WORKS
    //   // arrayOfTilesEl[1].textContent = "Hello"
    //   // console.log(arrayOfTilesEl)
      
    // }

    
    // console.log(arrayOfTilesEl);

  };


  //player factory
  const player = (name, shape) => {
    const getName  = () => name; 
    const getShape = () => shape;
  
    return {getName, getShape}
    
  }
  
 
  
  function putMark(e) {
    
    console.log(e)
    // let text = ""
    if (currentPlayer == "X") {
      e.innerText = player1.getShape()
      currentPlayer = "O"
      //function that reloads the array
    } else {
      e.innerText = player2.getShape()
      currentPlayer = "X"
      //function that reloads the array

    }
 
  }

  function gameLogic() {

    //best of 5 wins the game
    //reset board
    
    //player wins when 3 marks are displayed in a straight line
    //reset board
    
    //draw is possible
    //reset board


  }

  

    return {
      gameBoard,
      player,
      putMark,
      // reloadArray,
    }

})()

//works
const player1 = game.player("player1", "X") 
const player2 = game.player("player2", "O")


// console.log(player1.getName())
// console.log(player1.getShape())
// console.log(player2.getName())
// console.log(player2.getShape())


game.gameBoard()