import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Formulario extends React.Component{
    render(){
        return(
<div className="container" id="contacto">
<div className="row my-3">
    <div className="col">
    <input type="text" className="form-control" placeholder="Nombre y Apellido"/>
    </div>
</div>
<div className="row">
    <div className="col">
    <input type="text" className="form-control" placeholder="Email"/>
    </div>
    <div className="col">
    <input type="text" className="form-control" placeholder="Numero Telefonico"/>
    </div>
</div>
<textarea className="form-control my-3" placeholder="Dejanos tu mensaje..." rows="5"/>
<center><button className="btn btn-primary">Enviar</button></center>
</div>
            );
    }
    
}

export default Formulario;