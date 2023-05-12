import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import ItenListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <ItenListContainer greeting={"Sitio en construccion"} saludo={"Nos vemos muy pronto"}/>
      <Footer/>
    </div>
  );
}

export default App;
