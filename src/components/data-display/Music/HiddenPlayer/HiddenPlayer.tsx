import React from "react"
import ReactPlayer from "react-player";

type HiddenPlayerProps = {
	url: string
	isPlaying: boolean
}

export function HiddenPlayer(props: HiddenPlayerProps) {
    return (
        <div>
			<ReactPlayer url={props.url} playing={props.isPlaying} width={0} height={0} loop />
        </div>
    )
}
