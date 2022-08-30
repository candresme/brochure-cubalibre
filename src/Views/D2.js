import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import fondo from '../img/D2-01.png.webp';

//Import components
import Freddy from '../Components/Freddy';
import { TextoD2 } from '../Components/TextoD2';

export const D2 = () => {
  return (
    <div className="container-fluid">
        
          <div className="row p-0 align-items-center justify-content-between " style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>
              <div className="col-sm-8 col-md-7 align-self-end p-0 m-0" >
                <Freddy />
              </div>

              <div className="col-sm-12 col-md-5 align-self-end p-0 m-0 " >
                  <TextoD2 /> 
              </div>                
            </Bounce>
          </div>
        
    </div>
  )
}
