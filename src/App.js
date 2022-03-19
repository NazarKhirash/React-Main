
import './App.css';
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import {apiService} from "./services/users.service";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() =>{
    apiService.getUsers().then(value =>{
      setUsers([...value])
        setFilteredUsers([...value])
    })
  },[])

  const getFilter = (data) => {
    let filterArr = [...users]

    if (data.name){
      filterArr = filterArr.filter(user =>user.name.toLowerCase().includes(data.name.toLowerCase()))
    }
    if (data.username){
      filterArr = filterArr.filter(user =>user.username.toLowerCase().includes(data.username.toLowerCase()))
    }
    if (data.email){
      filterArr = filterArr.filter(user =>user.email.toLowerCase().includes(data.email.toLowerCase()))
    }
    setFilteredUsers(filterArr)
  }

  return (
    <div>
      <Form getFilter={getFilter}/>
      <Users users={filteredUsers}/>
    </div>
  );
}

export default App;
