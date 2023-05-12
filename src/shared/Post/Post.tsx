import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { CommentForm } from '../CommentForm';
import { SortingComments } from './SortingComments';
import { Comment } from './Comment';
import { CommentUser } from './Comment/CommentUser';
import { CommentText } from './Comment/CommentText';
import { CommentControls } from './Comment/CommentControls';
import axios from 'axios';
import { tokenContext } from '../../context/tokenContext';
import { usePostComments } from '../../hooks/usePostComments';






interface IPost {
  onClose?: () => void;
  postId: string;
}
export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null)
  const postComments = usePostComments(props.postId);
  // console.log(postComments)

  useEffect(() => {
    function handeleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.()
      }
    }
    document.addEventListener('click', handeleClick)
    return () => {
      document.removeEventListener('click', handeleClick)
    }
  }, [])


  const node = document.querySelector('#modal_root')
  if (!node) return null;



  return ReactDOM.createPortal((
    <div  className={styles.modal} ref={ref} >
      <h2>Следует отметить, что новая модель организованной деятельности поможет</h2>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt alias aliquid dolore dicta accusantium nam saepe tempora blanditiis fuga, molestiae, aliquam quam quibusdam nisi dolores cum est magni esse labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt alias aliquid dolore dicta accusantium nam saepe tempora blanditiis fuga, molestiae, aliquam quam quibusdam nisi dolores cum est magni esse labore.</p>     
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt alias aliquid dolore dicta accusantium nam saepe tempora blanditiis fuga, molestiae, aliquam quam quibusdam nisi dolores cum est magni esse labore.</p>
      </div>
      <CommentForm/>
      <SortingComments/>
      {postComments.map(comment => (
        <Comment
          commentId={comment.commentID}
          key={comment.commentID}
        >
          <CommentUser authorName={comment.authorName} createdUtc={comment.created_utc} kind={comment.kind}/>
          <CommentText body={comment.body}/>
          <CommentControls authorName={comment.authorName}/>
         
        </Comment>
      ))}
   
    </div>
  ), node);
}
