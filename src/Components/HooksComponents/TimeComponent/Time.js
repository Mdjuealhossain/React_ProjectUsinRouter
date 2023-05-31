import React, { useEffect, useRef, useState } from "react";


const Time = () => {
    const [date, setDate] = useState(new Date())
    const tike = () => {
        setDate(new Date())
    }
    useEffect(() => {
        const intervel = setInterval(tike, 1000)
        return (() => {
            clearInterval(intervel)
        })
    }, [])
    return (
        <div>
            <h1> Time :  {date.toLocaleTimeString()}</h1>
        </div>
    )
}
export default Time