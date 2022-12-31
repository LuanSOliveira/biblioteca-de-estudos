import { Link } from "react-router-dom";
import BtnOpcao from "../../components/BtnOpcao/btnOpcao";
import Navbar from "../../components/Navbar/navbar";

const Tecnologias = () => {
    return (
      <div className="Pagina">
        <Navbar/>
        <div className="BoxOpcoes">
            <Link to='/tecnologias/html'>
                <BtnOpcao 
                    icone='https://img.icons8.com/color/512/html-5--v1.png' 
                    descricao='HTML'
                />
            </Link>
            <Link to='/tecnologias/css'>
                <BtnOpcao 
                    icone='https://img.icons8.com/color/512/css3.png' 
                    descricao='CSS'
                />
            </Link>
            <Link to='/tecnologias/js'>
                <BtnOpcao 
                    icone='https://img.icons8.com/color/512/javascript--v1.png' 
                    descricao='JavaScript'
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
  
export default Tecnologias;