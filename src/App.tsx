import React, {useEffect, useState} from "react"
import styles from './App.module.scss'
import {SearchBox} from "./components/data-entry/searchbox/SearchBox"
import {TabItemType, TabsBox} from "./components/data-display/TabsBox/TabsBox"
import { faGlobe, faHeadphones, faNewspaper, faCloud } from '@fortawesome/free-solid-svg-icons'
import {LinkList, LinkListCategoryType} from "./components/data-display/LinkList/LinkList"
import {WeatherInfo} from "./components/data-display/Weather/WeatherInfo"
import {HiddenPlayer} from "./components/data-display/Music/HiddenPlayer/HiddenPlayer";
import {PlayButton} from "./components/data-display/Music/PlayButton/PlayButton";

const onSearch = (searchQuery: string) => {
    window.location.replace(`https://www.google.com/search?q=${searchQuery}`)
}

export function App() {
    const [weatherData, setWeatherData] = useState()
    const [isMusicIsPlaying, setIsMusicIsPlaying] = useState(false)

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=2759794&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => setWeatherData(data))
    }, [])

    const tabs: Array<TabItemType> = [
        {title: "Home", icon: faGlobe, content: <LinkList linkList={linkList}/>},
        {title: "Music", icon: faHeadphones, content: (
                <div>
                    <PlayButton isPlaying={isMusicIsPlaying} onClick={() => setIsMusicIsPlaying(!isMusicIsPlaying)}/>
                    <HiddenPlayer url="https://youtu.be/8p-E70Xo8wM" isPlaying={isMusicIsPlaying}/>
                    <HiddenPlayer url="https://youtu.be/G-Vg2YS-sFE" isPlaying={isMusicIsPlaying}/>
                </div>
            )
        },
        {title: "News", icon: faNewspaper, content: "News - Work in progress"},
        {title: "Weather", icon: faCloud, content: (
            weatherData ?
                <WeatherInfo
                    main={weatherData.list[0].main}
                    weather={weatherData.list[0].weather[0]}
                    wind={weatherData.list[0].wind}
                />
            :
                "Fetching weather data"
            )
        },
    ]

    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <SearchBox placeholder="Search" onSearch={onSearch}/>
            </div>
            <TabsBox tabs={tabs}/>
        </div>
    )
}

const linkList: Array<LinkListCategoryType> = [
    {
        title: "Communication",
        listItems: [
            {title: "Twitter", url: "https://twitter.com/"},
            {title: "Gmail", url: "https://gmail.com/"},
            {title: "WhatsApp", url: "https://web.whatsapp.com/"},
            {title: "Messenger", url: "https://www.messenger.com/"},
            {title: "Facebook", url: "https://www.facebook.com/"},
        ],
    },
    {
        title: "Entertainment",
        listItems: [
            {title: "Youtube", url: "https://www.youtube.com/"},
            {title: "Twitch", url: "https://www.twitch.tv/directory/following"},
            {title: "Netflix", url: "http://www.netflix.com/browse"},
            {title: "Dumpert", url: "http://dumpert.nl/"},
            {title: "r/videos", url: "https://www.reddit.com/r/videos/"},
        ],
    },
    {
        title: "News",
        listItems: [
            {title: "AT5", url: "https://www.at5.nl/"},
            {title: "Nu.nl", url: "https://www.nu.nl/"},
            {title: "Telegraaf", url: "https://www.telegraaf.nl/"},
            {title: "NOS", url: "https://nos.nl/"},
            {title: "r/worldnews", url: "https://www.reddit.com/r/worldnews/"},
        ],
    },
]
