import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './view/Register';
import Header from './view/Layout';
import Introduce from './view/Introduce';
import Home from './view/Home';
import AppRouter from './core/navs/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
