import React, { useContext } from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { useToken } from '../../hooks/useToken';
import { usePostsData } from '../../hooks/usePostsData';
import { postContext } from '../../context/postsContext';

export function CardsList() {
  
  const posts = useContext(postContext)

  
  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 ?
				<div style={{ textAlign: 'center' }}>
					Нет ни одного поста!
				</div> : posts.map((post) => 
        <Card 
          key={post.id} 
          author={post.author} 
          avatar={post.avatar}
          dataPostUtc={post.dataPostUtc}
          previewImg={post.previewImg} 
          rating={post.rating} 
          title={post.title}
          id={post.id}/>) 
			}
      
    </ul>

  );
}
