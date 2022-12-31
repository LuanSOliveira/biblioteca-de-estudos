import { useContext } from 'react';
import { AppContext } from '../../../context/context';
import styles from './CardComponente.module.scss'

function CardComponente({descricao}) {
    const {setBoxAddItem} = useContext(AppContext)

    function DesativarAddItem(){
        setBoxAddItem(false)
    }

    return (
        <button className={styles.CardComponente} onClick={DesativarAddItem}>{descricao}</button>
    )
  }
  
  export default CardComponente;