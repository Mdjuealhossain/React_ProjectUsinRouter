import React, { useEffect, useRef } from "react";
import RefInput from ".";


const FordRef=()=>{
const InputRef=useRef()


useEffect(()=>{

InputRef.current.focus()

})

    return(

         
<RefInput ref={InputRef} type="text" placeholder="Type here"></RefInput>

         
        
    )
}
export default FordRef