import React from "react"
import moment from "moment"
import styles from './WeatherInfo.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

type WeatherInfoProps = {
	main: {
		temp: number
		feels_like: number
		temp_min: number
		temp_max: number
		humidity: number
	}
	weather: {
		main: string
		description: string
		icon: string
	}
	wind: {
		speed: number
		deg: number
	}
}

export function WeatherInfo(props: WeatherInfoProps) {
	const { main, weather, wind } = props

    return (
    	<div className={styles.wrapper}>
			<div className={styles.city}>Amsterdam</div>
			<div className={styles.dateTime}>{moment().format('LLLL')}</div>
			<div className={styles.weatherInfo}>{weather.main} ({weather.description})</div>
			<div className={styles.tempWrapper}>
				<img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={`Weather icon ${weather.icon}`}/>
				<div className={styles.mainTemp}>
					{main.temp}°C
					<div className={styles.feelsTemp}>Feels like: {main.feels_like}°C</div>
				</div>
			</div>
			<div>Min temp: {main.temp_min}°C Max temp: {main.temp_max}°C</div>
			<div>Humidity: {main.humidity}%</div>
			<div className={styles.wind}>
				{wind.speed} km/h
				<div
					className={styles.windDirection}
					style={{transform: `rotate(${wind.deg}deg)`, width: 14}}
				>
					<FontAwesomeIcon icon={faArrowUp}/>
				</div>
			</div>

		</div>
    )
}
