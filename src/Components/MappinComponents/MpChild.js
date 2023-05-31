import React from "react";

const MpChild=(props)=>{
   
 const {name,roll,dept}=props
 return(
    <div>
        <h1>My name is {name} and my Roll No. {roll}.{dept} is my Department</h1>
       
    </div>
 )
    
}
export default MpChild