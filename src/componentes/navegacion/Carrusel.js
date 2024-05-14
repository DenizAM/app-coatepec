import React from 'react';
import img7 from '../../imagenes/img7.jpg';
import img6 from '../../imagenes/img6.jpeg';
import img4 from '../../imagenes/img4.jpeg';
import img3 from '../../imagenes/img3.jpeg';
import img2 from '../../imagenes/img2.jpg';
import img1 from '../../imagenes/img1.jpeg';

import '../hojasEstilos/imagenes.css';
import '../hojasEstilos/general.css';



const Carrusel = () => {
  return (
    <div id='carrusel'>
      <div id="encabezadoPrincipal">
      <div id='tituloPrincipal'>Bienvenido al Sitio Oficial de Avisos de Coatepec</div>
      </div>

    <div id="carouselExampleCaptions" class="carousel slide">


  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>


  <div className="carousel-inner">


    <div className="carousel-item active">
      <img id='carrusel' src={img7} className="d-block w-1000" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Los Ahuehuetes</h5>
        <p>Son árboles nativos de México. Estos crecen a los lados de los ríos, arroyos y lagunas. Los ahuehuetes necesitan mucha agua para desarrollarse...</p>
      </div>
    </div>


    <div className="carousel-item">
      <img id='carrusel' src={img2} className="d-block w-1000" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Presidencia Junta Auxiliar de Santa Ana Coatepec</h5>
        <p>Francisco Javier Mina #1, Coatepec, Puebla, 73410.</p>
      </div>
    </div>


    <div className="carousel-item">
      <img id='carrusel' src={img1} className="d-block w-1000" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Santa Ana Coatepec</h5>
        <p>Coatepec es un término de origen náhuatl que significa "en el cerro de las serpientes". Se divide en "Coate", derivado de "cóatl" que significa serpiente, "tepe", derivado de "tépetl" que significa cerro o montaña y "c", un locativo que denota un lugar.</p>
      </div>
    </div>
  </div>



  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carrusel
