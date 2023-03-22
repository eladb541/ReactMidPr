import React, { useState,useEffect } from 'react';

export const AddTask = (props) => {
  
const[task,setTask]=useState("");
const array=props.arratids;
const[userid,setUseid]=useState(array[0])
 
 
 useEffect(() => {
  if (props.arratids !== array) {
   array=props.arratids;
   setUseid(array[0])
  }
}, [props.arratids]);



 function createNew() {
  const newtask = { userId: parseInt(userid), title: task, completed:false};
  props.Oncreatetask(newtask);
  setTask("")
  setUseid("")
}


  function cancel() {
    setTask("")
    setUseid("")
    props.Oncancel();

  }
  

    return (
        <div style={{ width: "80%", float: "right" , border: "5px solid yellow",  }}>
        <h2>Add new task</h2>
        <span>
          task:<input type="text"value={task}onChange={(e) => setTask(e.target.value)}/>
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
export default AddTask;