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

    useEffect(() => {
      const iValue = prompt("Set Initial Value", 1);
      setNum(iValue*1);
      const maxValue = prompt("Set Max Value", 1000);
      setMaxVal(maxValue*1);
    }, []);

    return(
      <div className="container">
        <h1 className="button btnLeft" onClick={decrement}> - </h1>
        <input className="inputBox" value={num} onChange={(e) => setNum(e.target.value)}></input>
        <h1 className="button btnRight" onClick={increment}> + </h1>
      </div>
    )
}

export default Counter;