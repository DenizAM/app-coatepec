import React from 'react'
import '../hojasEstilos/login.css'

const IniciarSesion = () => {
  return (
    <div>
       <div className="login">  
                    <form>
                        <div className="mensaje">
                            <p id='tituloIniciarSesion'>Iniciar Sesión</p>
                        </div>


                        <div id='recuadroComponer'>
                            <div className="email">
                                <label for="email">Email</label>
                                <input type ="email" id="email" name="email" required autofocus />
                            </div>
                                
                            <div className="contraseña">
                                <label for="pass">Contraseña</label>
                                <input type ="password" id="pass" name="pass" required />
                            </div>  

                            <div className="enviar">
                                <button type="submit">Login</button>
                            </div>
                        </div>

                    </form>  
            </div>
    </div>
  )
}

export default IniciarSesion


