import React from "react"


const Child=(props)=>{

const {handleChild}=props


    const msg="Props Practice"
    handleChild(msg)
    return(
        <div>
            <h4>From Child</h4>
            <p>I have read in some tutorial that curly braces are used to pass variables so that JSX will know that they are external variable.

But why is case-3 not working with out explicit curly braces though the array is made during the call and why is it working for the case-2 where the string is made inline.

When exactly are the curly braces used?

And it would help me if some one can point me to any good book or online tutorials on react.</p>
        </div>
    )

}
export default Child