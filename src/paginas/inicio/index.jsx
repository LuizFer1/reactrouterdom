import React from 'react'
import styles from "./inicio.module.css"
import Postscard from 'Componentes/Postscard';

import posts from 'json/posts.json'

function Inicio() {
    return (
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id} >
                        <Postscard post={post} />
                    </li>
                ))}
            </ul>
    )
}   


export default Inicio
