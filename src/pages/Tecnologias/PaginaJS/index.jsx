import { Link } from "react-router-dom"
import Navbar from "../../../components/Navbar/navbar"

const PaginaJs = () => {
    return(
        <div className="Pagina">
            <Navbar/>
            <div className="BoxEmProducao">
                <h2>
                    Ainda estamos trabalhando nesta área!
                </h2>
                <img src="https://img.icons8.com/stickers/512/workers-male.png"/>
                <div>
                    <Link to='/tecnologias'>
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PaginaJs