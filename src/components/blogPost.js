import React from 'react'
import "./blogPost.css"

export default function BlogPost({title,date,excerpt}){

    return(
        <article className='blog'>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{excerpt}</p>
        </article>
    );
}