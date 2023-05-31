import React from "react"


const ProComponent=({procomponents2 :ProComponent2})=>{
    return(
       <div className="ProComponent">
         <h1> I am Child From ProComponents  </h1>
       {<ProComponent2 />}
       </div>
    )
}
export default ProComponent