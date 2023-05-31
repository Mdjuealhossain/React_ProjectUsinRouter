import React, { forwardRef, useState } from "react";
import Input from ".";


const Form = forwardRef(function Form({ type, isRequired, label }, ref) {
    const [value, setValue] = useState("")

    return (
        <>
            <Input
                type={type}
                ref={ref}
                value={value}
                label={label}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            {(isRequired && value === "") &&
                <i>Required</i>}
        </>
    )

})


export default Form