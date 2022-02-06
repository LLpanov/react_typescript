import React, {FC} from 'react';

import {IPost} from '../../interfaces';
import css from './post.module.css'

const Post: FC<{ post: IPost }> = ({post: {id, userId, title, body}}) => {
    return (
        <div className={css.TargetP}>
            <p>Id: {id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p>Body :{body}</p>

        </div>
    );
};

export {Post};