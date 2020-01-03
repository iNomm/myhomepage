import React, {useState} from "react"
import styles from './TabsBox.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {IconProp} from "@fortawesome/fontawesome-svg-core"

export type TabItemType = {
	title: string
	icon: IconProp
	content: React.ReactNode
}

type TabsBoxProps = {
	tabs: Array<TabItemType>
}

export function TabsBox(props: TabsBoxProps) {
	const [currentTab, setCurrentTab] = useState(0)

    return (
        <div className={styles.main}>
			<div className={styles.tabList}>
				{props.tabs.map((tabItem, index) => {
					return (
						<div
							key={index}
							className={currentTab === index ? styles.tabActive : styles.tab}
							onClick={() => setCurrentTab(index)}
						>
							<FontAwesomeIcon icon={tabItem.icon} className={styles.icon} size={"2x"}/>
							<div className={styles.title}>
								{tabItem.title}
							</div>
						</div>
					)
				})}
			</div>
			{props.tabs.map((tabItem, index) => {
				return (
					<div
						key={index}
						className={currentTab === index ? styles.content : styles.contentHidden}
					>
						{tabItem.content}
					</div>
				)
			})}
        </div>
    )
}
