import React, { useState } from 'react';
import styles from './textcontent.css';
import { Post } from '../../../Post';


interface ITextContentProp {
  author:string,
  avatar: string
  title: string
  id: string
  dataPostUtc: number | string
}
export function TextContent({author, avatar, title, id, dataPostUtc}: ITextContentProp) {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const formattedDate = new Date(Number(dataPostUtc) * 1000).getTime();
  const newdate = new Date().getTime()
  
 
  

  
  return (
    <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img src={avatar} className={styles.avatar} alt="avatar" />
            <a href="#user-url" className={styles.username}>{author}</a>
          </div>
          <span className={styles.createdAt}><span className={styles.publishedLabel}>Опубликовано </span>{Math.round((newdate - formattedDate)/3600/1000)} часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink} onClick={() => {setIsModalOpened(true)}}>
            {title}
          </a>
          {isModalOpened && (
            <Post onClose={() => {setIsModalOpened(false)}} postId={id}/>
          )}
        </h2>
      </div>
  );
}
