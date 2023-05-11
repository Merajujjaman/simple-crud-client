import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( data => {
            console.log(data);
            if(data. deletedCount > 0){
                const remain = users.filter( restUser => restUser._id !== _id);
                setUsers(remain)
            }
        } )
    }
    return (
        <div>
            <h1>{users.length}</h1>
            {
                users.map(user => <h3 
                    key={user._id}
                >Name:{user.name},  Email:{user.email}
                <Link to={`/update/${user._id}`}>
                    <button>update</button>
                </Link>
                <button onClick={() => handleDelete(user._id)}>X</button>
                </h3> )
            }
        </div>
    );
};

export default Users;