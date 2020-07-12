import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import Cursos from './components/cursos';
import Porque from './components/porque';
import Empresas from './components/empresas';
import Testimonios from './components/testimonios';
import Plan from './components/plan';
import Formulario from './components/formulario';
import Menu from './components/menu';


function App() {
  return (
    <div className="App">
      
      <div className="container-fluid">
        <Menu/>
      </div>
            
      <div className="App-header">
        <h1 className="display-1"><span>Aula</span>Net</h1>
        <p className="text-center mx-5">Conviertete en un experto en el aerea de tu interes <strong>¡SIN SALIR DE CASA!</strong></p>
        <a className="btn btn-primary my-5" href="#">¡Inscribete hoy!</a>
      </div>
      
      <div className="container my-5">
      <h1 className="text-center">Cursos Disponibles</h1> <hr></hr>
      <Cursos/>
      </div>
      
      <div className="container my-5">
      <h1>¿Por que AulaNet?</h1> <hr></hr>
      <Porque/>
      </div>
      
      <div className="container my-5">
      <h1>Empresas</h1> <hr></hr>
      <Empresas/>
      </div>
      
      <div className="container my-5">
      <h1 className="pt-5">Algunos estudiantes</h1> <hr></hr>
      <Testimonios/>
      </div>
      
      <div className="container my-5">
      <h1>Plan de Precios</h1> <hr></hr>
      <Plan/>
      </div>
      
      <div className="container my-5">
      <h1>Contactanos</h1> <hr></hr>
      <p>Si tienes alguna duda no dudes en escribirnos, nuestro personal se pondra en contacto contigo.</p>
      <Formulario/>
      </div>
      
      <div className="App-footer container-fluid">
      <p className="text-center text-white">AulaNet2020<br/>info@aulanet.com</p>
      </div>
      
    </div>
  );
}

export default App;
