import React from 'react'
import '../hojasEstilos/adminAvisos.css'
import '../hojasEstilos/botones.css'
import '../hojasEstilos/general.css';
import regresa from '../../imagenes/regresa.png'
import {Link} from 'react-router-dom';

const AdminAvisos = () => {
  return (
    <div id="adminAvisos">
         <form id='adminAvisosForm'>

                    <div id='encabezado'>
                        <div id='imagen'>
                            <Link className="imagenLink" to='/menuAdmin'>
                                <img id="regresar" src={regresa} title="menuAdmin"/>
                            </Link>
                        </div>

                        <div id="tituloAdminAvisos">
                            <p id='etiquetaTitulo'>Avisos Administrador</p>
                        </div>
                    </div>

                            <div id='recuadroIzquierda'>
                                

                                <div className='divSubtitulos'>
                                    <p id='etiquetaSubitulo'>Publicar nuevo aviso</p>
                                </div>
                                

                                <div className='divIzquierdaArriba'>
                                    <div className='componentesIzquierda1'>
                                        
                                        <div className='textAreaACentro'>
                                            <textarea name="postContent" rows={15} cols={50} />
                                        </div>
                                        
                                        <div className='botonDerecha'>
                                        <button id='botonPublicar'>Publicar Aviso</button>
                                        </div>

                                    </div>    
                                </div>    

                        
                                
                                

                                <div className='divSubtitulos'>
                                <p id='etiquetaSubitulo'>Realizar cambios en los mensajes</p>
                                </div>
                                

                                <div className='componentesIzquierda2'>
                                        <div className='selector'>
                                            <select id='textoSelector' name="EditarMsg">
                                                <option value="1">Mensaje 1</option>
                                                <option value="1">Mensaje 2</option>
                                                <option value="1">Mensaje 3</option>
                                                <option value="1">Mensaje 4</option>
                                                <option value="1">Mensaje 5</option>
                                                <option value="1">Mensaje 6</option>
                                                <option value="1">Mensaje 7</option>
                                            </select>
                                        </div>

                                        <div className='botonesCambios'>
                                            <button id='botonEditar'>Editar Aviso</button>
                                        </div>
                                </div>


                                <div className='componentesIzquierda2'>
                                    <div className='selector'>
                                        <select id='textoSelector' name="EliminarMsg">
                                                <option value="1">Mensaje 1</option>
                                                <option value="1">Mensaje 2</option>
                                                <option value="1">Mensaje 3</option>
                                                <option value="1">Mensaje 4</option>
                                                <option value="1">Mensaje 5</option>
                                                <option value="1">Mensaje 6</option>
                                                <option value="1">Mensaje 7</option>
                                        </select>
                                    </div>
                                    
                                        <div className='botonesCambios'>
                                            <button id='botonEliminar'>Eliminar Aviso</button>
                                        </div>                  
                                </div>

                        </div>



                            <div id='recuadroDerecha'>

                                <div className='divSubtitulos'>
                                    <p id='etiquetaSubitulo'>Avisos publicados</p>
                                </div>
                                <div id='cajaTextoImprimir'>
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

        </form>  
    </div>
  )
}

export default AdminAvisos
