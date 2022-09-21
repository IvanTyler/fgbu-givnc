import { BrowserRouter } from 'react-router-dom';
import './normalize.css'
import './App.scss'
import { Header } from './Components/Header/Header';
import { Wrapper } from './Components/Wrapper/Wrapper';
import { Main } from './Components/Main/Main';
import { ObjectRegistry } from './Components/ObjectRegistry/ObjectRegistry';
import { AdvancedSearch } from './Components/AdvancedSearch/AdvancedSearch';

function App() {

  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Main>
        <ObjectRegistry />
        <AdvancedSearch />
      </Main>
    </Wrapper>
  );
}

export default App;
