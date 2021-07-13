import { useState } from "react";
import React from "react";
import "./style.css"
const App = () => {
  // const add=()=>
  // {
  //   var a=10
  //   var b=20
  //   return a+b
  // }
  var [score, setScore] = useState(0);
  return (
    <div>
      <h1>This is Counter App</h1>
      <h3>The value of Score is={score}</h3>
      <button onClick={()=>(score<25)?setScore(score+1):""}>Incremenr</button>
      <button onClick={()=>(score>0)?setScore(score-1):""}>decremenr</button>
      <button onClick={()=>{setScore(0)}}>Reset</button>
    </div>
  );
};
export default App;

// function exmp(){

// }
// // function (){}

// const exmap=()=>
// {

// }

// ()=>{}
