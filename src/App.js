
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { animal } from './data.js';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header name='name'/>
      <Header type='type'/>
      <Main animals={animal}/>
      <Footer sound='says'/>
    </div>
  );
}

export default App;
