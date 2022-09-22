import { BrowserRouter } from 'react-router-dom';
import './normalize.css'
import './App.scss'
import { Header } from './Components/Header/Header';
import { Wrapper } from './Components/Wrapper/Wrapper';
import { Main } from './Components/Main/Main';
import { ObjectRegistry } from './Components/ObjectRegistry/ObjectRegistry';
import { AdvancedSearch } from './Components/AdvancedSearch/AdvancedSearch';
import { CountCards } from './Components/CountCards/CountCards';
import { Cards } from './Components/Cards/Cards';

function App() {

  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Main>
        <ObjectRegistry />
        <AdvancedSearch />
        <CountCards />
        <Cards />
      </Main>
    </Wrapper>
  );
}

export default App;
