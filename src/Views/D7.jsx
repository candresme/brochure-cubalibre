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
    <div className="container-fluid text-center m-0 p-0">
        
        
        <div className="row p-0 m-0 align-items-center justify-content-between" style={{backgroundImage: `url(${fondo})`, backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <Bounce left cascade>
                <div className='col-md col-sm-12 m-0 p-0 order-sm-0 order-md-1' style={{width: '100%'}}>

                    <div className="row m-0 p-0 justify-content-between ">
                        <div className="col m-0 p-0 text-end align-self-start">
                            <img className="m-0 p-0" src={titulo} alt="" width='80%'/>
                        </div> 
                    </div>

                    <div className='row m-0 p-0 text-end'>
                        <div className="col m-0 p-0 align-self-end">
                            <img className="m-0 p-0" src={imagen} alt="Sebastian de Cuba Libre" width='80%'/>
                        </div>
                    </div> 
                    
                </div>

                <div className='col-md col-sm-12 order-sm-1 order-md-0 text-center'>
                    <div className="row align-items-center justify-content-center text-center m-4">
                        
                        <div className="col-md-12 col-sm-12 m-2">
                            <div className="row align-items-center justify-content-center text-center">
                                <img className="col-sm-2 col-md-1 location" src={location} alt=""/>
                                <h1 className="col-6 text-start titulos-d7" style={{backgroundColor: '#F39204', borderRadius: '10px', padding: '5px'}}>Santiago de Cali</h1>
                            </div>
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-sm-2 col-md-1"></div>
                               <p className="col-md-6 col-sm">
                                    Feria de Cali, Feria de Tuluá, Arena Cañaveralejo, Bulevar del río, Teatro Municipal, Teatro Jorge Isaacs, Hotel Intercontinental, Hotel Spiwak, La Topa Tolondra, Zaperoco, Malamaña.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 m-2">
                            <div className="row align-items-center justify-content-center text-center">
                                <img className="col-sm-2 col-md-1 location" src={location} alt=""/>
                                <h1 className="col-6 text-start titulos-d7" style={{backgroundColor: '#F39204', borderRadius: '10px', padding: '5px'}}>Bogotá</h1>
                            </div>
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-sm-2 col-md-1"></div>
                                <p className="col-md-6 col-sm">
                                    Galería Café Libro, Casa Quiebracanto, Isla Corona, La Bendita Cantina, A Seis Manos.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 m-2">
                            <div className="row align-items-center justify-content-center text-center">
                                <img className="col-sm-2 col-md-1 location" src={location} alt=""/>
                                <h1 className="col-6 text-start titulos-d7" style={{backgroundColor: '#F39204', borderRadius: '10px', padding: '5px'}}>Medellín</h1>
                            </div>
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-sm-2 col-md-1"></div>
                                <p className="col-md-6 col-sm">
                                    Latina Stereo, Claustro Confama, Son Havana, Teatro Pablo Tobón Uribe, La Bodeguita Cubana
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 m-2">
                            <div className="row align-items-center justify-content-center text-center">
                                <img className="col-sm-2 col-md-1 location" src={location} alt=""/>
                                <h1 className="col-6 text-start titulos-d7" style={{backgroundColor: '#F39204', borderRadius: '10px', padding: '5px'}}>Bucaramanga</h1>
                            </div>
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-sm-2 col-md-1"></div>
                                <p className="col-md-6 col-sm">
                                    Cerro del Santisimo, Aguanile.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 m-2">
                            <div className="row align-items-center justify-content-center text-center">
                                <img className="col-sm-2 col-md-1 location" src={location} alt=""/>
                                <h1 className="col-6 text-start titulos-d7" style={{backgroundColor: '#F39204', borderRadius: '10px', padding: '5px'}}>Cartagena</h1>
                            </div>
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-sm-2 col-md-1"></div>
                                <p className="col-md-6 col-sm">
                                    Casa Quiebracanto, Cartagena, El Vueltabajero, Centro de Convenciones Cartagena de Indias.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 m-2">
                            <div className="row align-items-center justify-content-center text-center">
                                <img className="col-sm-2 col-md-1 location" src={location} alt=""/>
                                <h1 className="col-6 text-start titulos-d7" style={{backgroundColor: '#F39204', borderRadius: '10px', padding: '5px'}}>Santa Marta</h1>
                            </div>
                            <div className="row align-items-center justify-content-center text-center">
                                <div className="col-sm col-md-1"></div>
                                <p className="col-md-6 col-sm">
                                    Casa Papau, El Viajero Hostel Santa Marta, Gitana del Mar.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Bounce>
        </div>
        
    </div>
    
  )
}

export default D7