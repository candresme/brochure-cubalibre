import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import imagen from '../img/D11-13.png.webp';
import complemento from '../img/D11-16.png.webp';
import fondo from '../img/D11-14.png.webp';
import titulo from '../img/D11-15.png.webp';

const D11 = () => {
  return (
    <div className="container-fluid text-center m-0 p-0">
        <div className="row align-items-center justify-content-center m-0 p-0" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>

                <div className='col-md col-sm m-0 p-0 align-self-center'>
                    <div className='row m-4 align-items-center justify-content-center div1-d11'>
                        <div className='col-md col-sm'> 
                            <img className="m-0 p-0 titulo-d11" src={titulo} alt="Imagen de Cuba Libre" width='90%'/>
                        </div>
                    </div>

                    <div className='row m-4 p-4 align-items-center justify-content-center div1-d11'>
                        
                        <div className='col'> 
                            <a href="https://open.spotify.com/artist/2nzHWIMmNneVpj9ZJQAQm9?fo=1" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-spotify icono-d11 icono" style={{color: 'white'}}></i>
                            </a>                            
                        </div>
                        
                        <div className='col'> 
                            <a href="https://www.deezer.com/es/artist/12062190" rel="noreferrer" target="_blank">
                                <i class="fa-brands fa-deezer icono-d11 icono" style={{color: 'white'}}></i>
                            </a>                            
                        </div>                        

                        <div className='col'>
                            <a href="https://itunes.apple.com/co/artist/cuba-libre-son-band/1211751891" rel="noreferrer"target="_blank"> 
                                <i class="fa-brands fa-apple icono-d11 icono" style={{color: 'white'}}></i>
                            </a>                            
                        </div>

                        <div className='col'>
                            <a href="https://music.youtube.com/channel/UCwGr4Kf22XSHxW9nIR3WaBg?feature=share" rel="noreferrer"target="_blank">  
                                <i class="fa-brands fa-youtube icono-d11 icono" style={{color: 'white'}}></i>
                            </a>                           
                        </div>
                    </div>

                    <div className='row m-4 align-items-center justify-content-center div2-d11'>
                        <div className='col-md-8 col-sm'> 
                            <img className="m-0 p-0" src={complemento} alt="Imagen de Cuba Libre" width='90%'/>
                        </div>
                    </div>

                </div>

                <div className='col-md-4 col-sm m-0 p-0 align-self-end text-end'>
                    <img className="m-0 p-0" src={imagen} alt="Imagen de Cuba Libre" width='90%'/>
                </div>

            </Bounce>
        </div>
    </div>
  )
}

export default D11