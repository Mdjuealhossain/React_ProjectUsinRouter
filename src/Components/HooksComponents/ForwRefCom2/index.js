import React, { forwardRef } from "react";


const Input=forwardRef(function Input({type,value,label,onChange},ref){

return(
    <label>
{label}

<input type={type} value={value} onChange={onChange} ref={ref} ></input>
</label>
)

})

export default Input