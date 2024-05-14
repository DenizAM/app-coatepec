import React from 'react';
import '../hojasEstilos/botones.css';
import '../hojasEstilos/general.css';
import '../hojasEstilos/sugerencias.css'

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Sugerencias = () => {

    function handleClick() {
        alert('¡Se ha enviado con éxito el mensaje!' + ' No te preocupes esta sugerencia es totalmente anónima.');
      }


  return (
    <div className='enviarSugerencia'>

            <div id="titulo">
                <p id='tituloSugerencia'>Sugerencias</p>
            </div>

      

        <div id='contenidoSugerencia'>
            <div id='mensaje'>
                <textarea name="postContent" rows={10} cols={100} />
            </div>

            <div className="botonEnviar">
                
                <button id='botonEnviar' onClick={handleClick}> Enviar Sugerencia </button>
            </div>

        </div>

    </div>
  )
}

export default Sugerencias
