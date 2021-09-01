import React, {useEffect, useState} from 'react';
import '../App.css';


const Counter = () => {
    const[num, setNum] = useState(1);
    const[maxVal, setMaxVal] = useState(1000);
    const increment = () => {
      if(num*1 == maxVal){
        alert('Max Reached');
      }
      else{
        setNum(num*1+1);
      }
      
    }
    const decrement = () => {
      setNum(num*1-1);
    }

    const setInput = (val) => {
      if(isNaN(val)){
        alert("Cannot Enter Character")
      }
      else{
        if(val*1 > maxVal){
          alert(val + ' is greater than ' + maxVal + '. Maximum Limit is ' + maxVal);
        }
        else{
          setNum(val*1);
        }
      }
    }

    useEffect(() => {
      let iValue = prompt("Set Initial Value", 1) || 1;
      if(isNaN(iValue)){
        iValue = 1;
      }
      setNum(iValue*1);
      let maxValue = prompt("Set Max Value", 1000) || 1000;
      if(isNaN(maxValue)){
        maxValue = 1000;
      }
      setMaxVal(maxValue*1);
    }, []);

    return(
      <div className="container">
        <h1 className="button btnLeft" onClick={decrement}> - </h1>
        <input className="inputBox" value={num} onChange={(e) => setInput(e.target.value)}></input>
        <h1 className="button btnRight" onClick={increment}> + </h1>
      </div>
    )
}

export default Counter;