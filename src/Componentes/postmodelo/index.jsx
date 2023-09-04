import React from "react";
import styles from "./PostModelo.module.css";

function PostModelo({fotoCapa,titulo,children}) {
  console.log(fotoCapa)
  return (
    <article className={styles.PostModeloContainer}>
      <div
        className={styles.FotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      />
      <h2 className={styles.Título}>{titulo}</h2>
      <div className={styles.PostContainer}>{children}</div>
    </article>
  );
}

export default PostModelo;
