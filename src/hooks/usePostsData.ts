import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { tokenContext } from "../context/tokenContext";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface IPostData {
  id: string;
  author: string;
  title: string
  rating: number | string;
  avatar: string
  previewImg: string
  dataPostUtc: string 
}

export const usePostsData = () => {
    const [data, setData] = useState<IPostData[]>([]);
    const token = useSelector<RootState, string>(state => state.token)
    
   
    useEffect(() => {
        if(token && token.length > 0 && token !== 'undefined') {
          axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
           headers: { Authorization: `Bearer ${token}` }
          })
          .then((resp) => {
            
            const userData = resp.data.data.children.map(
              (item: {data: any}) => ({
                id: item.data.id,
                author: item.data.author,
                title: item.data.title,
                rating: item.data.ups,
                avatar: item.data.sr_detail.icon_img ? item.data.sr_detail.icon_img : "	https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png",
                previewImg: item.data.preview ? item.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g,"&") : 
                "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295972138872283.png",
                dataPostUtc: item.data.created_utc,

              })
            )
            setData(userData)
          })
          .catch(console.log)
        }
        
      }, [token])
      return [data]
}
