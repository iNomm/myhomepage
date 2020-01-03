import React from "react"
import styles from "./PlayButton.module.scss"
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

type PlayButtonProps = {
	isPlaying: boolean
	onClick(): void
}

export function PlayButton(props: PlayButtonProps) {
    return (
        <div className={styles.wrapper}>
			<div className={styles.text}>Calm me down:</div>
			<div>
				<FontAwesomeIcon
					className={styles.button}
					icon={props.isPlaying ? faPause: faPlay}
					onClick={props.onClick}
					size={'4x'}
				/>
			</div>
        </div>
    )
}
