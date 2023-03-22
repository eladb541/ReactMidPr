import React, { useState,useEffect } from 'react';


const Task = (props) => {
const[iscompleted,setCompleted]=useState(props.task.completed)


useEffect(() => {
  if (iscompleted !== props.task.completed) {
    const updatedUser = { id: props.task.id, completed: iscompleted };
    props.oncompleted(updatedUser);
  }
}, [iscompleted]);

useEffect(() => {
  setCompleted(props.task.completed);

}, [props.task]);

  return (
    <>
      {props.task && (
        <>
          <li>{props.task.title}</li> is completed: {iscompleted.toString()}
          
          
        </>
      )}



{
iscompleted?null:<button onClick={() => setCompleted(!iscompleted)}>mark as completed </button>

}
    </>
  );
};

export default Task;