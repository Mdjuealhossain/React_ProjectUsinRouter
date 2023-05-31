
import React, { forwardRef } from "react";


const RefInput=forwardRef(function RefInput ({type,placeholder},reference){
    return(

<form>
<label htmlFor="username">UserName : </label>
<input ref={reference} type={type} placeholder={placeholder}></input>
</form>

    )



}
)




export default RefInput