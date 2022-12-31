import { Link } from "react-router-dom";
import BtnOpcao from "../../../components/BtnOpcao/btnOpcao";
import Navbar from "../../../components/Navbar/navbar";


const PaginaCSS = () => {
  return (
    <div className="Pagina">
      <Navbar/>
      <div className="BoxOpcoes">
        <Link to='/tecnologias/css/props'>
          <BtnOpcao 
            icone='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-css-mobile-app-development-flaticons-lineal-color-flat-icons-4.png' 
            descricao='Propriedades'
          />
        </Link>
        <Link to='/tecnologias'>
          <BtnOpcao 
            icone='https://img.icons8.com/plasticine/512/return.png' 
            descricao='Voltar'
          />
        </Link>
      </div>
    </div>
  )
}
  
export default PaginaCSS;