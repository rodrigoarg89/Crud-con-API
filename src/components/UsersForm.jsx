import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";


const UsersForm = ({getUsers, userSelected, deselectUser}) => {

    const { register, handleSubmit, reset} = useForm();


    useEffect(() => {
        if(userSelected) {
            reset(userSelected)
        }
    }, [userSelected]) 



    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                 .then(() => getUsers())
        } else {
        axios.post('https://users-crud1.herokuapp.com/users/', data)
             .then(() => getUsers())
             .catch((error) => console.log(error.response))
        }
        clear()
    }




    const clear = () => {
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''

        })
        deselectUser();
    }


    return (
        <form onSubmit={handleSubmit(submit)} >
            <h1>New User</h1>

            <div className="input-container">
                <i className="fa-solid fa-user"></i>
                <label htmlFor="first_name"></label>
                <input 
                    placeholder="first name"
                    type="text" 
                    id='first_name'
                    {...register('first_name')}
                />
            </div>
            <div className="input-container">
                <label htmlFor="last_name"></label>
                <input 
                placeholder="last name"
                    type="text" 
                    id='last_name'
                    {...register('last_name')}
                    />
            </div>

            <div className="input-container">
                <i class="fa-solid fa-envelope"></i>
                <label htmlFor="email"></label>
                <input 
                placeholder="email"
                    type="email" 
                    id='email'
                    {...register('email')}
                />
                </div>

            <div className="input-container">
                <i class="fa-solid fa-lock"></i>
                <label htmlFor="password"></label>
                <input 
                placeholder="password"
                    type="password" 
                    id='password'
                    {...register('password')}
                />
            </div>



            <div className="input-container">
                <i class="fa-solid fa-cake-candles"></i>
                <label htmlFor="birthday"></label>
                <input 
                    type="date" 
                    id='birthday'
                    {...register('birthday')}
                />
            </div>
            <button className='submit'>{userSelected ? 'Update' : 'Upload'}</button>
            <button className='clear' type="button" onClick={clear}>Clear</button>
        </form>
    );
};

export default UsersForm;