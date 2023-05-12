import React from 'react'
import styles from './commenttext.css'

interface IPropsCommentText {
	body: string
}
export function CommentText(props: IPropsCommentText) {
	return (
		<p className={styles.commentsText}>
			{props.body}
		</p>
	)
}
