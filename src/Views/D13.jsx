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
                
                <a className='col-sm-5 col-md-5 p-1 rounded-3 boton' href="https://firebasestorage.googleapis.com/v0/b/brochure-cubalibre.appspot.com/o/Copy%20of%20Cuba%20Libre.pdf?alt=media&token=3c09f772-3a2b-4852-a6bb-2e5af29e125e" rel="noreferrer" target="_blank">
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
                <a className='col-sm-5 col-md-5 p-1 rounded-3 boton' href="https://drive.google.com/drive/u/3/folders/1DS71XC3UZ3eVTiw8I_5WL6N1rnTYkzSK" rel="noreferrer" target="_blank">
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