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
  let player1Score = 0
  let player2Score = 0
  let markedTiles = 0 
  let title = document.getElementById("title")
  let scoreText1 = document.getElementById("scoreP1")
  let scoreText2 = document.getElementById("scoreP2")
  let tilesEl = document.querySelectorAll("[data-tile]");

  const player1Container = document.querySelector(".player1-container")
  const player2Container = document.querySelector(".player2-container")
  const resetButton = document.getElementById("reset-button")
  const player1Trophy = document.querySelector("#player1Trophy")
  const player2Trophy = document.querySelector("#player2Trophy")

  let boardArray = Array.from(tilesEl)

  //Set up the gameboard
  const gameBoard = () => {
    player1Container.classList.add("player1-turn")


    resetButton.addEventListener("click", btnReset)
    //Select all html tiles // tilesEl = NodeList

    //Add listener for clicks(one per clicked tile) on each tile
    //Call putMark() to change the text content
    boardArray.forEach(tile => {
      tile.addEventListener("click", (e) => {
        putMark(e.target)
      })
      //check for marked tile
    });

    //Converts tiles from NodeList to Array 

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

    if (e.classList[2] != "marked") {
      if (currentPlayer == "X") {
        player1Container.classList.remove("player1-turn")
        player2Container.classList.add("player2-turn")
        e.innerText = player1.getShape()
        arrayTiles[currentTile] = player1.getShape()
        e.classList.add("marked")
        currentPlayer = "O"
        markedTiles++

      } else if (currentPlayer == "O") {
        player2Container.classList.remove("player2-turn")
        player1Container.classList.add("player1-turn")
        e.innerText = player2.getShape()
        arrayTiles[currentTile] = player2.getShape()
        e.classList.add("marked")
        currentPlayer = "X"
        markedTiles++
      }
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
      } else if (markedTiles == 9) {
        title.innerText = "It's a draw!"
        return reset()
      }


    }

  }


  function btnReset() {
    resetScores()
    title.innerText = "Tic-Tac-Toe"
    reset()
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
      resetScores()
      title.innerText = player1.getName() + " Won 5 Games!"  
      player1Trophy.innerText = player1Trophy.innerText + "🏆 "
      
    } else if ( player2Score == 5) {
      resetScores()
      title.innerText = player2.getName() + " Won 5 Games!"
      player2Trophy.innerText = player2Trophy.innerText + "🏆 "
      

    }
    boardArray.forEach(resetDOM)

  };

  function resetDOM(element) {
    element.innerText = ""
    element.classList.remove("marked")
  }

  function resetScores() {
    player1Score = 0
    player2Score = 0
    scoreText1.innerText = "Score: " + 0
    scoreText2.innerText = "Score: " + 0
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