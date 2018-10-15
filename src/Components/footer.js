import React from "react";

const Footer = ({scroll}) =>
{
   return(
      <section id="footer" className="active pt-5 bg-unactive text-center" >
         <div className="pt-5 h-100 " style={{backgroundColor: "#bddfef" }} >
            <div >
               <svg height="42" className="d-block mx-auto mb-4 text-center fill-gray" aria-label="person" viewBox="0 0 12 16" version="1.1" width="31" role="img"><path fillRule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"></path></svg>
               <h3 className="text mb-3 text-dark" >
               Contactanos</h3>
               <p className="lead text text-dark" >
               Envia un correo a notAnActualEmail@mezzmar.com para hablar conmigo</p>
               <p className="text-dark" >
               Made with &#10084; by <a href="https://github.com/MezzMar" target="_new" className="" >MezzMar_</a> using react.
               </p>
               <p className="text-dark" >
              <button type="button" className="btn btn-link p-0 border-0 bg-transparent" onClick={() => scroll('#Cover', 500)} > Go to the top!
              </button>
               </p>
            </div>

            <div className="bg-unactive position-relative pt-3 pb-1" >
               <div className="d-flex justify-content-around text-white">
                  <button type="button" className="p-0 rounded-circle border-0 bg-transparent" onClick={() => scroll('#Cover', 500)} >
                     <svg height="32px" className="d-inline" aria-label="github-logo" viewBox="0 0 16 16" version="1.1" width="32px" role="img">
                           <path style={{fill:"#fff"}} fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                           </path>
                        </svg>
                     </button>
               </div>
               <hr style={{borderTopColor: "#bddfef"}} />

            </div>
         </div>

         
      </section>

      

   );
}

export default Footer;
/* <p><a href="http://entornodomestico.net/">Entorno Doméstico</a></p>
   <p>Que</p>
   <p>hace</p> */