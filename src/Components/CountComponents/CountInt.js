import React,{useState} from "react";
import Controll from "./ControlCount";



const CountInt=()=>{


    
const [count,setCount]=useState(0)

const handlIncrement=()=>{
  
    return setCount(count+1)

}

const handleDcrement=()=>{
    return setCount(count-1)

}


    return (
       <div>

<h1>Count : {count}</h1>

<button onClick={handlIncrement} >Increment</button>

<button onClick={handleDcrement}>Decrement</button>


<Controll  handleDcrement={handleDcrement} handlIncrement={handlIncrement}/>

       </div>
    )
}
export default CountInt