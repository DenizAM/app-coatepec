import React from 'react'
import '../hojasEstilos/userAvisos.css'
import '../hojasEstilos/general.css';
import '../hojasEstilos/imagenes.css';
import msgUrgente from '../../imagenes/msgUrgente.png'
import notificacion from '../../imagenes/notificacion.png'
import proximaJunta from '../../imagenes/proximaJunta.png'



const Avisos = () => {
  return (
    <div id='avisos'>      
          <div id='userAvisos'>
            <div id='titulo'>Avisos</div>



                <div id='mensajesUrgentes'>
                  <div id='subtitulo'> Mensajes Urgentes <img id='imgAvisos' src={msgUrgente}/> </div>
                    <div id='avisosMensajesUrgentes'> 
                                    <table id='tablaImpresion'>
                                            <tr id='fila'>
                                                <td id='columna'>1</td>
                                                <td id='columna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum ligula vel libero convallis rutrum. Duis ac rutrum ligula, sed ultricies nulla. Ut fermentum nec purus sodales tincidunt. </td>
                                            </tr>
                                            <tr id='fila'>
                                                <td id='columna'>20-02-2024</td>
                                            </tr>

                                            
                                            <tr id='fila'>
                                                <td id='columna'>2</td>
                                                <td id='columna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum ligula vel libero convallis rutrum. Duis ac rutrum ligula, sed ultricies nulla. Ut fermentum nec purus sodales tincidunt. </td>
                                            </tr>
                                            <tr id='fila'>
                                                <td id='columna'>12-03-2024</td>
                                            </tr>
                                    </table> 
                      </div>
                </div>     


                
                <div id='proximasJuntas'>
                <div id='subtitulo'> Próximas Juntas <img id='imgAvisos' src={proximaJunta}/></div>
                    <div id='avisosMensajesUrgentes'> 
                                    <table id='tablaImpresion'>
                                            <tr id='fila'>
                                                <td id='columna'>1</td>
                                                <td id='columna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum ligula vel libero convallis rutrum. Duis ac rutrum ligula, sed ultricies nulla. Ut fermentum nec purus sodales tincidunt. </td>
                                            </tr>
                                            <tr id='fila'>
                                                <td id='columna'>20-02-2024</td>
                                            </tr>

                                            
                                            <tr id='fila'>
                                                <td id='columna'>2</td>
                                                <td id='columna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum ligula vel libero convallis rutrum. Duis ac rutrum ligula, sed ultricies nulla. Ut fermentum nec purus sodales tincidunt. </td>
                                            </tr>
                                            <tr id='fila'>
                                                <td id='columna'>12-03-2024</td>
                                            </tr>
                                    </table> 
                      </div>
                </div>    


                
                <div id='notificaciones'>
                <div id='subtitulo'> Notificaciones <img id='imgAvisos' src={notificacion}/></div>
                    <div id='avisosMensajesUrgentes'> 
                                    <table id='tablaImpresion'>
                                            <tr id='fila'>
                                                <td id='columna'>1</td>
                                                <td id='columna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum ligula vel libero convallis rutrum. Duis ac rutrum ligula, sed ultricies nulla. Ut fermentum nec purus sodales tincidunt. </td>
                                            </tr>
                                            <tr id='fila'>
                                                <td id='columna'>20-02-2024</td>
                                            </tr>

                                            
                                            <tr id='fila'>
                                                <td id='columna'>2</td>
                                                <td id='columna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum ligula vel libero convallis rutrum. Duis ac rutrum ligula, sed ultricies nulla. Ut fermentum nec purus sodales tincidunt. </td>
                                            </tr>
                                            <tr id='fila'>
                                                <td id='columna'>12-03-2024</td>
                                            </tr>
                                    </table> 
                      </div>
                </div>   


          </div>
    </div>
  )
}

export default Avisos
