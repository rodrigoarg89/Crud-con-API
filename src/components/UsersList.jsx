import React from 'react';
import axios from 'axios';

const UsersList = ({users, selectUser, getUsers}) => {


    const deleteUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
            .then(() => getUsers())
        
    }



    return (
        <div className='div-container'> 
            <h1 className='h1-list'>My Users List</h1>

            <ul className='users-container'>
                {users.map((user) => (
                    <li key={user.id} className='user-item' >
                        <div>
                            <h3 className='name-item'>{user.first_name} {user.last_name}</h3>
                            <div>
                                {user.email}
                            </div>
                            <div className='data'>
                                <span><i class="fa-solid fa-cake-candles"></i></span>
                                {user.birthday}
                            </div>
                            <div className='btn-user'>
                                <div>
                                    <button onClick={() => deleteUser(user.id)}><i class="fa-solid fa-trash"></i></button>
                                </div>
                                <div>
                                    <button onClick={() => selectUser(user)}><a href='#flex-form'><i class="fa-solid fa-pen"></i></a></button> 
                                </div>


                            </div>
 
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;