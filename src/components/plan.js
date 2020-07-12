import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Plan extends React.Component{
    render(){
        return(
<div className="container" id="planes">
<div className="row">
    <div className="col-md-6 col-lg-4 col-xl-4">
        <h1 className="text-center alert-primary">Basic</h1>
        <h1 className="pb text-center">20$</h1><hr/>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit sem potenti eros, non accumsan etiam ridiculus at nullam in dui ultrices facilisis, suscipit erat hac fringilla cursus risus sed euismod dapibus.</p>
        <center><button className="btn btn-outline-primary">Comprar</button></center>
    </div>
    <div className="col-md-6 col-lg-4 col-xl-4">
        <h1 className="text-center alert-warning">Premium</h1>
        <h1 className="pp text-center">35$</h1><hr/>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit sem potenti eros, non accumsan etiam ridiculus at nullam in dui ultrices facilisis, suscipit erat hac fringilla cursus risus sed euismod dapibus.</p>
        <center><button className="btn btn-outline-warning">Comprar</button></center>
    </div>
    <div className="col-md-6 col-lg-4 col-xl-4">
        <h1 className="text-center alert-danger">Business</h1>
        <h1 className="pbs text-center">50$</h1><hr/>
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit sem potenti eros, non accumsan etiam ridiculus at nullam in dui ultrices facilisis, suscipit erat hac fringilla cursus risus sed euismod dapibus.</p>
        <center><button className="btn btn-outline-danger">Comprar</button></center>
    </div>
</div>
</div>            
            );
    }
    
}

export default Plan;