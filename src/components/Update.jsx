import React from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadUser = useLoaderData();
    
    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email);
        const updateInfo = { name, email }

        fetch(`http://localhost:5000/users/${loadUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
    }


    return (
        <div>
            <h1>update page</h1>
            <h3>update this user: {loadUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
            <Link to='/users'>
                <button>Users</button>
            </Link>

        </div>
    );
};

export default Update;