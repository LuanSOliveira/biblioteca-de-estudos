import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AppProvider from "./context/context"
import Home from './pages/Home'
import PaginasUteis from "./pages/PaginasUteis"
import LinksProfissionais from "./pages/PaginasUteis/LinksProfissionais"
import LinksUtilidades from "./pages/PaginasUteis/LinksUtilidades"
import Tecnologias from "./pages/Tecnologias"
import PaginaCSS from "./pages/Tecnologias/PaginaCSS"
import PaginaPropriedades from "./pages/Tecnologias/PaginaCSS/PaginaPropriedades"
import PaginaPropEspecifica from "./pages/Tecnologias/PaginaCSS/PaginaPropriedades/PaginaPropEspecifica"
import PaginaHTML from "./pages/Tecnologias/PaginaHTML"
import PaginaTag from "./pages/Tecnologias/PaginaHTML/PaginaTag"
import PaginaTagEspecifica from "./pages/Tecnologias/PaginaHTML/PaginaTag/PaginaTagEspecifica"
import PaginaJs from "./pages/Tecnologias/PaginaJS"
import Videos from "./pages/Videos"
import VideosAulas from "./pages/Videos/VideosAulas"
import VideosDicas from "./pages/Videos/VidieosDicas"

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/tecnologias' element={<Tecnologias/>}/>
          <Route path='/tecnologias/html' element={<PaginaHTML/>}/>
          <Route path='/tecnologias/html/tags' element={<PaginaTag/>}/>
          <Route path='/tecnologias/html/tags/:id' element={<PaginaTagEspecifica/>}/>
          <Route path='/tecnologias/css' element={<PaginaCSS/>}/>
          <Route path='/tecnologias/css/props' element={<PaginaPropriedades/>}/>
          <Route path='/tecnologias/css/props/:id' element={<PaginaPropEspecifica/>}/>
          <Route path='/tecnologias/js' element={<PaginaJs/>}/>
          <Route path='/paginas-uteis' element={<PaginasUteis/>}/>
          <Route path='/paginas-uteis/profissional' element={<LinksProfissionais/>}/>
          <Route path='/paginas-uteis/utilidades' element={<LinksUtilidades/>}/>
          <Route path='/videos' element={<Videos/>}/>
          <Route path='/videos/dicas' element={<VideosDicas/>}/>
          <Route path='/videos/aulas' element={<VideosAulas/>}/>
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App
