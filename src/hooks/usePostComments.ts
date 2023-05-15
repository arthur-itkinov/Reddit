import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../context/tokenContext';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


export function usePostComments(postID: string) {
  const [comments, setComments] = useState<any[]>([]);
  const token = useSelector<RootState, string>(state => state.token)
 

  useEffect(() => {
    axios.get(`https://oauth.reddit.com/comments/${postID}`, {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((resp) => {
        if (resp.data[1].data?.children) {
          
          const comments = resp.data[1].data.children
            .map((comment: any) => makeCommentData(comment))
            .filter((comment: any) =>  comment.authorName !== '[deleted]' && comment.authorName !== undefined);

          setComments(comments);
        }
      })
      .catch(console.log);
  }, [token]);

  return comments;
}

function getReplies(data: any) {
  if (!data) return [];

  return data.data.children
    .map((comment: any) => makeCommentData(comment))
    .filter((comment: any) => comment.kind !== 'more');
}

function makeCommentData(commentData: any) {
  return {
    commentID: commentData.data.id,
    authorName: commentData.data.author,
    body: commentData.data.body,
    created_utc: commentData.data.created_utc,
    replies: getReplies(commentData.data.replies),
    kind: commentData.kind
  }
}