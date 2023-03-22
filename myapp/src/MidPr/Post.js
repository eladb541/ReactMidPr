import { useState,useEffect } from 'react';

const Post = (props) => {
const[title,setItle]=useState("")
const[body,setbody]=useState("")

useEffect(() => {
     function fetchData() {
     
        setItle(props.post.title);
        setbody(props.post.body);
    }  
    fetchData();
  }, [ props.post.title, props.post.body]);




  return (
    <>
      {props.post && (
        <>
          <li>title :{title} 
          <br/>
          Post :{body}
          
          </li>
        </>
      )}




    </>
  );
};

export default Post;