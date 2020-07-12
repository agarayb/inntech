import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends React.Component{
    render(){
        return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <a className="navbar-brand ml-5" href="#">Aula<span>Net</span></a>
            
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5 ">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cursos">Cursos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#comentarios">Comentarios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#planes">Planes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contactanos</a>
              </li>
            </ul>
          </div>
            
        </nav>
            
        );
    }
    
}

export default Menu;