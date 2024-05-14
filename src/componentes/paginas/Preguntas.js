import React from 'react';
import '../hojasEstilos/botones.css';
import '../hojasEstilos/general.css';
import '../hojasEstilos/preguntas.css'
import gift1 from '../../gift/gift1.gif'
import gift2 from '../../gift/gift2.gif'
import gift3 from '../../gift/gift3.gif'
import gift4 from '../../gift/gift4.gif'


import '../hojasEstilos/imagenes.css';
import '../hojasEstilos/general.css';



const Preguntas = () => {
  return (
    <div className='preguntas'>

      <div id="titulo">
        <p id='tituloPreguntas'>Preguntas Frecuentes</p>
      </div>

              <div id="carouselExampleCaptions" class="carousel slide">


                  <div className="carousel-indicators" id='botonAbajo'>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>


                  <div className="carousel-inner">


                    <div className="carousel-item active">
                      <div id='izquierda'>
                        <p id='subtituloPreguntas'>¿Cómo iniciar sesión si soy una autoridad de la comunidad?</p>
                        <p>1. Ingresa al icono de usuario Admin.</p>
                        <p>2. Escribe tu correo y contraseña asignada.</p>
                        <p>3. Da clic en INGRESAR.</p>
                      </div>

                      <div id='derecha'>
                        <img id='carrusel' src={gift1} className="d-block w-1000" alt="..."/>
                      </div>
                    </div>




                    <div className="carousel-item ">
                      <div id='izquierda'>
                        <p id='subtituloPreguntas'>¿Cómo enviar mensajes personalizados si soy una autoridad de la comunidad?</p> 
                        <p>1. Ingresa al icono de usuario Admin.</p>
                        <p>2. Escribe tu correo y contraseña asignada.</p>
                        <p>3. Da clic en INGRESAR.</p>
                        <p>4. En el menú selecciona ENVIAR MENSAJES PERSONALIZADOS.</p>
                        <p>5. Agrega los datos de quien recibirá el mensaje.</p>
                        <p>6. Escribe el mensaje</p>
                        <p>7. Envía el mensaje</p>
                        </div>

                      <div id='derecha'>
                        <img id='carrusel' src={gift2} className="d-block w-1000" alt="..."/>
                      </div>
                    </div>




                    <div className="carousel-item ">
                      <div id='izquierda'>
                        <p id='subtituloPreguntas'>¿Cómo envío una sugerencia a las autoridades de la comunidad o comités comunitarios?</p>
                        <p>1. Dirígete a la barra de menú.</p>
                        <p>2. Da clic sobre SUGERENCIAS.</p>
                        <p>3. Escribe tu sugerencia.</p>
                        <p>4. Envíala.</p>
                      </div>

                      <div id='derecha'>
                        <img id='carrusel' src={gift3} className="d-block w-1000" alt="..."/>
                      </div>
                    </div>




                    <div className="carousel-item ">
                      <div id='izquierda'>
                      <p id='subtituloPreguntas'>¿Cómo puedo ver los avisos de las autoridades de la comunidad o comités comunitarios?</p>
                        <p>1. Dirígete a la barra de menú.</p>
                        <p>2. Da clic sobre AVISOS.</p>
                        <p>3. Informate sobre los últimos avisos publicados.</p>
                      </div>

                      <div id='derecha'>
                        <img id='carrusel' src={gift4} className="d-block w-1000" alt="..."/>
                      </div>
                    </div>



                  </div>



                  <button id='botonLado' className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button id='botonLado' className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
          </div>
    </div>
  )
}

export default Preguntas
