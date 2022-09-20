import { BrowserRouter } from 'react-router-dom';
import './normalize.css'
import './App.scss'
import { useGetCards } from './Hooks/useGetData';

function App() {
const { cards } = useGetCards()
console.log(cards);

  return (
    <div>hello</div>
  );
}

export default App;
