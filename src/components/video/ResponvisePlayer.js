import React from "react"
import ReactPlayer from "react-player"

const ResponsivePlayer = () => {
    return (
        <div className="playerWrapper" >
            <ReactPlayer
            className="reactPlayer"
            url="https://www.youtube.com/watch?v=M--O7T3TrGc&feature=emb_title"
            width="100%"
            height="400px"
            />
        </div>
    )
}

export default ResponsivePlayer