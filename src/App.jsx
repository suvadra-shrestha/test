import { useState } from 'react'
import './App.css'
import './styles.css'
import Board from './Board'

function Game(){  
  const [history,setHistory]=useState([Array(9).fill(null)])
  // [ [0,1,2.....8]  ]
  const [currentMove,setCurrentMove]=useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares= history[currentMove];

function handlePlay(nextSquares){
  const nextHistory=([...history.slice(0,currentMove+1), nextSquares]);
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
}

function jumpTo(nextMove){
  setCurrentMove(nextMove); 
}
  

const moves= history.map((squares,moves)=>{
  let description;
        if (moves>0){
          description="Go to move #"+ moves
        }
        else{
          description ="Go to game start"
        }
     
    
   return (
  
    <li key={moves}>
      <button onClick={()=>{jumpTo(moves)}}> {description}</button>
      </li>
   
   )
})

 
  return (
    <>
     <div className="game">
      <div className="game-board">
        {/* this gets rendered without clicking because of curly braces that inject javascript */}
       {/* <button onClick={alert("hellow rodl")}> click me </button> */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>
          {moves}

        </ol>
      </div>
     </div>
    </>
  )
}
export default Game