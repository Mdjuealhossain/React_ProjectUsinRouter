import React, { useRef } from "react";
import VideoPlayer from ".";



const RefVideo = () => {

    const videoRef = useRef()



    return (
        <>
            <button onClick={() => videoRef.current.play()} >Play</button>
            <button onClick={() => videoRef.current.pause()} >Pause</button><br/>
            <VideoPlayer
                ref={videoRef}
                src="https://cdn.pixabay.com/vimeo/657153127/tunnel-100549.mp4?width=1280&hash=6bce8df6507f3aa1d8f0ce0b4505945a6726146d"
                type="video/mp4"
                width="250"
                height="250"


            />
        </>
    )

}

export default RefVideo