import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Router from './routes'
import LoadingContext from './contexts/loading.context';

function App() {
  return (
    <BrowserRouter>
      <LoadingContext>
      <Router></Router>
      </LoadingContext>
    </BrowserRouter>
  );
}

export default App;
