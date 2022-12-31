import { Link } from "react-router-dom";
import BtnOpcao from "../../components/BtnOpcao/btnOpcao";
import Navbar from "../../components/Navbar/navbar";

const Videos = () => {
    return (
      <div className="Pagina">
        <Navbar/>
        <div className="BoxOpcoes">
            <Link to='/videos/aulas'>
                <BtnOpcao 
                    icone='https://img.icons8.com/plasticine/512/classroom.png' 
                    descricao='Aulas'
                />
            </Link>
            <Link to='/videos/dicas'>
                <BtnOpcao 
                    icone='https://img.icons8.com/plasticine/512/idea.png' 
                    descricao='Dicas'
                />
            </Link>
            <Link to='/'>
                <BtnOpcao 
                    icone='https://img.icons8.com/plasticine/512/return.png' 
                    descricao='Voltar'
                />
            </Link>
        </div>
      </div>
    )
}
  
export default Videos;