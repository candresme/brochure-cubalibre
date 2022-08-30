import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import componetes
import {Logo} from '../Components/Logo';

//import images
import fondo from '../img/D1-01.png.webp'

/* 
 */

const D13 = () => {
  return (
    <div className="container-fluid text-center">
        <div className="row p-4 align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
          <Bounce left cascade>

            <div className="col-md-6 col-sm-12 text-center col1-d13">

              <h1 className="text-center m-3 p-3" style={{color:'#EF8B02'}}>Zona de descargas</h1>

              <div className='row align-items-center justify-content-center mt-2'>
                
                <a className='col-sm-5 col-md-5 p-1 rounded-3 boton' href="https://firebasestorage.googleapis.com/v0/b/brochure-cubalibre.appspot.com/o/Cuba%20Libre%20final.pdf?alt=media&token=9511d9fe-9be4-459b-983e-c177a4399dcb" rel="noreferrer" target="_blank">
                  <div>
                      <p className='text-center fs-5'>Brochure en PDF</p>
                  </div>
                </a>

              </div>

              <div className='row align-items-center justify-content-center mt-2'>              
                <a className='col-sm-5 col-md-5 p-1 rounded-3 boton' href="https://firebasestorage.googleapis.com/v0/b/brochure-cubalibre.appspot.com/o/RIDER%20CUBA%20LIBRE%20SON%20BAND%202022.pdf?alt=media&token=a4e0752c-708c-446d-80b8-ed95c9f07bd4" rel="noreferrer" target="_blank">
                  <div >
                      <p className='text-center fs-4'>Rider técnico</p>
                  </div>
                </a>
              </div>

              <div className='row align-items-center justify-content-center mt-2'>              
                <a className='col-sm-5 col-md-5 p-1 rounded-3 boton' href="https://firebasestorage.googleapis.com/v0/b/brochure-cubalibre.appspot.com/o/Logo%20Cuba%20Libre.png?alt=media&token=1c818c44-3700-4fd0-8a64-50ab10a515b2" rel="noreferrer" target="_blank">
                  <div >
                      <p className='text-center fs-4'>Logo en png</p>
                  </div>
                </a>
              </div>

              <div className='row align-items-center justify-content-center mt-2'>              
                <a className='col-sm-5 col-md-5 p-1 rounded-3 boton' href="https://pornhub.com" rel="noreferrer" target="_blank">
                  <div >
                      <p className='text-center fs-4'>Fotos</p>
                  </div>
                </a>
              </div>

            </div>

            <div className="col-md-4 col-sm-12 col2-d13">
              <Logo />
            </div>

          </Bounce>        
        </div>
    </div>
  )
}

export default D13