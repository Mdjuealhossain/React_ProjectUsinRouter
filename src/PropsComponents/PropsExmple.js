import React from "react"


const Student=(props)=>{
   
    const {name,roll,address}=props
    return(
        <div>

            <h1>Students name {name} and Roll {roll} and His Thana {address.thana}, Zila {address.zila}</h1>
        </div>
    )
}
export default Student