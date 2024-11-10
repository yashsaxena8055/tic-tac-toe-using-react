
import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {
   const [selection, setSelection] = useState(Array(9).fill(0))
   const [turn, setTurn] = useState("X");
   const [count,setCount] = useState(-1);
   function checkIfPlayerWins() {
      setCount(c => {c = c+1; return c;});
      if (selection[0] == 'X' && selection[1] == 'X' && selection[2] == 'X') 
         {alert("X win the game"); window.location.reload();}
   
      if (selection[3] == 'X' && selection[4] == 'X' && selection[5] == 'X') 
         {alert("X win the game"); window.location.reload();}
      if (selection[6] == 'X' && selection[7] == 'X' && selection[8] == 'X') 
         {alert("X win the game"); window.location.reload();}
      if (selection[0] == 'X' && selection[3] == 'X' && selection[6] == 'X') 
         {alert("X win the game"); window.location.reload();}
      if (selection[1] == 'X' && selection[4] == 'X' && selection[7] == 'X') 
         {alert("X win the game"); window.location.reload();}
      if (selection[2] == 'X' && selection[5] == 'X' && selection[8] == 'X') 
         {alert("X win the game"); window.location.reload();}
      if (selection[0] == 'X' && selection[4] == 'X' && selection[8] == 'X') 
         {alert("X win the game"); window.location.reload();}
      if (selection[2] == 'X' && selection[4] == 'X' && selection[6] == 'X') 
         {alert("X win the game"); window.location.reload();}
      if (selection[0] == 'O' && selection[1] == 'O' && selection[2] == 'O') 
         {alert("O win the game"); window.location.reload();}
      if (selection[3] == 'O' && selection[4] == 'O' && selection[5] == 'O') 
         {alert("O win the game"); window.location.reload();}
      if (selection[6] == 'O' && selection[7] == 'O' && selection[8] == 'O') 
         {alert("O win the game"); window.location.reload();}
      if (selection[0] == 'O' && selection[3] == 'O' && selection[6] == 'O') 
         {alert("O win the game"); window.location.reload();}
      if (selection[1] == 'O' && selection[4] == 'O' && selection[7] == 'O') 
         {alert("O win the game"); window.location.reload();}
      if (selection[2] == 'O' && selection[5] == 'O' && selection[8] == 'O') 
         {alert("O win the game"); window.location.reload();}
      if (selection[0] == 'O' && selection[4] == 'O' && selection[8] == 'O') 
         {alert("O win the game"); window.location.reload();}
      if (selection[2] == 'O' && selection[4] == 'O' && selection[6] == 'O') 
         {alert("O win the game"); window.location.reload();}
      if(count == 9){
         alert("GAME OVER")
         window.location.reload();
      }
   }

   useEffect(()=>{
      checkIfPlayerWins();
   },[selection,setSelection,turn,setTurn]);



   return (
      <>
         <nav className="nav">
            <div className='nav-items'>Home</div>
            <div className='nav-items'>About</div>
            <div className='nav-items nav-div-right'>Tic Tac Game in React</div>

         </nav>
         <div style={{ "text-align": "center" }}> <h1>Turn would be <span style={{ "color": "red" }}>[{turn}]</span></h1></div>

         <div className='main-div'>
            <Board arrayOfSelection={selection} setArrayOfSelection={setSelection} value={turn} setValue={setTurn}></Board>
         </div>
      </>

   )
}

export default App
