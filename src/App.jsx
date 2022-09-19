import { useEffect, useState } from 'react'
import axios from 'axios'
// import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import './styles.css';


function App() {

  const [ users, setUsers ] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
          .then( res => setUsers(res.data))
  }, [])
  
  // console.log(users)

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then( res => setUsers(res.data))
  }

  const selectUser = (user) => {
    setUserSelected(user)
    //para poder sacar a user de esta funcion debo almacenarlo en un estado
  }

  const deselectUser = () => setUserSelected(null);


  console.log(userSelected)

  return (
    <div className="App" id="flex-form" >

      <UsersForm 
        getUsers={getUsers} 
        userSelected={userSelected} 
        deselectUser={deselectUser}/>

      <UsersList 
        users={users} 
        selectUser={selectUser}
        getUsers={getUsers}
        />
      
    </div>
  )
}

export default App
