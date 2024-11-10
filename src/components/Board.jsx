import { useEffect, useState } from "react";

function onClickSelection(index,props){
  console.log(index+","+props.value)
  props.arrayOfSelection[index]=  props.value;
  // const [newArray,setNewArray] =  useState([]);
  // setNewArray(props.arrayOfSelection);
  props.setArrayOfSelection(props.arrayOfSelection);

  props.value == "X"? props.setValue("O") : props.setValue("X");
  }




export default function Board(props){

 

 // const [selection, setSelection] = useState([...props.arrayOfSelection]);
  //const [one,setOne] =   useState(0);
  // let [two,setTwo] = useState(0);
  // let [three,setThree] = useState(0);
  // let [four,setFour] = useState(0);
  // let [five,setFive] = useState(0);
  // let [six,setSix] = useState(0);
  // let [seven,setSeven] = useState(0);
  // let [eight,setEight] = useState(0);https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md
  // let [nine,setNine] = useState(0);

//  useEffect(()=>{
//   for (const [i, value] of props.setArrayOfSelection.entries()) {
//     document.getElementById("button")
// }

//  },[props.setArrayOfSelection,props.arrayOfSelection])

   

  return<>
    
    {/* {one==0?"":one}
    {two==0?"":two}
    {three ==0?"": three}
    {four==0?"":four}
    {five==0?"":five}
    {six==0?"":six}
    {seven==0?"":seven}
    {eight==0?"":eight}
    {nine==0?"":nine} */}

    <div className="board-row">
      <button className="square" id="button0" onClick={()=>onClickSelection(0,props)} >{props.arrayOfSelection[0] == 0?"":props.arrayOfSelection[0]}</button>
      <button className="square" id="button1" onClick={()=>onClickSelection(1,props)} >{props.arrayOfSelection[1] == 0?"":props.arrayOfSelection[1]}</button>
      <button className="square" id="button2" onClick={()=>onClickSelection(2,props)} >{props.arrayOfSelection[2]== 0?"":props.arrayOfSelection[2]}</button>
    </div>
    <div className="board-row">
      <button className="square" id="button3" onClick={()=>onClickSelection(3,props)} >{props.arrayOfSelection[3]== 0?"":props.arrayOfSelection[3]}</button>
      <button className="square" id="button4" onClick={()=>onClickSelection(4,props)} >{props.arrayOfSelection[4]== 0?"":props.arrayOfSelection[4]}</button>
      <button className="square" id="button5" onClick={()=>onClickSelection(5,props)} >{props.arrayOfSelection[5]== 0?"":props.arrayOfSelection[5]}</button>
    </div>
    <div className="board-row"> 
      <button className="square" id="button6" onClick={()=>onClickSelection(6,props)} >{props.arrayOfSelection[6]== 0 ?"":props.arrayOfSelection[6]}</button>
      <button className="square" id="button7" onClick={()=>onClickSelection(7,props)} >{props.arrayOfSelection[7]== 0 ?"":props.arrayOfSelection[7]}</button>
      <button className="square" id="button8" onClick={()=>onClickSelection(8,props)} >{props.arrayOfSelection[8]== 0 ?"":props.arrayOfSelection[8]}</button>
    </div>
  
  </>
  
  
}