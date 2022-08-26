import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import imagen from '../img/D12-15.png.webp';
import fondo from '../img/D12-13.png.webp';
import titulo from '../img/D12-14.png.webp';

const D12 = () => {
  return (
    <div className="container-fluid text-center m-0 p-0">
        <div className="row align-items-center justify-content-center m-0 p-0" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>
                <div className="col m-0 p-0 position-relative">   

                    <img className="m-0 p-0 titulo-z position-absolute" src={titulo} alt="Imagen de Cuba Libre"/>
                    <img className="m-0 p-0 imagen-z" src={imagen} alt="Imagen de Cuba Libre" width='100%'/>
                    
                    <div className="row m-0 p-0 position-absolute iconos">
                        <div className='col'>
                            <a href="https://www.youtube.com/CubaLibreSonBand" rel="noreferrer" target="_blank"> 
                                <i class="fa-brands icono fa-youtube p-3"></i>
                            </a>

                            <a href="https://www.facebook.com/CubaLibreSonBand" rel="noreferrer"target="_blank"> 
                                <i class="fa-brands icono fa-facebook p-3"></i>
                            </a>

                            <a href="https://www.twitter.com/cubalibresonban" rel="noreferrer" target="_blank">
                                <i class="fa-brands icono fa-twitter p-3"></i>
                            </a>

                            <a href="https://www.instagram.com/cubalibresonband" rel="noreferrer"target="_blank">
                                <i class="fa-brands icono fa-instagram p-3"></i>
                            </a>

                            <a href="https://www.tiktok.com/@cubalibresonband?is_from_webapp=1&sender_device=pc" rel="noreferrer" target="_blank">
                                <i class="fa-brands icono fa-tiktok p-3"></i>
                            </a>

                        </div>                        
                    </div>   

                </div>
            </Bounce>
        </div>
    </div>
  )
}

export default D12