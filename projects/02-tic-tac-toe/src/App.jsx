import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square.jsx";
import {TURNS} from "./constants.js";
import {checkWinnerFrom} from "./logic/board.js";
import {WinnerModal} from "./components/WinnerModal.jsx"



function App() {

  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null);//Null es que no hay ganador y false que hay un empate

  

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x)
    setWinner(null)
  }

  const checkEndGame = () => {
    /*Revisamos si no hay un empate
    si no hay mas espacios vacios
    en el tablero
    */
  }

  const updateBoard = (index) => {
    //No actualizamos esta pocision si ya tiene algo
    if(board[index] || winner) return

    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiar el turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    //revisamos si tenemos un nuevo ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      setWinner(newWinner)
      confetti()
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
                <Square
                key={index}
                index = {index}
                updateBoard={updateBoard}
                >
                  {square}
                </Square>
            )
          })
        } 
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
          </Square>
      </section>

        <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App
