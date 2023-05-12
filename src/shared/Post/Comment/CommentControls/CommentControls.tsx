import React, { useState } from 'react';
import styles from './commentcontrols.css';
import { EIcon, Icon } from '../../../Icon';
import { Reply } from './Reply';


interface IPropsCommentControl {
	authorName: string;
}
export function CommentControls(props: IPropsCommentControl) {

	const [isReplyOpened, setIsReplyOpened] = useState(false);
	const openReply = () => setIsReplyOpened(true);
	const closeReply = () => setIsReplyOpened(false);

	return (
		<>
			<ul className={styles.controls}>
				<li className={styles.controls__list}>
					<button
						className={styles.controls__btn}
						onClick={() => {
							setIsReplyOpened(true);
						}}
					>
						<Icon name={EIcon.Comments} width={14.17} height={14.17} />
						Ответить
					</button>
				</li>
				<li className={styles.controls__list}>
					<button className={styles.controls__btn}>
						<Icon name={EIcon.Share}  width={12} height={14} />
						Поделиться
					</button>
				</li>
				<li className={styles.controls__list}>
					<button className={styles.controls__btn}>
						<Icon name={EIcon.Complain} width={16} height={14} />
						Пожаловаться
					</button>
				</li>
			</ul>
			{isReplyOpened && (
				<Reply
					onClose={(event): void => {
						event.preventDefault();
						setTimeout(() => {
							setIsReplyOpened(false);
						}, 0);
					}}
					authorName={props.authorName}
				/>
			)}

		</>
	)
}
