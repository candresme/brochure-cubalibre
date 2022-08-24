import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import fondo from '../img/D5-01.png.webp';
import imagen from '../img/D5-04.png.webp';
import titulo from '../img/D5-02.png.webp';
import complemento from '../img/D5-03.png.webp';

const D5 = () => {
  return (
    <div className="container-fluid text-center">
        <Bounce left cascade>
            <div className="row p-0 pt-5-md align-items-center justify-content-center" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>

                <div className="col-sm-12 col-md-5 p-0 m-0" >
                    <img className="m-0 p-0" src={imagen} alt="Imagen integrantes de Cuba Libre" width='100%'/>
                </div>
    

                <div className="col-sm-12 col-md p-0 m-0 " >
                    
                    <div className='row p-md-5'>
                        <div className="col">
                            <img className="m-0 w-75" src={titulo} alt="" width='40%' />
                        </div>
                    </div>

                    <div className='row p-4'>
                        <div className="col-md col-sm-12 m-1">
                            <iframe src="https://open.spotify.com/embed/track/6m6KUejBfBNVt86Jrk2MDY?utm_source=generator" width="300" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="col-md col-sm-12 m-1">
                            <iframe src="https://open.spotify.com/embed/album/1uF5I8Hod35yXmXF8ZWqUP?utm_source=generator" width="300" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="col-md col-sm-12 m-1">
                            <iframe src="https://open.spotify.com/embed/album/4sb5ntV5NNgRohZvFkePp6?utm_source=generator" width="300" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="col-md col-sm-12 m-1">
                            <iframe src="https://open.spotify.com/embed/track/1XqtvSVfjxmvvy82EX2r55?utm_source=generator" width="300" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div className="col-md col-sm-12 m-1">
                            <iframe src="https://open.spotify.com/embed/track/1POBH6qKOCcQLRFoMym21V?utm_source=generator" width="300" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>                        
                    </div>
                   
                </div>

                <div className='row p-0 m-0'>
                    <div className="col p-0 m-0 position-relative  ">                        
                        <img className="m-0 p-0 position-absolute bottom-0 end-0" src={complemento} alt="" width={'15%'}/>
                    </div>
                </div>                  
  
            </div>
        </Bounce>
    </div>
  )
}

export default D5
