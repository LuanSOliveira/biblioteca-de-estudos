import { useContext } from 'react';
import Navbar from '../../../components/Navbar/navbar';
import NavRetorno from '../../../components/NavRetorno/navRetorno';
import { AppContext } from '../../../context/context';
import styles from './VideosDicas.module.scss'

const VideosDicas = () => {
    const {videosDicas} = useContext(AppContext)

    return (
      <div className="Pagina">
        <Navbar/>
        <NavRetorno retorno='/videos' tela='videosDicas'/>
        <div className={styles.BoxOpcoes}>
            {
                videosDicas.map(
                    (video) => 
                        <div key={video.id} className={styles.CardVideo}>
                            <p>{video.nome}</p>
                            <iframe
                                src={video.link}
                                title={video.nome}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                )
            }
        </div>
      </div>
    )
  }
  
  export default VideosDicas;