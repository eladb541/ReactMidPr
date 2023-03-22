import { useState,useEffect } from 'react';

export const MoreDetails = (props) => {
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [street, setStreet] = useState('')
  
    useEffect(() => {
      if (props.address) {
        setCity(props.address.city)
        setZip(props.address.zipcode)
        setStreet(props.address.street)
      } 
      //else {
       // setCity('')
        //setZip('')
        //setStreet('')
      }
    , [props.address])
  
    if (!props.address) {
     return null;
   }
  
    return (
      <div style={{ backgroundColor: 'gray' }} >
        street: <input type="text" value={street} readOnly />
        <br />
        city: <input type="text" value={city} readOnly  />
        <br />
        zip: <input type="text" value={zip}  readOnly/>
      </div>
    )
  }
  
  export default MoreDetails;
  