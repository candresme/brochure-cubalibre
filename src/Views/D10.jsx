import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import imagen from '../img/D10-13.png.webp';
import circulo from '../img/D10-14.png.webp';
import grafico from '../img/D10-15.png.webp';
import fondo from '../img/D10-16.png';
import titulo from '../img/D10--16.png';

const D10 = () => {
  return (
    <div className="container-fluid text-center m-0 p-0">
        <div className="row align-items-center justify-content-center m-0 p-0" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>

                <div className="col-md-5 col-sm m-0 p-0 align-self-end text-start col1-d10">
                    <img className="m-0 p-0" src={imagen} alt="Imagen de Cuba Libre" width='90%'/>
                </div>

                <div className="col-md col-sm m-0 p-0 align-self-start">
                    <div className='row justify-content-center align-items-center m-0 p-0'>

                        <div className='col-md-6 col-sm text-center m-0 p-0 align-self-center'>
                            <img className="m-0 p-0 titulo-d10" src={titulo} alt="Imagen de Cuba Libre" width='100%'/>
                        </div>

                        <div className='col-12 '>
                            <div className='row justify-content-md-evenly justify-content-sm-center align-items-center m-5 col2-d10'>
                                
                                <div className='col'>
                                    <p className='text-md-end text-sm-center fs-4'>33% Hombres</p>
                                </div>

                                <div className='col text-center'>
                                    <img className="m-0 p-0" src={circulo} alt="Imagen de Cuba Libre" width='100vh'/>
                                </div>
                                
                                <div className='col'>
                                    <p className='text-md-start text-sm-center fs-4'>67% Mujeres</p>
                                </div>

                            </div>
                        </div>

                        <div className='col-12 col3-d10 m-0 p-0'>
                            <div className='row justify-content-center align-items-center text-center m-0 p-0'>
                                
                                <div className='col-6 text-md-end text-sm-center'>
                                    <img className="grafico-d10" src={grafico} alt="Imagen de Cuba Libre" width='60%'/>
                                </div>
                                <div className='col-6 pt-2'>
                                    <p className='fs-4 texto-d10'>25 - 34 años</p>
                                    <p className='fs-4 texto-d10'>35 - 44 años</p>
                                    <p className='fs-4 texto-d10'>55 - 64 años</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </Bounce>      
        </div>
    </div>
  )
}

export default D10
