import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import fondo from '../img/D4-01.png.webp';
import foto from '../img/D4-03.png.webp';
import titulo from '../img/D4-02.png.webp';
import album from '../img/1000x1000bb.webp.webp';

const D4 = () => {
  return (     
      <div className="container-fluid text-center">        
        <div className="row p-0 align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
          <Bounce left cascade>

            <div className="col-sm-12 col-md p-3 m-0" >

              <div className="row m-md-4 titulo-d4 align-items-center justify-content-sm-center justify-content-md-start text-start"> 
                <div className='col-sm-12 col-md-6' >
                  <img className="m-0 p-0" src={titulo} alt="" width="100%" />
                </div>
              </div>

              <div className="row m-md-1 m-sm-3 align-items-center justify-content-center">              
                <div className='col-sm-12 col-md album-d4'>
                  <img className="m-0 p-0 " src={album} alt="Imagen de album de Cuba Libre" width='100%'/>
                </div>

                <div className='col-sm-12 col-md'>
                  <p className="fs-5">
                    De manera independiente Cuba Libre lanza en el 2016 su primer álbum “Son Ta Duro” un trabajo hecho en Cali con todos los sabores melódicos de la región del Valle del Cauca. <br/><br/>

                    El nombre del disco refleja todo su contenido, un viaje “Gastro musical” por los sonidos de la región pacifica en donde instrumentos como el violín mandan la parada en este trabajo cargado de son, pachanga y salsa.
                  </p>
                </div>
              </div>

            </div>
    
            <div className="col-sm-12 col-md p-0 m-0 align-self-end" >
              <div className="d-flex flex-row-reverse">
                <img className="m-0 p-0 text-end" src={foto} alt="Imagen de conguero de Cuba Libre" width='80%'/>
              </div>   
            </div>

          </Bounce>
        </div>        
      </div>
  )
}

export default D4