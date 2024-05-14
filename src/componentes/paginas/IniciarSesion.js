import React from 'react';
import '../hojasEstilos/login.css';
import '../hojasEstilos/botones.css';
import '../hojasEstilos/general.css';

import { useNavigate } from 'react-router-dom'

const IniciarSesion = () => {

    const navigate = useNavigate()
    
    function goToAdmin(){
        navigate("/menuAdmin")
    }

  return (
    <div id='iniciarSesion'> 
       <div className="login">  
                    <form>
                        <div id="tituloIniciarSesion">
                            <p id='etiqueta1'>Iniciar Sesión</p>
                        </div>


                        <div id='recuadroFormulario'>
                            <div className="email">
                            {/*    <label for="email">Email: </label>*/}
                                <input type ="email" id="email" name="email" placeholder='Escribe tu email' required autofocus />
                            </div>
                                
                            <div className="contraseña">
                                {/* <label for="pass">Contraseña: </label>*/}
                                <input type ="password" id="pass" name="pass" placeholder='Escribe tu contraseña' required />
                            </div>  

                            <div className="boton">
                                <button id='botonSesion' onClick={goToAdmin}>Ingresar</button>
                            </div>
                        </div>

                    </form>  
            </div>
    </div>
  )
}

export default IniciarSesion


