import { useContext, useState } from 'react'
import { AppContext } from '../../context/context'
import { AiFillCloseCircle } from "react-icons/ai"
import styles from './AddItem.module.scss'
import { doc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { 
        db, tagsHtmlCollectionRef, propsCssCollectionRef, videosAulasCollectionRef, 
        videosDicasCollectionRef, linksProfissionalCollectionRef, linksUtilidadesCollectionRef
       } from '../../database/db' 

const AddItem = ({tela}) => {
    const {tagsHtml, propsCss, linksProfissinal, linksUtilidades, videosAulas, videosDicas, tagHtmlSelecionada, propCssSelecionada, login, tabelaUser} = useContext(AppContext)
    const {setTagsHtml, setPropsCss, setLinksProfissional, setLinksUtilidades, setVideosAulas, setVideosDicas, setBoxAddItem, setLogin} = useContext(AppContext)

    const [nomeTagEProp, setNomeTagEProp] = useState('')
    const [tituloLinks, setTituloLinks] = useState('')
    const [descricaoLinks, setDescricaoLinks] = useState('')
    const [linkLinks, setLinkLinks] = useState('')
    const [nomeVideo, setNomeVideo] = useState('')
    const [linkVideo, setLinkVideo] = useState('')

    const [nomeUsuario, setNomeUsuario] = useState('')
    const [senhaUsuario, setSenhaUsuario] = useState('')
    const [codeEspecifica, setCodeEspecifica] = useState('')
    const [tituloEspecifica, setTituloEspecifica] = useState('')
    const [documentacaoEspecifica, setDocumentacaoEspecifica] = useState('')
    const [descricaoEspecifica, setDescricaoEspecifica] = useState('')

    const [checkBox, setCheckBox] = useState(false)

    function DesativarAdditem(){
        setBoxAddItem(false)
    }

    function AlterarCheckBox(){
        console.log(checkBox)
        setCheckBox(!checkBox)
    }

    function AtualizaTabela(referencia, setValor){
        const get = async () => {
            const data = await getDocs(referencia)
            setValor(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        get()
    }

    async function AdicionarItem(evento){
        evento.preventDefault()
                
        if(login === false){
            if(tabelaUser[0].usuario === nomeUsuario && tabelaUser[0].usuario === senhaUsuario){
                setLogin(true)
            }
            else{
                alert('Usuário ou senha inválidos')
            }
        }

        if(tela === 'tagsHtml' && login){
            const objeto = {nome: nomeTagEProp , propriedades: []}
            await setDoc(doc(db, 'tagsHtml', `${tagsHtml.length}`), objeto)
            setBoxAddItem(false)
            AtualizaTabela(tagsHtmlCollectionRef, setTagsHtml)
        }
        else if(tela === 'propsCss' && login){
            const objeto = {nome: nomeTagEProp , propriedades: []}
            await setDoc(doc(db, 'propsCss', `${propsCss.length}`), objeto)
            setBoxAddItem(false)
            AtualizaTabela(propsCssCollectionRef, setPropsCss)
        }

        else if(tela === 'linksProfissional' && login){
            const objeto = {titulo: tituloLinks , descricao: descricaoLinks, link: linkLinks}
            await setDoc(doc(db, 'linkProfissional', `${linksProfissinal.length}`), objeto)
            setBoxAddItem(false)
            AtualizaTabela(linksProfissionalCollectionRef, setLinksProfissional)
        }
        else if(tela === 'linksUtilidades' && login){
            const objeto = {titulo: tituloLinks , descricao: descricaoLinks, link: linkLinks}
            await setDoc(doc(db, 'linksUtilidades', `${linksUtilidades.length}`), objeto)
            setBoxAddItem(false)
            AtualizaTabela(linksUtilidadesCollectionRef, setLinksUtilidades)
        }

        else if(tela === 'videosAulas' && login){
            const linkGerado = (checkBox) ? linkVideo : linkVideo.replace('/watch?v=', '/embed/')
            const objeto = {nome: nomeVideo, link: linkGerado}
            await setDoc(doc(db, 'videosAulas', `${videosAulas.length}`), objeto)
            setBoxAddItem(false)
            AtualizaTabela(videosAulasCollectionRef, setVideosAulas)
        }
        else if(tela === 'videosDicas' && login){
            const objeto = {nome: nomeVideo, link: linkVideo.replace('/watch?v=', '/embed/')}
            await setDoc(doc(db, 'videosDicas', `${videosDicas.length}`), objeto)
            setBoxAddItem(false)
            AtualizaTabela(videosDicasCollectionRef, setVideosDicas)
        }

        else if(tela === 'tagHtmlEspecifica' && login){
            let listaSelecionada = tagsHtml[tagHtmlSelecionada.id].propriedades
            const objeto = {
                            id: listaSelecionada.length, 
                            titulo: tituloEspecifica, 
                            code: codeEspecifica.replace('/pen/', '/embed/') + '?default-tab=html%2Cresult', 
                            descricao: descricaoEspecifica, 
                            deocumentacao: documentacaoEspecifica
                           }
            listaSelecionada.push(objeto)
            const dataBaseRef = doc(db, "tagsHtml", tagHtmlSelecionada.id)
            await updateDoc(dataBaseRef, {propriedades: listaSelecionada})
            setBoxAddItem(false)
            AtualizaTabela(tagsHtmlCollectionRef, setTagsHtml)
        }
        else if(tela === 'propCssEspecifica' && login){
            let listaSelecionada = propsCss[propCssSelecionada.id].propriedades
            const objeto = {
                            id: listaSelecionada.length, 
                            titulo: tituloEspecifica, 
                            code: codeEspecifica.replace('/pen/', '/embed/') + '?default-tab=html%2Cresult', 
                            descricao: descricaoEspecifica, 
                            deocumentacao: documentacaoEspecifica
                           }
            listaSelecionada.push(objeto)
            const dataBaseRef = doc(db, "propsCss", propCssSelecionada.id)
            await updateDoc(dataBaseRef, {propriedades: listaSelecionada})
            setBoxAddItem(false)
            AtualizaTabela(propsCssCollectionRef, setPropsCss)
        }
    }

    return(
        <div className={styles.BoxAddItem}>
            <form className={styles.AddItem} onSubmit={(e) => AdicionarItem(e)}>
                <div className={styles.Fechar}>
                    <AiFillCloseCircle className={styles.BtnFechar} onClick={DesativarAdditem}/>
                </div>
                {
                    (login === false) &&
                    <>
                        <p className={styles.Informacao}>Realizar o login para adicionar informações</p>
                        <div className={styles.Opcao}>
                            <label>
                                Usuário:
                                <input type='text' placeholder='Informe o usuário' required value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)}/>
                            </label>
                        </div>
                        <div className={styles.Opcao}>
                            <label>
                                Senha:
                                <input type='password' placeholder='Informe a senha' required value={senhaUsuario} onChange={(e) => setSenhaUsuario(e.target.value)}/>
                            </label>
                        </div>
                    </>
                }
                {
                    (tela === 'tagsHtml' && login || tela === 'propsCss' && login) &&                 
                    <label>
                        {(tela === 'tagsHtml') ? 'Nome da Tag:' : 'Nome da Propriedade' }
                        <input type='text' placeholder='Digite o nome' required value={nomeTagEProp} onChange={(e) => setNomeTagEProp(e.target.value)}/>
                    </label>
                }
                {
                    (tela === 'tagHtmlEspecifica' && login || tela === 'propCssEspecifica' && login) &&
                    <>
                        <div className={styles.Opcao}>
                            <label>
                                Nome da Propriedade:
                                <input type='text' 
                                       placeholder='Digite o nome da propriedade' 
                                       value={tituloEspecifica} onChange={(e) => setTituloEspecifica(e.target.value)} required
                                />
                            </label>
                        </div>
                        <div className={styles.Opcao}>
                            <label>
                                Descrição da Propriedade:
                                <input 
                                    type='text' 
                                    placeholder='Digite a descrição' 
                                    value={descricaoEspecifica} onChange={(e) => setDescricaoEspecifica(e.target.value)} required
                                />
                            </label>
                        </div>
                        <div className={styles.Opcao}>
                            <label>
                                Link Codepen:
                                <input 
                                    type='text' 
                                    placeholder='Digite o link do Codepen' 
                                    value={codeEspecifica} onChange={(e) => setCodeEspecifica(e.target.value)} required
                                />
                            </label>
                        </div>
                        <div className={styles.Opcao}>
                            <label>
                                Documentação da Propriedade:
                                <input 
                                    type='text' 
                                    placeholder='Digite o link da documentação' 
                                    value={documentacaoEspecifica} onChange={(e) => setDocumentacaoEspecifica(e.target.value)} required
                                />
                            </label>
                        </div>
                    </>
                }
                {
                    (tela === 'linksProfissional' && login || tela === 'linksUtilidades' && login) &&
                    <>
                        <div className={styles.Opcao}>
                            <label>
                                Nome do Site:
                                <input type='text' placeholder='Digite o nome do site' value={tituloLinks} onChange={(e) => setTituloLinks(e.target.value)} required/>
                            </label>
                        </div>
                        <div className={styles.Opcao}>
                            <label>
                                Descrição:
                                <input type='text' placeholder='Digite a descrição do site' value={descricaoLinks} onChange={(e) => setDescricaoLinks(e.target.value)} required/>
                            </label>
                        </div>
                        <div className={styles.Opcao}>
                            <label>
                                Link:
                                <input type='text' placeholder='Digite o link do site' value={linkLinks} onChange={(e) => setLinkLinks(e.target.value)} required/>
                            </label>
                        </div>
                    </>
                }
                {
                    (tela === 'videosDicas' && login || tela === 'videosAulas' && login) &&
                    <>
                        <div className={styles.Opcao}>
                            <label>
                                Nome do Video:
                                <input type='text' placeholder='Digite o nome do video' value={nomeVideo} onChange={(e) => setNomeVideo(e.target.value)} required/>
                            </label>
                        </div>
                        <div className={styles.OpcaoCheck}>
                            <label>
                                <input type='checkbox' checked={checkBox} onChange={AlterarCheckBox}/>
                                Playlist
                            </label>
                        </div>
                        <div className={styles.Opcao}>
                            <label>
                                Link do Video:
                                <input type='text' placeholder='Digite o link do video' value={linkVideo} onChange={(e) => setLinkVideo(e.target.value)} required/>
                                <p className={styles.Observacao}>*Utilizar apenas links do youtube.</p>
                            </label>
                        </div>
                    </>
                }
                <div className={styles.BoxBtn}>
                    <button>{(login) ? 'Adicionar' : 'Logar'}</button>
                </div>
            </form>
        </div>
    )
}

export default AddItem