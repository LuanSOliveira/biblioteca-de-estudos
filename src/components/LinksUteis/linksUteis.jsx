import styles from './LinksUteis.module.scss'

const LinksUteis = ({titulo, descricao, link}) => {
    return(
        <div className={styles.PropriedadeHtml}>
            <h3>{titulo}</h3>
            <div className={styles.BoxDescricao}>
                <p>{descricao}</p>
            </div>
            <a href={link} target='_blank'>
                <button>
                    Visitar
                </button>
            </a>
        </div>
    )
}

export default LinksUteis