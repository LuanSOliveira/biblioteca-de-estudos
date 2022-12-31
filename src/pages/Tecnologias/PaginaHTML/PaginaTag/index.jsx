import styles from './PaginaTag.module.scss'

import CardComponente from "../../../../components/HtmlECss/CardComponente/cardComponente";
import Navbar from "../../../../components/Navbar/navbar";
import NavRetorno from "../../../../components/NavRetorno/navRetorno";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../../context/context';

const PaginaTag = () => {
  const {tagsHtml, setTagHtmlSelecionada} = useContext(AppContext)

  function DefineTagSelecionada(id){
    setTagHtmlSelecionada(id)
  }

  return (
    <div className="Pagina">
      <Navbar/>
      <NavRetorno retorno='/tecnologias/html' tela='tagsHtml'/>
      <div className={styles.BoxOpcoes}>
        <div className={styles.BoxCards}>
          {
            tagsHtml.map(
              (tag) => <Link key={tag.id} to={`/tecnologias/html/tags/${tag.nome}`} onClick={() => DefineTagSelecionada({id: tag.id, nome: tag.nome})}>
                        <CardComponente descricao={`<${tag.nome}>`}/>
                       </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}
  
  export default PaginaTag;