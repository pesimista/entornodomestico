import React from 'react';
// import Logo from '../entorno_logo.jpg';
import Card from './card';

const Carousel = ({currentArtist, active, inheritAction}) =>
{
            var nameNoSpaces = currentArtist.name.replace(/ /g, "");
            const Cards = currentArtist.albums.map((currentValue) => {
            var ClassName =  `carousel-item ${(currentValue.id===0)?"active":""}`;
            return(
                  <div key={currentValue.id} className={ClassName} >
                        <Card artistName={currentArtist.name}
                        album={currentValue}  
                        name={currentValue.name} 
                        info={currentValue.short} 
                        url={currentValue.url} 
                        action={inheritAction} /> 
                  </div>
                  );
            });
            return(        
            <div id={nameNoSpaces} className={`carousel pt-0 pb-5 mt-0 mt-lg-5 h-100 slide ${active}`} data-ride="carousel" data-interval="false" data-slide-to="3" >
                  <div className="carousel-inner pb-3" >
                        {Cards}
                  </div>
                  <a className="carousel-control-prev" href={`#${nameNoSpaces}`} role="button" data-slide="prev" style={{width : "52px"}} >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href={`#${nameNoSpaces}`} role="button" data-slide="next" style={{width : "52px"}}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                  </a>
            </div>

            );
}
export default Carousel;