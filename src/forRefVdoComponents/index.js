import React, { forwardRef } from "react";


const VideoPlayer=forwardRef(function VideoPlayer({src,type,height,weight},ref){

return(
    <>
<video height={height} weight={weight} ref={ref} >
    <source src={src} type={type}></source>

</video>
    </>
)

})

export default VideoPlayer