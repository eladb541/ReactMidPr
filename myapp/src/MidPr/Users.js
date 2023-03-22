import { useState, useEffect } from 'react';
import axios from 'axios'
import User from "./User";
import  Adduser  from './Adduser';
import AddTask from './AddTask';
import Posts from './Posts'
import AddPost from './AddPost';

const userURL='https://jsonplaceholder.typicode.com/users'
const todoUrl="https://jsonplaceholder.typicode.com/todos"
const postURL="https://jsonplaceholder.typicode.com/posts"


export const Users = () => { 
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [taskIds,setTaskIds]=useState([])
  const [allPosts,Setpost]=useState([]);
  const [search, setSerach] = useState('');
  const [IdsAndCompleted, SIdsAndCompleted] = useState([{ id: "", isCompleted:  ""}]);
  const [showuser,Setadduser]=useState(false);
  const [addtext,setaddtext]=useState("Add user")
  const [showtask,setaddTask]=useState(false);
  const [addtask,setaddtask]=useState("Add task")
  const [newAddId,SetnewID]=useState(11)
  const [RelevantPostId,SetrelevantPost]=useState(-1);
  const [showPost,Setshowpost]=useState(false)
  const [Addpost,Setaddpost]=useState(101)
  const [showAddpost,Setshowap]=useState(false)
  const [addpostext,Setaddpostext]=useState("Add Post")



  useEffect(() => {
    async function fetchData() {
      const userResponse = await axios.get(userURL);
      setAllUsers(userResponse.data);
      setUsers(userResponse.data);
    }  
    fetchData();
  }, []);


  

  useEffect(() => {
    async function fetchData() {
      const taskResponse = await axios.get(todoUrl);
      setTasks(taskResponse.data);
    }  
    fetchData();
  }, []);

useEffect(() => {
  async function fetchData() {
    const postResponse = await axios.get(postURL);
    Setpost(postResponse.data);
  }  
  fetchData();
}, []);



  useEffect(() => {
    const ids = allUsers.map((user) => user.id);
    setUserIds(ids);
  }, [allUsers]);

  useEffect(() => {
    const idsTask = tasks.map((task) => task.id);
    setTaskIds(idsTask);
  }, [tasks]);
  


  useEffect(() => {
    setTasks(tasks)
  }, [tasks]);

 
  useEffect(() => {
    if (search!=null) {
      const filteredUsers = allUsers.filter((user) => 
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    setUsers(filteredUsers);
      
    }
    else
    setUsers(allUsers);
  
  }, [search, allUsers]);


  const updateUser = (updatedUser) => {
    const updatedUsers = allUsers.map((user) => {
      if (user.id === updatedUser.id) {
        return { ...user, name: updatedUser.name, email: updatedUser.email };
      }
      return user;
    });
    setAllUsers(updatedUsers);
    setUsers(updatedUsers);
    alert("user upadated")
  };


const deleteUser = (updatedUser) => {
  const updatedUsers = allUsers.filter((user) => user.id !==updatedUser.id);
  setAllUsers(updatedUsers);
  setUsers(updatedUsers);
  alert("user deleted")
};


 const Oncompletedfun = (updatedtask) => {
  const updated_task = tasks.map((task) => {
    if (task.id === updatedtask.id) {
      return {...task, completed:true };
    }
    return task;
  });
  setTasks(updated_task);
  alert("task upadated");
};     
   
  

useEffect(() => {
  const updatedIdsAndCompleted = userIds.map((id) => {
    const todoData = tasks.filter((task) => task.userId === id);
    const _isCompleted = todoData.every((task) => task.completed === true);
    
    if (todoData.length==0) {
      return { id: id, isCompleted: true };
    } else {
      return { id: id, isCompleted: _isCompleted };
    }
   
  });
  SIdsAndCompleted(updatedIdsAndCompleted);
}, [tasks, userIds]);



const createNew = (createNew) => {

  
  const updatedUser = { name: createNew.name, email: createNew.email, id: newAddId };

  console.log(updatedUser)
  setAllUsers([...allUsers, updatedUser]);
  setUsers([...allUsers, updatedUser]);
  Setadduser(!showuser);
  SetnewID(newAddId+1)
  setaddtext("Add user")
  }

;

const Oncancel = () => { 
  
  Setadduser(!showuser);
  setaddtext("Add user")
 
  
};

const canceltask = () => { 
  
setaddTask(!showtask);
setaddtask("Add Task");
  
};


const Addtaskclick = () => {
  if (showtask) {
    setaddTask(!showtask);
    setaddtask("Add Task");
  } else {
    setaddTask(!showtask);
    setaddtask("Don't Add Task");
  }
};


const Addpostclick = () => {
  if (showAddpost) {
    Setshowap(!showAddpost);
    Setaddpostext("Add Post");
    

  } else {


    
    Setshowap(!showAddpost);
    Setaddpostext("Don't Add Post");
  
  }
};

const AddClick = () => {
  
 
  
  if (showuser) {
    Setadduser(!showuser)
    setaddtext("Add user")
    
  } else {
    Setadduser(!showuser)
    setaddtext("Dont add user")
    
  }
 
  
};
const addTask = (createNewtask) => {
  console.log("success")
  const newid = taskIds[taskIds.length-1] + 1;
  const updatedtask = { 
    userId: createNewtask.userId, 
    title: createNewtask.title, 
    id: newid, 
    completed: false 
  };
  console.log(updatedtask)
  setTasks([...tasks, updatedtask]);
  setaddTask(!showtask);
  console.log(tasks)
  setaddtask("Add Task");
};



const showpost = (id) => {
  Setshowpost(!showPost)
  SetrelevantPost(id)

};


const cancelpost = () => {
  Setshowpost(!showPost)
  SetrelevantPost(-1)

};


//
const addPost = (createNewtask) => {
console.log("sucess")

  const newidpost = Addpost;
  const updatedpost = { 
    userId: createNewtask.userId, 
    title: createNewtask.title, 
    id: newidpost, 
    body: createNewtask.body 
  };
  
  console.log(newidpost)
  Setaddpost(Addpost+1)
  Setpost([...allPosts, updatedpost]);
  Setshowap(!showAddpost);
  Setaddpostext("Add Post");
};

const cancelPost = () => { 
  
  Setshowap(!showAddpost);
  Setaddpostext("Add Post");
    
  };




  
return (
  <div style={{ display: "flex" }}>
      
    <div style={{ width: "50%" }}>
      <div>
      <h1>Users List</h1>
      <br />
      search <input onChange={(e) => setSerach(e.target.value)} />
      <br /><br/><br/>
      <button onClick={AddClick}>{addtext}</button>
      <button onClick={Addtaskclick}>{addtask}</button>
      <button onClick={Addpostclick}>{addpostext}</button>
      <br/><br/><br/>
      </div>
      {users.map((user) => (
        <User key={user.id} user={user} userId={user.id} tasks={tasks} onUserUpdate={updateUser} onDelete={deleteUser}
         Oncompleted={Oncompletedfun} showpost={showpost} cancelpost={cancelpost} IdandCo={IdsAndCompleted}
          />
      ))}
    </div>

    <div style={{ width: "50%"  ,marginTop:"237.840px"}}>
      {showuser && (
        <div style={{ marginBottom: "10px" }}>
          <Adduser Oncreate={createNew} Oncancel={Oncancel} />
        </div>
      )}
      {showtask && (
          <div style={{ marginBottom: "10px" }}>
          <AddTask arratids={userIds} lastid={taskIds} Oncreatetask={addTask} Oncancel={canceltask} />
        </div>
      )}
       
      {showAddpost && (
          <div style={{ marginBottom: "10px" }}>
          <AddPost arratids={userIds}  Oncreatetask={addPost} Oncancel={cancelPost} />
        </div>
      )}




      {showPost && (
          <div style={{ marginBottom: "10px" }}>
          <Posts  RId={RelevantPostId} posts={allPosts}/>
        </div>
      )}



    
    </div>
    
  </div>
 
);
      }

export default Users;
