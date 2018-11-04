import React from 'react';
// import Logo from '../entorno_logo.jpg'

const Card = ({artistName, album, name, info, url, action}) =>
{
   var para = album.short.split('\n');
   var paragraphs = para.map((currentValue, i) => {
      return (<p key={album.name.replace(/ /g, "") + i} className="card-text d-none d-lg-inline" >
            {currentValue}
         </p>);
   });
   return(
   <div className="card flex-lg-row mx-auto mt-2 shadow p-3 text" style={{width: "90%" , minHeight: "300px", backgroundColor: "#fff", borderRadius: "0px"}} >
      <img className=" d-block p-lg-0 p-3 m-auto" src={album.url} alt={album.name+" cover"} style={{maxHeight: "340px", maxWidth:"340px", width:"100%" }} /> 
      <div className="card-body d-flex flex-column align-items-start mx-auto" style={{ maxWidth: "450px"}} >
         <h5 className="card-title d-inline text-center text-lg-left mx-lg-0 mx-auto">{album.name}</h5>
         {paragraphs}
         <button type="button" className="btn btn-primary mx-auto mb-1 mt-auto" onClick={()=>action(artistName, album)}>Disco metafisico</button>
      </div>
   </div>

   );
}
export default Card;

/*
   Lo Desconocido es una colección de primeras tomas e ideas fallidas, realizadas entre 2008 y 2012; período que corresponde a la composición de Poietiké y Banco Insular.

   Una selección de archivos infectados de manierismo inmaduro.

   Lo Desconocido es lo que no funciona.
*/
