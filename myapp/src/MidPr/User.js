import { useState,useEffect } from 'react';
import Task from "./Task";
import  MoreDetails  from './MoreDetails';
export const User = (props) => {
  const [tasks, setTasks] = useState([]);
  const [taskBV, setBv] = useState("Tasks");
  const [showtask, setShowtask] = useState([]);
  const [thisuser, setUser] = useState(props.user.name);
  const [thisemail, setEmail] = useState(props.user.email);
  const [taskshow,settaskshow]=useState(false)
  const[postState,setpostState]=useState(false)
  const[postExt,setExt]=useState("Show my post")
  const[bgcolor,setbgcolor]=useState("white")
  const[colors,setcolor]=useState(false)
  const[warn,setwarn]=useState('')
  const[showmore,setshowmore]=useState(false)
  const[showmtext,setshowmoret]=useState('Show More')
  
  
  useEffect(() => {
    const userTasks = props.tasks.filter((t) => t.userId === props.user.id);
    setTasks(userTasks);
   
  }, [props.user, props.tasks]);

  
useEffect(() => {
  const userTasks = props.IdandCo.filter((t) => t.id === props.user.id);
  const boolcolor = userTasks.some((t) => t.isCompleted);
  if (colors !== boolcolor) {
    setcolor(boolcolor);
  } 
}, [props.IdandCo, props.user.id, colors]);

  
 

  useEffect(() => {
    const userTasks = props.tasks.filter((t) => t.userId === props.user.id);
    if (userTasks!==tasks) {
      setTasks(userTasks);
    }
   
  }, [ props.tasks]);


  useEffect(() => {
    setUser(props.user.name);
    setEmail(props.user.email);
  }, [props.user]);

  useEffect(() => {
    if (taskshow) {
      setShowtask(tasks);
      setBv("Hide Tasks");
    } else {
      setShowtask([]);
      setBv("Tasks");
    }
  },[taskshow]);

  const updateUser = () => {
    const updatedUser = { name: thisuser, email: thisemail, id: props.user.id };
    props.onUserUpdate(updatedUser);
   
  };
  

  const DeleteUser = () => {
    const DeletedUser = {id: props.user.id };
    props.onDelete(DeletedUser);
  };

  const Oncompleted = (completedvalue) =>
  {
    props.Oncompleted(completedvalue);

  }

  const postClick = () =>
  {
    //return
    if (postState) {

      setExt("Show my post");
      setpostState(false)
      props.cancelpost();
      setbgcolor("white")
      setwarn("")
    } else {
      setExt("dont Show my post");
      setpostState(true)
      props.showpost(props.user.id)
      setbgcolor("orange")
      setwarn("*make sure you close post to see other's post")
    }

  }

  const showmoref = () => {
    setshowmore(true)
    setshowmoret("Show less")
  
  };


  const showlessf = () => {
    setshowmore(false)
    setshowmoret("Show More")
  
  };




  return (
    <div style={{  width: "80%",padding:"15px",backgroundColor:`${bgcolor}` ,border: `5px solid ${colors ? 'green' : 'red'}` } }>
      <h2> user {props.user.id}</h2>
      name: <input type="text" value={thisuser} onChange={(e) => setUser(e.target.value)} />
      <br />
      email: <input type="text" value={thisemail} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <button onClick={() => settaskshow(!taskshow)}>{taskBV}</button>

      <button onClick={updateUser}>Update</button>

      <button onMouseEnter={showmoref} onMouseLeave={showlessf} >{showmtext}</button>

      <button onClick={DeleteUser}>Delete</button>

      <button onClick={postClick}>{postExt}</button>


  
      <ol>
        {showtask.map((task) => {
          return <Task key={task.id} task={task} oncompleted={Oncompleted} />;
        })}
      </ol>
     
      {showmore && (
          <div >
          <MoreDetails address={props.user.address}  />

        </div>
      )}
        <div style={{ fontSize: "8px" }}>
  {warn}
</div>

    </div>
  );
};


export default User;
