import React from "react";
import styles from "./post.module.css";
import { Link } from "react-router-dom";

function Postscard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
      <img
        src={`/assets/posts/${post.id}/capa.png`}
        alt="Imagem de capa"
        className={styles.capa}
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>
    </div>
    </Link>

  );
}

export default Postscard;
