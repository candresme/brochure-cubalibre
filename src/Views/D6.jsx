import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import fondo from '../img/D6-01.png.webp';
import titulo from '../img/D6-03.png.webp';
import info1 from '../img/D6-02.png.webp';
import info2 from '../img/D6-04.png.webp';
import info3 from '../img/D6-05.png.webp';

const D6 = () => {
  return (
    <div className="container-fluid text-center">
        
        <div className="row p-4 align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>

                <div className='row align-items-center justify-content-center'>
                    <div className="col-md-4 col-sm-12 text-center">
                        <img className="m-0 p-0 titulo-d6" src={titulo} alt="Imagen Cuba Libre" width='100%'/>
                    </div>
                </div>

                <div className='row align-items-center justify-content-center'>
                    
                    <div className="col-md col-sm-12 text-center fram">
                        <img className="m-0 p-0 info info1" src={info1} alt="Imagen Cuba Libre" width='100%'/>
                    </div>

                    <div className="col-md col-sm-12 text-center fram">
                        <img className="m-0 p-0 info info2" src={info2} alt="Imagen Cuba Libre" width='100%'/>
                    </div>

                    <div className="col-md col-sm-12 text-center fram">
                        <img className="m-0 p-0 info info3" src={info3} alt="Imagen Cuba Libre" width='100%'/>
                    </div>
                </div>

            </Bounce>
        </div>
        

    </div>
  )
}

export default D6