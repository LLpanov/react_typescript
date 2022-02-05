import React, {FC} from 'react';

import {IUser} from '../../interfaces';
import css from '../User/user.module.css'

interface IProps {
    user: IUser
}


const User: FC<IProps> = ({user: {id, name, username, email}}) => {
    return (
        <div className={css.userTarget}>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email :{email}</p>
        </div>
    );
};

export {User};