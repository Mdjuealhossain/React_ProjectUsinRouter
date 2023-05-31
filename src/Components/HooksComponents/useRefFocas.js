import React,{useEffect,useRef} from "react";



const RefFocus=()=>{

useEffect(()=>{
 inputRef.current.focus()

},[])

    const inputRef=useRef()



    return(
       <form>
        <label htmlFor="name">Name :</label>
        <input id="name" type="text" placeholder="Enter Something" ref={inputRef}></input>
       </form>
    )
}


export default RefFocus