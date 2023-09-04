import styles from "./sobremim.module.css";
import PostModelo from "Componentes/postmodelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function Sobremim() {
  return (
    <PostModelo FotoCapa={fotoCapa} titulo="Sobre mim">
      <h3>Olá, eu sou o antônio!</h3>
      <img
        src={fotoSobreMim}
        alt="foto sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te
        ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com programação começou no Instituto Federal do Piauí
        (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu
        aprendi lógica de programação e o básico de várias linguagens, como PHP,
        Python, Java, mas sem aprofundar muito em cada uma delas.
      </p>
      <p className={styles.paragrafo}>
        Eu gostava muito de estudar programação, mas na época não fazia ideia de
        que trabalharia com isso hoje. No ensino superior, escolhi cursar
        Engenharia Elétrica na Universidade Federal do Piauí (UFPI).
      </p>

      <p className={styles.paragrafo}>
        Lá eu consegui entrar no PET (Programa de Educação Tutorial), um grupo
        acadêmico que contribui de diversas formas para o curso. Lá eu tive a
        oportunidade de estudar desenvolvimento web para ser um dos mantenedores
        do site deles.
      </p>
    </PostModelo>
  );
}
