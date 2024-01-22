import'../Pesquisa/pesquisar.css';
import { useState } from 'react';
import {livros} from './dadosPesquisa';

function Pesquisar(){

    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

   

return(

    <div className='pesquisar'>
        <h2>Ja sabe por onde começar ?</h2>

        <h3>Encontre seu livro em nossa estante</h3>

        <input className='Input' type="text" placeholder='Escreva sua proxima leitura'
         onBlur={evento => {

                const textoDigitado = evento.target.value;
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
                setLivrosPesquisados(resultadoPesquisa);

         } }></input>


       {livrosPesquisados.map(livro => (
       
       <div className='Resultado'>
            <p>{livro.nome}</p>
            <img alt='livro' src={livro.src}></img>
            <p>{livro.valor}</p>
        </div>

        ) ) };

    </div>



)


}


export default Pesquisar;