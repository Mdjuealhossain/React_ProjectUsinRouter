import React,{useRef} from "react";
import Form from "./InputForm";



const FormFld=()=>{

const InputRef=useRef()

const handlbtn=()=>{
    
    InputRef.current.focus()
}

    return(
<form>
<Form ref={InputRef} type="text" isRequired={true} label="Enter Name : " ></Form>
<button type="button" onClick={handlbtn}> Click</button>

</form>

    )
}
export default FormFld