import React from "react";
import Logo from '../entorno_logo.jpg';

const Info = () => 
{
   return(
   <section id="Nosotros" className="bg-darkish row justify-content-center mx-0"   >
      <div className="col-12 col-sm-6 mb-3" >
         <h1 className="title2 mb-3 mt-0 pt-3 bw3 text-light text-center text-sm-left" >
            Entorno Doméstico
         </h1>
         <div className={"text-center"}>
         <img
               src={Logo}
               className={"Logo rounded-circle mx-auto" }
               alt={"avatar"} />
         </div>   
      </div>
      <div className="align-self-center col-12 col-sm-6 text-white text p-0" style={{fontSize: "1.25rem", lineHeight: "1.5" }} > 
         <p>
         No somos una disquera, las disqueras existen, 
         son una estructura, nosotros «somos nada», pero la nada a la vez 
         «es algo» y a ese algo hay que ponerle nombre.
         </p>
         <p>
         Creemos en la música independiente, la libertad de la grabación 
         no-lugar y el limbo recurrente de la autopromoción, creemos en los 
         artistas de dormitorio y las bandas de apartamento.
         </p>
         <p>
         Entorno es una casa de música que hoy construimos pero no nos 
         pertenece, en el futuro esperamos que sólo sea una etiqueta para 
         todo aquel que quiera identificarse con el vacío.
         </p>
         <p>
         Sean todos bienvenidos.
         </p>
      </div>

   </section>

   );
}
export default Info;