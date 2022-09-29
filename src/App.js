import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Accordion from './components/Accordion/Accordion';
import { accordionData } from "./components/Accordion/data";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <ToastContainer />

      <ul className="accordion">
        <h2>Frequently Asked Questions</h2>
        {accordionData.map(({ heading, content }) => (
          <Accordion heading={heading} content={content} />
        ))}
      </ul>

    </div>
  );
}

export default App;
