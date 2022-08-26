import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import componetes
import {Logo} from '../Components/Logo';

//import images
import fondo from '../img/D1-01.png.webp'

const D13 = () => {
  return (
    <div className="container-fluid text-center">
        <div className="row p-4 align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
          <Bounce left cascade>

            <div className="col-md-6 col-sm-12 text-center col1-d13">
              <div className='row align-items-center justify-content-center'>
                <div className='col-12 text-color-yellow m-2'>
                    <h1 className=''>Descarga nuestro brochure en PDF</h1>
                </div>

                <a className='col-sm-5 col-md-5 p-1 rounded-3 boton' href="https://firebasestorage.googleapis.com/v0/b/brochure-cubalibre.appspot.com/o/Cuba%20Libre%20final.pdf?alt=media&token=9511d9fe-9be4-459b-983e-c177a4399dcb" rel="noreferrer" target="_blank">
                  <div >
                      <p className='text-center fs-4'>Click Aquí</p>
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