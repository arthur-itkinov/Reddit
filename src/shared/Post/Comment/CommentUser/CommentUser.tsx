import React from 'react';
import styles from './commentuser.css';



interface IPropsCommentUser {
	authorName: string;
	createdUtc: number
	kind: string
}
export function CommentUser({authorName, createdUtc, kind}: IPropsCommentUser) {
	const formattedDate = new Date(createdUtc * 1000).getTime();
	const newdate = new Date().getTime()
	
	
	return (
		<div className={styles.userLink}>
			<img className={styles.avatar}
				src="https://avatars.mds.yandex.net/i?id=dd07e23f2462439717d2e625288661a0_l-5322694-images-thumbs&n=13" alt="avatar" />
			<a href="#user-url" className={styles.username}>{authorName}</a>

			<span className={styles.publishedLabel}>{Math.round((newdate - formattedDate)/3600/1000)} час назад</span>
			<span className={styles.league}>{kind}</span>
		</div>
	)
}
