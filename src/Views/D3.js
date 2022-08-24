import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//Import components
import D3Titulo from '../Components/D3Titulo';
import LineaTiempo from '../Components/LineaTiempo';

//import images
import fondo from '../img/D3-01.png.webp';

export const D3 = () => {
  return (
    <div className="container-fluid text-center">
        <Bounce left cascade>
            <div className="row p-0 pt-5-md align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>

                <div className="col-12 p-0 m-0" >
                    <D3Titulo />
                </div>
    
                <div className="col-12 p-0 m-0 ps-md-5 pb-4" >
                    <LineaTiempo />
                </div>                   
  
            </div>
        </Bounce>
    </div>
  )
}
