import React from 'react'

export const Child2 = (props) => {
  const handlechange=(e)=>{
    props.callback(e.target.value)
  }
  //העברה מידע מהבן לאבא באמצעות פונקציה
  
  
  
  
  
  
    return (
    <div>Child2
    <input onChange={handlechange}/>
    </div>)
}
export default Child2;