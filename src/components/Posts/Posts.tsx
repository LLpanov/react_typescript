import React, {FC, useEffect, useState} from 'react';

import {IPost} from '../../interfaces';
import {postsService} from '../../sercvices';
import {Post} from '../Post/Post';
import css from './posts.module.css'

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {

        (async () =>{
            const {data} = await postsService.getAll();
            setPosts(data)
        })()
    }, [])

    return (
        <div className={css.WrapP}>
            {posts.map(post =><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};