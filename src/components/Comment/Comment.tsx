import React, {FC} from 'react';

import {IComment} from '../../interfaces';
import css from './comment.module.css'

const Comment: FC<{ comment: IComment }> = ({comment: {id, postId, name, email, body}}) => {

    return (
        <div className={css.TargetC}>
            <p>Id :{id}</p>
            <p>PostID :{postId}</p>
            <p>Name :{name}</p>
            <p>Email :{email}</p>
            <p>Body :{body}</p>
        </div>
    );
};

export {Comment};