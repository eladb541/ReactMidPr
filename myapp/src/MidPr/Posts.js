import React, { useState,useEffect } from 'react'
import Post  from './Post'
export const Posts = (props) => {

const[myposy,setmypost]=useState([])

useEffect(() => {
    const post = props.posts.filter((t) => t.userId === props.RId);
    setmypost(post);
   
  }, [props.posts,props.RId]);




  return (
    <div style={{ width: "80%", float: "right" , border: "5px solid yellow",  }}>
        
        <h1>Posts of user {props.RId}</h1>

        <ol>
        {myposy.map((post) => {
          return <Post  post={post} />
        })}
      </ol>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}



export default Posts;