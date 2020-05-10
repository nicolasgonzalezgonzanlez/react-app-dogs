import React from 'react';
import Footer from './components/Footer';
import NavBar from './containers/Nabvar/NavBar';
import Routes from './routes';
import './css/body.css'
/*
  importo los componentes que van a ser utilizados en toda la app 
  y en el mismo nivel pongo las rutas que van a ser llamadas
*/
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;