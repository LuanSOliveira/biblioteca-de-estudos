import { useContext } from 'react';
import PropriedadeHtmlECss from '../../../../../components/HtmlECss/PropriedadeHtmlECss/propriedadeHtmlECss';
import Navbar from '../../../../../components/Navbar/navbar';
import NavRetorno from '../../../../../components/NavRetorno/navRetorno';
import { AppContext } from '../../../../../context/context';
import styles from './PaginaTagEspecifica.module.scss'

const PaginaTagEspecifica = () => {
    const {tagsHtml, tagHtmlSelecionada} = useContext(AppContext)
    const listaDePropriedades = tagsHtml[tagHtmlSelecionada.id].propriedades

    return (
      <div className="Pagina">
        <Navbar/>
        <NavRetorno retorno='/tecnologias/html/tags' tela='tagHtmlEspecifica'/>
        <div className={styles.BoxOpcoes}>
            <div>
                <h2 className={styles.TituloTag}>Tag {`<${tagHtmlSelecionada.nome}>`}</h2>
                {
                    listaDePropriedades.map(
                        (propriedade) => 
                            <div key={propriedade.id} className={styles.BoxPropriedadeHtml}>
                                <PropriedadeHtmlECss
                                    nome={propriedade.titulo}
                                    descricao={propriedade.descricao}
                                    codepen={propriedade.code}
                                />
                            </div>                        
                    )
                }

            </div>
        </div>
      </div>
    )
  }
  
  export default PaginaTagEspecifica;