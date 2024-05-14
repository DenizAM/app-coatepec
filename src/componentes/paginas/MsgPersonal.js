import React from 'react';
import '../hojasEstilos/botones.css';
import '../hojasEstilos/general.css';
import '../hojasEstilos/msgPersonal.css';
import regresa from '../../imagenes/regresa.png'
import {Link} from 'react-router-dom';

function MsgPersonal() {
  return (
    <div id='msgPersonal'>

        <div id='encabezado'>
            <div id='imagen'>
                <Link className="imagenLink" to='/menuAdmin'>
                    <img id="regresar" src={regresa} title="menuAdmin"/>
                </Link>
            </div>

            <div id="tituloMsgPersonal">
                <div id='tituloPersonal'>Enviar Mensajes Personalizados</div>
            </div>
        </div>

      
        
        <div id='izquierda'>
            <div id='correo'>
                <label for="email">Email: </label>
                <input type ="email" id="email" name="email" placeholder='Escribe tu email' required autofocus />
            </div>
                            
            <div id='nombre'>
                <label for="name">Nombre Completo:</label>
                <input type="text" id="name" name="name" placeholder='Nombre del contacto' required minlength="1" maxlength="70" />
            </div>

            <div id='asunto'>
                <label for="name">Asunto:</label>
                <input type="text" id="label" name="name" placeholder='Escribe el asunto' required minlength="1" maxlength="70"/>
            </div>

        </div>

        <div id='derecha'>
            <div id='mensaje'>
                <textarea name="postContent" rows={10} cols={100} />
            </div>

            <div className="botonEnviar">
                <button id='botonEnviar'>Enviar</button>
            </div>
        </div>

    </div>

  )
}

export default MsgPersonal
