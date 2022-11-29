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

  let title = document.getElementById("title")
  let currentPlayer = "X"
  let player1Score = 0
  let player2Score = 0
  let scoreText1 = document.getElementById("scoreP1")
  let scoreText2 = document.getElementById("scoreP2")
  let markedTiles = 0
  let tilesEl = document.querySelectorAll("[data-tile]");

  const player1Container = document.querySelector(".player1-container")
  const player2Container = document.querySelector(".player2-container")

  const resetButton = document.getElementById("reset-button")

  console.log(resetButton)

  let boardArray = Array.from(document.getElementsByClassName("board"))

  //Set up the gameboard
  const gameBoard = () => {
    player1Container.classList.add("player1-turn")


    resetButton.addEventListener("click", reset)
    //Select all html tiles // tilesEl = NodeList

    //Add listener for clicks(one per clicked tile) on each tile
    //Call putMark() to change the text content
    tilesEl.forEach(tile => {
      tile.addEventListener("click", (e) => {
        putMark(e.target)
      })
      //check for marked tile
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
      player1Container.classList.remove("player1-turn")
      // playerElChild.classList.remove("p2Turn")
      player2Container.classList.add("player2-turn")
      e.innerText = player1.getShape()
      arrayTiles[currentTile] = player1.getShape()
      e.classList.add("marked")
      currentPlayer = "O"
      markedTiles++
    } else if (currentPlayer == "O") {
      player2Container.classList.remove("player2-turn")
      player1Container.classList.add("player1-turn")

      // playerElChild.classList.remove("p1Turn")
      e.innerText = player2.getShape()
      arrayTiles[currentTile] = player2.getShape()
      e.classList.add("marked")
      currentPlayer = "X"
      markedTiles++
    }
    //Call this function to check for a winner after every turn
    console.log(markedTiles)
    checkWinner()
  }


  function checkWinner() {

    //Iterate over the winningCombos arrays
    for (const condition of winningCombos) {

      //Select every position in WinningCombos corresponding with a, b, and c
      let [a, b, c] = condition

      //Check if arrayTiles got the same mark in [a b c] positions; 
      if (arrayTiles[a] == arrayTiles[b] && arrayTiles[a] == arrayTiles[c] && arrayTiles[a] != "" && currentPlayer == "O") {
        player1Score++
        scoreText1.innerText = "Score: " + player1Score
        title.innerText = player1.getName() + " Wins!"
        return reset()
      } else if (arrayTiles[a] == arrayTiles[b] && arrayTiles[a] == arrayTiles[c] && arrayTiles[a] != "" && currentPlayer == "X") {
        player2Score++
        scoreText2.innerText = "Score: " + player2Score
        title.innerText = player2.getName() + " Wins!"

        return reset()
      } else if (markedTiles == 9 && currentPlayer == "O") {
        console.log("Draw")
        title.innerText = "It's a draw!"

        return reset()
      }


    }

  }

  function reset() {

    player1Container.classList.add("player1-turn")
    

    player2Container.classList.remove("player2-turn")

    console.log("hey")
    arrayTiles = [
      "", "", "",
      "", "", "",
      "", "", "",
    ];
    currentPlayer = "X"
    markedTiles = 0

    if (player1Score == 5 ) {
      player1Score = 0
      player2Score = 0
      scoreText1.innerText = "Score: " + 0
      scoreText2.innerText = "Score: " + 0
      title.innerText = player1.getName() + " Won 5 Games!"  
      
    } else if ( player2Score == 5) {
      player1Score = 0
      player2Score = 0
      scoreText1.innerText = "Score: " + 0
      scoreText2.innerText = "Score: " + 0
      title.innerText = player2.getName() + " Won 5 Games!"
    }
    boardArray.forEach(resetDOM)

  };

  function resetDOM(element) {
    element.innerText = ""
    element.classList.remove("marked")
  }


  return {
    gameBoard,
    player,
    putMark,
    arrayTiles
  };

})()
// console.log(game.arrayTiles)

//works
const player1 = game.player("Player1", "X")
const player2 = game.player("Player2", "O")


// console.log(player1.getName())
// console.log(player1.getShape())
// console.log(player2.getName())
// console.log(player2.getShape())

game.gameBoard()