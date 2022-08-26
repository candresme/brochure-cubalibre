import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import imagen from '../img/D8-13.png.webp';
import fondo from '../img/D8-15.png.webp';
import titulo from '../img/D8-14.png.webp';


const D8 = () => {
  return (
    <div className="container-fluid text-center m-0 p-0">
        <div className="row align-items-center justify-content-center m-0 p-0" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>

                <div className="col-md-4 col-sm m-0 p-0 align-self-end col1-d8">                    
                    <img className="m-0 p-0" src={imagen} alt="Imagen timbalero de Cuba Libre" width='100%'/>
                </div>


                <div className="col-md col-sm-12 text-center">
                    
                    <div className='row pb-3 align-items-center justify-content-center'>
                        <div className="col">
                            <img className="m-0 p-0 titulo-d8" src={titulo} alt="Imagen integrantes de Cuba Libre" width='50%'/>
                        </div>
                    </div>
                    <div className='row p-3 align-items-center justify-content-center'>
                        <div className="col">
                            <h1 className="texto-d8" style={{color: 'white'}}>¡Más de 489.475 visualizaciones en YouTube!</h1>
                        </div>
                    </div>

                    <div className='row align-items-center justify-content-center'>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/j-KFMj3SknQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/qeTaqk49wP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/2sUDKUKYP8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/pdFttjzQ4ZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/gC2CYyIH5lY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/ZrdnYMbQqJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/XctWjNd7Ous" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/282DVXDrTI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 col-sm p-2">
                            <iframe src="https://www.youtube.com/embed/etqkjWsZzaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                         
                    </div>
                    
                </div>

            </Bounce>
        </div>      
    </div>
  )
}

export default D8
