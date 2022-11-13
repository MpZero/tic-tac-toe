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

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let currentPlayer = "X";

  //set up the gameboard
  const gameBoard = () => {


    //Select all html tiles // tilesEl = NodeList
    const tilesEl = document.querySelectorAll("[data-tile]");

    //Add listener for clicks(one per clicked tile) on each tile
    //Call putMark() to change the text content
    tilesEl.forEach(tile => {
      tile.addEventListener("click", (e) => {
        putMark(e.target)
      }, { once: true });
    });
    // console.log(tiles)

    //converts tiles from NodeList to Array 
    const arrayOfTilesEl = Array.from(tilesEl);

    console.log(arrayOfTilesEl);


  };


  //player factory
  const player = (name, shape) => {
    const getName = () => name;
    const getShape = () => shape;

    return { getName, getShape }

  }


  function putMark(e) {

    let currentTile = e.dataset.tile.slice(4)
 
    if (currentPlayer == "X") {
      e.innerText = player1.getShape()
      currentPlayer = "O"
      arrayTiles[currentTile] = "X"
      console.log(arrayTiles)
      //function that reloads the array
    } else {
      e.innerText = player2.getShape()
      currentPlayer = "X"
      arrayTiles[currentTile] = "O"
      console.log(arrayTiles)
      //function that reloads the array

    }

  }

  function winner() {

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