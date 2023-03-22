import { useState } from "react";

function Demo_2()
{

//lesson1
const [name,setName]=useState("elad");
const [city,setCity]=useState("TLV");
const[user,Setuser]=useState({Name:"liad",City:"Tlv"});
const[Isexist,SetIsexist]=useState(false);
const[colors,setColors]=useState(["Red","Green","Blue"])

const addColor = () => {
    setColors([...colors, 'Yellow']);
}
//spred operator
function ChangeData() 
{
    Setuser({...user,City:"NYC"});

    Setuser({...user,Name:"ealan"});
    
}





    return(
<div>

{name}
<br/>
{city}
<br/>
change city  <input onChange={e=> setCity(e.target.value)}/>
<br/>
change name  <input onChange={e=> setName(e.target.value)}/>
<br/>
<button onClick={ChangeData}>change data  city</button>
<br/>
<button onClick={ChangeData}>change data  city</button>
<br/>
<button onClick={() => SetIsexist(!Isexist)}>create/Destroy </button>
{
Isexist?<h1> create</h1>:null

}
<h2> username details</h2>
{user.Name}   .... {user.City}
<br/>
<button onClick={addColor}>Add Color</button> <br />
      {colors.map((item) => {
        return <div key={item}>{item}</div>;
      })}
      <br />
      <ul>
        {colors.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>




</div>
)
    }

export default Demo_2;