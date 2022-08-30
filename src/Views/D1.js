import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//Import components
import { Logo } from '../Components/Logo';
import TresFondoAmarillo from '../Components/TresFondoAmarillo';

//import images
import fondo from '../img/D1-01.png.webp'

export const D1 = () => {
  return (
    <div className="container-fluid text-center">
             
          <div className="row pt-md-2 pt-sm-5 pb-0 align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>
              
              <div className="col-sm-8 col-md-4 mb-md-5 " >
                <Logo />
              </div>

              <div className="col-sm-12 col-md-6 align-self-end" >
                <TresFondoAmarillo />
              </div>

            </Bounce>
          </div>        
    </div>
  )
}
