import { Link } from "react-router-dom";
import BtnOpcao from "../../components/BtnOpcao/btnOpcao";
import Navbar from "../../components/Navbar/navbar";

function Home() {
    return (
      <div className="Pagina">
        <Navbar/>
        <div className="BoxOpcoes">
            <Link to='/tecnologias'>
                <BtnOpcao 
                    icone='https://img.icons8.com/clouds/512/technology.png' 
                    descricao='Tecnologias'
                />
            </Link>
            <Link to='/paginas-uteis'>
                <BtnOpcao 
                    icone='https://img.icons8.com/clouds/512/flicker-free.png' 
                    descricao='Páginas Úteis'
                />
            </Link>
            <Link to='/videos'>
                <BtnOpcao 
                    icone='https://img.icons8.com/clouds/512/circled-play.png' 
                    descricao='Vídeos'
                />
            </Link>
        </div>
      </div>
    )
  }
  
  export default Home;