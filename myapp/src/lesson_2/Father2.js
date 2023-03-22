import React, { useState } from 'react'
import { Child2 } from './Child2';

export const Father2 = () => {
  const[data,setData]=useState('');
  const getdatafromchild =(childvalue)=>{
    setData(childvalue);
  }
  
  
  
  
  
  
    return (
    <div>Father2 data from child
    {data}
    
    
    <br/>
    <br/>
    <Child2 callback={getdatafromchild}/>
    </div>)
}
export default Father2;
