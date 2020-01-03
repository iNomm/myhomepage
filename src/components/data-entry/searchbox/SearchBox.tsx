import React, {useState} from "react"
import styles from './SearchBox.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type SearchBoxProps = {
	placeholder?: string
	onSearch(searchQuery: string): void
}

export function SearchBox(props: SearchBoxProps) {
	const [inputValue, setInputValue] = useState("")
	const [isFocussed, setIsFocussed] = useState(false)

    return (
        <form
			className={styles.wrapper}
			onSubmit={(event) => { event.preventDefault(); props.onSearch(inputValue)}}
		>
			<input
				className={styles.input}
				placeholder={props.placeholder}
				onChange={(e) => setInputValue(e.target.value)}
				onFocus={() => setIsFocussed(true)}
				onBlur={() => setIsFocussed(false)}
			/>
			<FontAwesomeIcon
				className={isFocussed ? styles.searchButtonActive : styles.searchButton}
				icon={faSearch} size={"2x"}
				onClick={() => props.onSearch(inputValue)}
			/>
		</form>
    )
}
