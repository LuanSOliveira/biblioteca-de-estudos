import { useContext } from 'react';
import PropriedadeHtmlECss from '../../../../../components/HtmlECss/PropriedadeHtmlECss/propriedadeHtmlECss';
import Navbar from '../../../../../components/Navbar/navbar';
import NavRetorno from '../../../../../components/NavRetorno/navRetorno';
import { AppContext } from '../../../../../context/context';
import styles from './PaginaPropEspecifica.module.scss'

const PaginaPropEspecifica = () => {
    const {propsCss, propCssSelecionada} = useContext(AppContext)
    const listaDePropriedades = propsCss[propCssSelecionada.id].propriedades

    return (
      <div className="Pagina">
        <Navbar/>
        <NavRetorno retorno='/tecnologias/css/props' tela='propCssEspecifica'/>
        <div className={styles.BoxOpcoes}>
            <div>
                <h2 className={styles.TituloProp}>Propriedade {propCssSelecionada.nome}</h2>
                {
                    listaDePropriedades.map(
                        (propriedade) => 
                            <div key={propriedade.id} className={styles.BoxPropriedadeCss}>
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
  
  export default PaginaPropEspecifica;