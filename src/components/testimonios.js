import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Testimonios extends React.Component{
    render(){
        return(
<div className="container" id="comentarios">
            
<div className="row my-3">            
    <div className="col-xl-3">
        <img className="imgts img-fluid rounded-circle" src="https://shopcv.com/wp-content/uploads/2018/12/mejor-foto-curriculum.jpg"/>
    </div>
    <div className="col-xl-9">
        <h5 className="mt-5">Carmen Rodriguez F.</h5>
        <p className="text-justify">“Gracias a AulaNet, ahora puedo realizar aplicaciones potentes, que resuelven las necesidades de mis clientes, puedo ser mi propia jefa, manejar mi propio tiempo y desarrollar el proyecto empresarial que siempre había soñado. Profesores calificados para dar las clases viruales las 24 horas del dia, ¡Lo recomiendo!</p>
    </div>            
</div>
            
<div className="row my-3">            
    <div className="col-xl-3">
        <img className="imgts img-fluid rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaIcAx5LGPlvo0Ha_ybb1qCbuAKVYJsZhowg&usqp=CAU"/>
    </div>
    <div className="col-xl-9">
        <h5 className="mt-5">Manuel Manrique R.</h5>
        <p className="text-justify">“Lo que más me gustó de AulaNet es que yo manejo mi propio tiempo; puedo estudiar en el momento que quiera, el tiempo que quiera y cuando tengo una duda me la resuelven muy rápido. AulaNet cumplió con todas mis expectativas. Realmente me gustó mucho el material que encontré, excelente calidad, un contenido muy bien estructurado y actualizado”.</p>
    </div>            
</div>
            
</div>
            );
    }
    
}

export default Testimonios;
