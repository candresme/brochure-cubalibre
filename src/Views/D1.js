import React from 'react';
import Bounce from 'react-reveal/Bounce';

//Import components
import { Logo } from '../Components/Logo';
import TresFondoAmarillo from '../Components/TresFondoAmarillo';

//import images
import fondo from '../img/D1-01.png.webp'

export const D1 = () => {
  return (
    <div className="container-fluid">
        <Bounce left cascade>
            <div className="row p-5 pb-0 align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
                
                    <div className="col-sm-8 col-md-4 mb-md-5 " >
                        <Logo />
                    </div>

                    <div className="col-sm-12 col-md-6 align-self-end" >
                        <TresFondoAmarillo />
                    </div>                

            </div>
        </Bounce>
    </div>
  )
}
