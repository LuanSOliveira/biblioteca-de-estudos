import styles from './PropriedadeHtmlECss.module.scss'

const PropriedadeHtmlECss = ({nome, descricao, codepen}) => {
    return(
        <div className={styles.PropriedadeHtml}>
            <h3>{nome}</h3>
            <div className={styles.BoxDescricao}>
                <p>{descricao}</p>
            </div>
            <iframe src={codepen}></iframe>
            <p>Documentação: <a href=''></a></p>
        </div>
    )
}

export default PropriedadeHtmlECss