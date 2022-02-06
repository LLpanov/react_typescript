import React, {FC, useEffect, useState} from 'react';

import {commentsService} from '../../sercvices';
import {IComment} from '../../interfaces';
import {Comment} from '../Comment/Comment';
import css from './comments.module.css'

const Comments: FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);


    useEffect(() => {

        (async () => {
            const {data} = await commentsService.getAll();
            setComments(data)
        })()


    }, [])
    return (
        <div className={css.WrapC}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};