import React, {FC, useEffect, useState} from 'react';

import {IUser} from '../../interfaces';
import {userService} from '../../sercvices';
import {User} from '../User/User';
import css from './users.module.css'

const Users: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const getAllUsers = async () => {
            const {data} = await userService.getAll();
            setUsers(data)

        }
        getAllUsers()

    }, [])
    return (
        <div className={css.WrapU}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};