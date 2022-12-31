import { getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { linksProfissionalCollectionRef, 
         linksUtilidadesCollectionRef, 
         propsCssCollectionRef, 
         tagsHtmlCollectionRef, 
         userCollectionRef, 
         videosAulasCollectionRef, 
         videosDicasCollectionRef 
       } from "../database/db";

export const AppContext = createContext()

const AppProvider = ({children}) => {
    const [tagsHtml, setTagsHtml] = useState([])
    const [propsCss, setPropsCss] = useState([])
    const [linksProfissinal, setLinksProfissional] = useState([])
    const [linksUtilidades, setLinksUtilidades] = useState([])
    const [videosAulas, setVideosAulas] = useState([])
    const [videosDicas, setVideosDicas] = useState([])
    const [tagHtmlSelecionada, setTagHtmlSelecionada] = useState({})
    const [propCssSelecionada, setPropCssSelecionada] = useState({})
    const [boxAddItem, setBoxAddItem] = useState(false)
    const [tabelaUser, setTabelaUser] = useState('')
    const [login, setLogin] = useState(false)

    function GetTabelaFirebase (referencia, setValor){
        const get = async () => {
            const data = await getDocs(referencia)
            setValor(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        get()
    }

    useEffect(() => {
        GetTabelaFirebase(tagsHtmlCollectionRef, setTagsHtml)
        GetTabelaFirebase(propsCssCollectionRef, setPropsCss)
        GetTabelaFirebase(videosAulasCollectionRef, setVideosAulas)
        GetTabelaFirebase(videosDicasCollectionRef, setVideosDicas)
        GetTabelaFirebase(linksProfissionalCollectionRef, setLinksProfissional)
        GetTabelaFirebase(linksUtilidadesCollectionRef, setLinksUtilidades)
        GetTabelaFirebase(userCollectionRef, setTabelaUser)
    },[])
    
    return(
        <AppContext.Provider 
            value={
                    {
                        tagsHtml, setTagsHtml,
                        propsCss, setPropsCss,
                        linksProfissinal, setLinksProfissional,
                        linksUtilidades, setLinksUtilidades,
                        videosAulas, setVideosAulas,
                        videosDicas, setVideosDicas,
                        tagHtmlSelecionada, setTagHtmlSelecionada,
                        propCssSelecionada, setPropCssSelecionada,
                        boxAddItem, setBoxAddItem,
                        tabelaUser, setTabelaUser,
                        login, setLogin
                    }
                }
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider