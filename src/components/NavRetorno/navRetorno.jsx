import styles from './NavRetorno.module.scss'

import { FaHome } from "react-icons/fa"
import { GiReturnArrow } from "react-icons/gi"
import { BsFillFileEarmarkPlusFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../context/context';
import AddItem from '../AddItem/addItem';

const NavRetorno = ({retorno, tela}) => {
  const {boxAddItem, setBoxAddItem} = useContext(AppContext)

  function VisibilidadeBtnAdd(){
    if(boxAddItem){
      return `${styles.Retorno} ${styles.Invisivel}`
    }
    else{
      return `${styles.Retorno}`
    }
  }

  function AtivaAddItem(){
    setBoxAddItem(true)
  }

  function DesativarAddItem(){
    setBoxAddItem(false)
  }

  return (
    <div className={styles.NavRetorno}>
      <div>
        <Link to='/'>
            <button className={styles.Retorno} onClick={DesativarAddItem}>
                <FaHome/>
            </button>
        </Link>
        <Link to={retorno}>
            <button className={styles.Retorno} onClick={DesativarAddItem}>
                <GiReturnArrow/>
            </button>
        </Link>
      </div>
      <div>
        <button className={VisibilidadeBtnAdd()} onClick={AtivaAddItem}>
          <BsFillFileEarmarkPlusFill/>
        </button>
      </div>
      {
        (boxAddItem) && <AddItem tela={tela}/>
      }
    </div>
  )
}
  
export default NavRetorno;