
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { animal } from './data.js';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main animals={animal}/>
      <Footer />
    </div>
  );
}

export default App;
