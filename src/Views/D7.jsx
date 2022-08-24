import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import fondo from '../img/D7-16.png.webp';
import titulo from '../img/D7-15.png.webp';
import location from '../img/D7-14.png.webp';
import imagen from '../img/D7-13.png.webp';

const D7 = () => {
  return ( 
    <Bounce left cascade>
        <div className="container-fluid text-center">
            <div className="row p-0 align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>

                <div className='col-md col-sm-12 order-sm-0 order-md-1'>

                    <div className="row m-0 p-0">
                        <div className="col m-0 p-0">
                            <img className="m-0 p-0" src={titulo} alt="" width='100%'/>
                        </div> 
                    </div>

                    <div className='row m-0 p-0'>
                        <div className="col m-0 p-0">
                            <img className="m-0 p-0" src={imagen} alt="Sebastian de Cuba Libre" width='80%'/>
                        </div>
                    </div> 
                    
                </div>

                <div className='col-md col-sm-12 order-sm-1 order-md-0'>

                </div>

            </div>
        </div>
    </Bounce>
  )
}

export default D7