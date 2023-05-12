import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';


interface ICardPostData {
  author:string,
  avatar: string
  dataPostUtc: number | string
  previewImg: string
  rating:string | number
  title: string
  id: string
}
export function Card(post: ICardPostData) {
  return (
    <li className={styles.card}>
      <TextContent 
        author={post.author} 
        avatar={post.avatar} 
        title={post.title}
        id={post.id}
        dataPostUtc={post.dataPostUtc}/>
      <Preview previewImg={post.previewImg}/>
      <Menu/>
      <Controls rating={post.rating} />
    </li>
  );
}
