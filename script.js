const game = (() => {

  //Array to be filled with marks
  let arrayTiles = [
    "", "", "",
    "", "", "",
    "", "", "",
  ];

  //Winning combinations
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

  let currentPlayer = "X"

  let markedTiles = 0

  //Set up the gameboard
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

    //Converts tiles from NodeList to Array 
    const arrayOfTilesEl = Array.from(tilesEl);

    // console.log(arrayOfTilesEl);


  };


  //Player factory
  const player = (name, shape) => {
    const getName = () => name;
    const getShape = () => shape;

    return { getName, getShape }

  }

  //Modifies the array and the html tiles
  function putMark(e) {

    let currentTile = e.dataset.tile.slice(4)

    if (currentPlayer == "X") {
      e.innerText = player1.getShape()
      arrayTiles[currentTile] = player1.getShape()
      currentPlayer = "O"
      markedTiles++
    } else if (currentPlayer == "O") {
      e.innerText = player2.getShape()
      arrayTiles[currentTile] = player2.getShape()
      currentPlayer = "X"
      markedTiles++
    }
    //Call this function to check for a winner after every turn
    checkWinner()
  }


  function checkWinner() {

    //Iterate over the winningCombos arrays
    for (const condition of winningCombos) {

      //Select every position in WinningCombos corresponding with a, b, and c
      let [a, b, c] = condition

      //Check if arrayTiles got the same mark corresponding to a condition combination; 
      if (arrayTiles[a] == arrayTiles[b] && arrayTiles[a] == arrayTiles[c] && arrayTiles[a] != "" && arrayTiles) {
        return console.log("Winner")
      } else if (markedTiles == 9 && currentPlayer == "O") {
        return console.log("Draw")
      }

    }

  }


  return {
    gameBoard,
    player,
    putMark,
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