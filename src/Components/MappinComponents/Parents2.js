import React from "react";
import { Product } from "./prent";
import MpChild from "./MpChild";

const Prent=()=>{
   

   return(
    <div>
         {Product.map((i)=>{


return(
    <div key={i.id}>
        <MpChild  name={i.name} roll={i.roll} dept={i.dept}/>
    </div>
)
})}

    </div>
   )

    
}

export default Prent