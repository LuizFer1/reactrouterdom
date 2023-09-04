import styles from './rodape.module.css'
import React from 'react'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
        </footer>
    )
}

export default Rodape
