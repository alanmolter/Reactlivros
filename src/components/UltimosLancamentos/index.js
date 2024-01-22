import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import {Titulo} from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../images/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: lightblue;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    background-color: lightblue;    
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#000' tamanhoFonte='36px' alinhamento='center'>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt='livro'/>
                ) ) }
            </NovosLivrosContainer>

            <CardRecomenda 
            
                    titulo='Talvez você se interesse por...'
                    subtitulo='Angular 11'
                    descricao='Contruindo uma web app'
                    img={imagemLivro}
            
            />

           
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos



