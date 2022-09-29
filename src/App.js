import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <ToastContainer />
    </div>
  );
}

export default App;
