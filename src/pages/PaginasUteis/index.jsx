import { Link } from "react-router-dom";
import BtnOpcao from "../../components/BtnOpcao/btnOpcao";
import Navbar from "../../components/Navbar/navbar";

const PaginasUteis = () => {
  return (
    <div className="Pagina">
      <Navbar/>
      <div className="BoxOpcoes">
        <Link to='/paginas-uteis/profissional'>
          <BtnOpcao
            icone='https://img.icons8.com/bubbles/512/business.png'
            descricao='Profissional'
          />
        </Link>
        <Link to='/paginas-uteis/utilidades'>
          <BtnOpcao
            icone='https://img.icons8.com/bubbles/512/maintenance.png'
            descricao='Utilidades'
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
  
  export default PaginasUteis;