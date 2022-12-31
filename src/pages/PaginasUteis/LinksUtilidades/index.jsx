import { useContext } from 'react'
import LinksUteis from '../../../components/LinksUteis/linksUteis'
import Navbar from '../../../components/Navbar/navbar'
import NavRetorno from '../../../components/NavRetorno/navRetorno'
import { AppContext } from '../../../context/context'
import styles from './LinksUtilidades.module.scss'

const LinksUtilidades = () => {
    const {linksUtilidades} = useContext(AppContext)

    return(
        <div className='Pagina'>
            <Navbar/>
            <NavRetorno retorno='/paginas-uteis' tela='linksUtilidades'/>
            <div className={styles.BoxOpcoes}>
                <div>
                    <h2 className={styles.Titulo}>Links de Utilidades</h2>
                    {
                        linksUtilidades.map(
                            (link) => 
                                <div key={link.id} className={styles.BoxLink}>
                                    <LinksUteis
                                        titulo={link.titulo}
                                        descricao={link.descricao}
                                        link={link.link}
                                    />
                                </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default LinksUtilidades