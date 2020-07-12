import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cursos extends React.Component{
    render(){
        return(
        <div className="row" id="cursos">
            
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="card my-3">
            <img className="img-fluid" src="https://revo300.academy/wp-content/uploads/2019/12/blur-close-up-code-computer-546819-980x651.jpg" alt=""/>
            <div className="card-body">
            <h5 className="text-center">Programacion Web</h5>
            <p className="text-center">¡Aprender a programar páginas web nunca fue tan fácil!</p>
            <center><a className="btn btn-outline-info" href="Single.js">Ver mas</a></center>
            </div>
        </div>
      </div>
            
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="card my-3">
            <img className="img-fluid" src="https://unitelformacion.com/wp-content/uploads/2019/11/Excel.jpg" alt=""/>
            <div className="card-body">
            <h5 className="text-center">Excel</h5>
            <p className="text-center">Domina el curso de Excel básico, Excel intermedio y Excel avanzado.</p>
            <center><button className="btn btn-outline-info">Ver mas</button></center>
            </div>
        </div>
      </div>
            
            
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="card my-3">
            <img className="img-fluid" src="https://s4.eestatic.com/2017/07/24/actualidad/Actualidad_233740302_129969067_1060x760.jpg" alt=""/>
            <div className="card-body">
            <h5 className="text-center">Photoshop</h5>
            <p className="text-center">Aprender a editar y retocar fotos paso a paso con el programa más conocido!</p>
            <center><button className="btn btn-outline-info">Ver mas</button></center>
            </div>
        </div>
      </div>
            
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="card my-3">
            <img className="img-fluid" src="https://dosideas.com/images/stories/bases-de-datos/cover/der-base-de-datos-en-perspectiva.jpg" alt=""/>
            <div className="card-body">
            <h5 className="text-center">Base de datos</h5>
            <p className="text-center">Aprende desde cero cómo diseñar y utilizar los mejores motores de Bases de Datos.</p>
            <center><button className="btn btn-outline-info">Ver mas</button></center>
            </div>
        </div>
      </div>
            
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="card my-3">
            <img className="img-fluid" src="https://assets.entrepreneur.com/content/3x2/2000/20171117161507-mkt-digital.jpeg" alt=""/>
            <div className="card-body">
            <h5 className="text-center">Marketing Digital</h5>
            <p className="text-center">Tendrás una visión general del mundo digital y de sus herramientas</p>
            <center><button className="btn btn-outline-info">Ver mas</button></center>
            </div>
        </div>
      </div>
            
      <div className="col-md-6 col-lg-4 col-xl-4">
        <div className="card my-3">
            <img className="img-fluid" src="https://developer.android.com/studio/images/debug/layout-inspector_2x.png?hl=es" alt=""/>
            <div className="card-body">
            <h5 className="text-center">Android Studio</h5>
            <p className="text-center">Aprende a programar App para Android y iOS.</p>
            <center><button className="btn btn-outline-info">Ver mas</button></center>
            </div>
        </div>
      </div>
            
      </div>
        );
    }
    
}

export default Cursos;