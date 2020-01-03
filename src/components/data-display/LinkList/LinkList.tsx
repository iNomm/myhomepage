import React from "react"
import styles from "./LinkList.module.scss"

type LinkListItemType = {
	title: string
	url: string
}

export type LinkListCategoryType = {
	title: string
	listItems: Array<LinkListItemType>
}

type LinkListProps = {
	linkList: Array<LinkListCategoryType>
}

export function LinkList(props: LinkListProps) {

    return (
        <div className={styles.wrapper}>
			{props.linkList.map((category, categoryIndex) => {
				return (
					<ul className={styles.list} key={category.title + categoryIndex}>
						<div className={styles.category}>
							{category.title}
						</div>
						{category.listItems.map((listItem, listItemIndex) => {
							return (
								<li key={listItem.title + listItemIndex} className={styles.listItem}>
									<a href={listItem.url}>{listItem.title}</a>
								</li>
							)
						})}
					</ul>
				)
			})}
		</div>
    )
}
