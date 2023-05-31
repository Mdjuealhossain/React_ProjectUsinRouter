import React from "react";




const Controll=(props)=>{
  
const {handlIncrement,handleDcrement}=props
    return (
<div>


<button onClick={handlIncrement}> PropsButtonplus</button>
<button onClick={handleDcrement}>PropsButtonMinus</button>

</div>
    )
}
export default Controll