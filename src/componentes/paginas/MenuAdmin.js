import React from 'react';
import {Link} from 'react-router-dom';
import '../hojasEstilos/login.css';
import '../hojasEstilos/botones.css';
import '../hojasEstilos/general.css';
import '../hojasEstilos/imagenes.css'
import '../hojasEstilos/menuAdmin.css'
import amarillo from '../../imagenes/amarillo.jpg';
import azul from '../../imagenes/azul.jpg';
import { useNavigate } from 'react-router-dom';

function MenuAdmin() {

    const navigate = useNavigate()

    function adminAvisos(){
        navigate("/adminAvisos")
    }
        
    function msgPersonal(){
        navigate("/msgPersonal")
    }
    
  return (
    <div className='menuAdmin'>


        <div className="botonAvisosAdmin">
            <p id='parrafo'>Administración de Avisos</p>

            <Link className="navbar-img" to='/adminAvisos'>
                <img id="azul" src={azul} title="Admin"/>
            </Link>
        </div>


        <div className="botonMsgAdmin">
            <p id='parrafo'>Enviar Mensajes Personalizados</p>
            
            <Link className="navbar-img" to='/msgPersonal'>
                <img id="azul" src={azul} title="Admin"/>
            </Link>
        </div>


    </div>
  )
}

export default MenuAdmin
