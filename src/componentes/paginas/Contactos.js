import React from 'react'
import '../hojasEstilos/botones.css'
import '../hojasEstilos/general.css';
import '../hojasEstilos/contactos.css';
import {Link} from 'react-router-dom';
import mujer from '../../imagenes/mujer.png';
import hombre from '../../imagenes/hombre.png';

const Contactos = () => {
  return (
    <div id='contactos'>
         
    <div id="titulo">
        <p id='etiquetaTitulo'>Contactos</p>
    </div>

      
        <div id='tablaContactos'>

        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Foto</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo electrónico</th>
              <th scope="col">Número telefónico</th>
              <th scope="col">Comité perteneciente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><img id="mujer" src={mujer} title="imagenContactos"/></th>
              <td>Rosa Hernández Morales</td>
              <td>rositahdz90@gmail.com</td>
              <td>2231357693</td>
              <td>Agua Potable [Presidenta]</td>
            </tr>
            <tr>
              <th scope="row"><img id="hombre" src={hombre} title="imagenContactos"/></th>
              <td>Oscar Flores Barojas</td>
              <td>osflo2022@gmail.com</td>
              <td>2228372037</td>
              <td>Drenaje [Tesorero]</td>
            </tr>
            <tr>
              <th scope="row"><img id="hombre" src={hombre} title="imagenContactos"/></th>
              <td>Pedro Campos Morin</td>
              <td>camposmor80@outlook.com</td>
              <td>2273934098</td>
              <td>Clínica de Salud [Secretario]</td>
            </tr>
            <tr>
              <th scope="row"><img id="mujer" src={mujer} title="imagenContactos"/></th>
              <td>Evelyn Dorado Sierra</td>
              <td>eveds@yahoo.com</td>
              <td>2234785762</td>
              <td>Agua Potable [Secretaria]</td>
            </tr>
          </tbody>
        </table>

        </div>
    </div>
  )
}

export default Contactos
