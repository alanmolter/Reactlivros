
import Header from './components/Header';
import styled from 'styled-components';
import Pesquisar from './components/Pesquisa/pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';

const AppContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,blue,lightblue);

`;

function App() {
  return (
    <AppContainer>
      
        <Header/>
        <Pesquisar></Pesquisar>
        <UltimosLancamentos/>

    </AppContainer>
  );
}

export default App;
