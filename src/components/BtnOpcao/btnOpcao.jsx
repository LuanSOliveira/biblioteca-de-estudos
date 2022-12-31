import styles from './BtnOpcao.module.scss'

const BtnOpcao = ({icone, descricao}) => {
    return(
        <button className={styles.BtnOpcao}>
            <img src={icone} alt="icone da opção"/>
            <p>{descricao}</p>
        </button>
    )
}

export default BtnOpcao