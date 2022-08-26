import React from 'react';

//Import animation
import Bounce from 'react-reveal/Bounce';

//import images
import imagen from '../img/D9-14.png.webp';
import fondo from '../img/D9-15.png.webp';
import titulo from '../img/D9-13.png.webp';

const D9 = () => {
  return (
    <div className="container-fluid text-center m-0 p-0">
        <div className="row align-items-center justify-content-center m-0 p-0" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>
                <div className='col-12 m-0 p-0'>
                    <img className="m-0 p-0 titulo-d9" src={titulo} alt="" width='50%'/>
                </div>

                <div className='row justify-content-center align-items-center m-0 p-0'>

                        <div className="col-md-4 p-2 col-sm card-d9">
                            <p className="text-center p-0 m-0 titulos-d9" style={{color: 'white'}}>De borondo con Cesar Mora</p>
                            <iframe src="https://www.youtube.com/embed/HOEt8tsSb2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 p-2 col-sm card-d9">
                            <p className="text-center p-0 m-0 titulos-d9" style={{color: 'white'}}>El Swing - España</p>
                            <iframe src="https://www.youtube.com/embed/Qni20n0a3fI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 p-2 col-sm card-d9">
                            <p className="text-center p-0 m-0 titulos-d9" style={{color: 'white'}}>Kien y Ke</p>   
                            <iframe src="https://www.youtube.com/embed/EYvuXRHjzKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 p-2 col-sm card-d9">
                            <p className="text-center p-0 m-0 titulos-d9" style={{color: 'white'}}>Resonantes Canal Trece</p>
                            <iframe src="https://www.youtube.com/embed/0fWDc6m5WHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 p-2 col-sm card-d9">
                            <p className="text-center p-0 m-0 titulos-d9" style={{color: 'white'}}>Salseros VIP</p>
                            <iframe src="https://www.youtube.com/embed/qo8O5MFdzKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="col-md-4 p-2 col-sm card-d9">
                            <p className="text-center p-0 m-0 titulos-d9" style={{color: 'white'}}>Trendiendo Canal RCN</p>
                            <iframe src="https://www.youtube.com/embed/5kJQ1oJKC_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                </div>

                <div className='col-12 text-end'>
                    <img className="m-0 p-0 align-self-end mascota-d9" src={imagen} alt="" width='15%'/>
                </div>

            </Bounce>
        </div>
    </div>
  )     
}

export default D9
