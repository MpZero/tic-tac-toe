//   //Select all html tiles 
//   const tiles = document.querySelectorAll("[data-tile]");
//   //Add listener for clicks(one per clicked tile) on each tile
//   tiles.forEach(tile => {
//     tile.addEventListener("click", e, { once: true });
//     console.log(tile)
//   });


// function e() {
//   console.log("click")
// }
  

const game = (() => {

  const gameBoard = () => {

    //Select all html tiles 
    const tiles = document.querySelectorAll("[data-tile]");
    //Add listener for clicks(one per clicked tile) on each tile
    tiles.forEach(tile => {
      tile.addEventListener("click", (e) => {
        putMark(e.target)}, { once: true });
    });

    //converts nodelist to array 
    const arrayOfTiles = Array.from(tiles); 

    console.log(arrayOfTiles);

  };

  function putMark(e) {

    console.log(e)
    let target = e
    let text = "X"
    target.innerText = text
    
  }

    return {
      gameBoard,
      putMark
    }

})()

const player = (name, shape) => {
  const getName  = () => name; 
  const getShape = () => shape;

  return {getName, getShape}
}

const player1 = player("player1", "X") //works
const player2 = player("player2", "O")

// console.log(player1.getName())
// console.log(player1.getShape())
// console.log(player2.getName())
// console.log(player2.getShape())
game.gameBoard()