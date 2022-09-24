import { BrowserRouter } from 'react-router-dom';
import './normalize.css'
import './App.scss'
import { Header } from './Components/Header/Header';
import { Wrapper } from './Components/Wrapper/Wrapper';
import { Main } from './Components/Main/Main';
import { ObjectRegistry } from './Components/ObjectRegistry/ObjectRegistry';
import { Footer } from './Components/Footer/Footer';
import { WrapperPaginationCards } from './Components/WrapperPaginationCards/WrapperPaginationCards';

function App() {

  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Main>
        <ObjectRegistry />
        <WrapperPaginationCards />
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
