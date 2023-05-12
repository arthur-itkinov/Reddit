import React from "react"
import { useUserData } from "../hooks/useUserData";
import { usePostsData } from "../hooks/usePostsData";


export interface IPostContextData {
  id: string;
  author: string;
  title: string
  rating: number | string;
  avatar: string
  previewImg: string
  dataPostUtc: string
} 
export const postContext = React.createContext<Array<IPostContextData>>([])

export function PostContextProvider({children}: {children:React.ReactNode}){
  const [data] = usePostsData()

  return (
    <postContext.Provider value={data}>
      {children}
    </postContext.Provider>
  )
}