import React, { useState,useEffect } from 'react';

export const AddPost = (props) => {
  
const[post,setPost]=useState("");
const[title,setTitle]=useState("");
const array=props.arratids;
const[userid,setUseid]=useState(array[0])
 
 
 useEffect(() => {
  if (props.arratids !== array) {
   array=props.arratids;
   setUseid(array[0])
  }
}, [props.arratids]);



 function createNew() {
  const newpost = { userId: parseInt(userid), title: title, body:post};
  props.Oncreatetask(newpost);
  setPost("")
  setTitle("")
}


  function cancel() {
    setPost("")
    setTitle("")
    props.Oncancel();

  }
  

    return (
        <div style={{ width: "80%", float: "right" , border: "5px solid yellow",  }}>
        <h2>Add new Post</h2>
        <span>
        title:<input type="text"value={title}onChange={(e) => setTitle(e.target.value)}/>
          <br/>
          body:<input type="text"value={post}onChange={(e) => setPost(e.target.value)}/>
          <br/>
         select user id: <select  onChange={(e) => setUseid(e.target.value)}>
        {array.map((number,index) => (
        <option key={index} value={number}>
          {number}
        </option>
        ))}
    </select>
          
          
          <br />
          <button onClick={createNew}>ADD</button>
          <br />
          <button onClick={cancel}>Cancel</button>
        </span>
      </div>
  )
}
export default AddPost;