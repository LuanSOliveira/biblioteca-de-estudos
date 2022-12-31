import styles from './PaginaPropriedades.module.scss'

import CardComponente from "../../../../components/HtmlECss/CardComponente/cardComponente";
import Navbar from "../../../../components/Navbar/navbar";
import NavRetorno from "../../../../components/NavRetorno/navRetorno";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../../context/context';

const PaginaPropriedades = () => {
  const {propsCss, setPropCssSelecionada} = useContext(AppContext)

  function DefinePropSelecionada(id){
    setPropCssSelecionada(id)
  }

  return (
    <div className="Pagina">
      <Navbar/>
      <NavRetorno retorno='/tecnologias/css' tela='propsCss'/>
      <div className={styles.BoxOpcoes}>
        <div className={styles.BoxCards}>
          {
            propsCss.map(
              (prop) => <Link key={prop.id} to={`/tecnologias/css/props/${prop.nome}`} onClick={() => DefinePropSelecionada({id: prop.id, nome: prop.nome})}>
                        <CardComponente descricao={`${prop.nome}`}/>
                       </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}
  
  export default PaginaPropriedades;