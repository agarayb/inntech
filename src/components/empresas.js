import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Empresas extends React.Component{
    render(){
        return(
        <div>
        
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://ferialibrosalud.unam.mx/sitio/2016/assets/img/editoriales/todosLogos.png" alt=""/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://scouts.org.mx/wp-content/uploads/2019/02/logos.png" alt=""/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://masquedigital.com/wp-content/uploads/2016/10/MasQueDigital-los-mensajes-que-se-ocultan-en-los-logos-de-las-grandes-empresas-845x321.png" alt=""/>
                </div>
              </div>
            
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
            
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            
            </div>
            
        </div>
        );
    }
    
}

export default Empresas;