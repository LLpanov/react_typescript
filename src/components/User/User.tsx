import React, {FC} from 'react';

import {IUser} from '../../interfaces';
import './Users.css'

const User: FC<{user:IUser}> = ({user: {id, name, username, email}}) => {
    return (
        <div className={'TargetU'}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email :{email}</p>
        </div>
    );
};

export {User};