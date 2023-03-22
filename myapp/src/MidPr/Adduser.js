import React, { useState } from "react";

function AddUser(props) {
  const [newname, setnewname] = useState("");
  const [newemail, setnewemail] = useState("");

  function createNew() {
    const updatedUser = { name: newname, email: newemail, };
    props.Oncreate(updatedUser);
    setnewname("")
    setnewemail("")
  }

  function cancel() {
    setnewname("")
    setnewemail("")
    props.Oncancel();

  }

  return (
    <div style={{ width: "80%", float: "right" , border: "5px solid orange",  }}>
      <h2>Add new user</h2>
      <span>
        name:<input type="text"value={newname}onChange={(e) => setnewname(e.target.value)}/>
        
        <br />
        email:
        <input type="text" value={newemail} onChange={(e) => setnewemail(e.target.value)}/>
        
        <br />
        <button onClick={createNew}>ADD</button>
        <br />
        <button onClick={cancel}>Cancel</button>
      </span>
    </div>
  );
}

export default AddUser;
