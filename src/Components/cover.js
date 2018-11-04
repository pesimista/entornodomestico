import React from "react";
import fondo from '../entorno_animacion.gif';

const Cover = ({scroll}) =>
{
   var iconSize = {width: "32px"};
   return(
      <section id="Cover" className="text-white text-center cover-container d-flex w-100 h-100 p-0 mx-auto flex-column" style={{backgroundImage: "url("+fondo+")"}} >
         <div className="pt-lg-5 pb-lg-4 bg-darkish"  >
            <div role="main" className="inner" >
               <p className="text lead">Casa de Música Independiente.</p>
               <h1 className="title mb-5" ><strong>Entorno Doméstico</strong> </h1>
               <p className="lead">
                  <button id="usButton" type="button" className="btn px-5 btn-lg mx-2 mb-3 mb-sm-0 bg-unactive text-white rounded-0" onClick={() => scroll('#Nosotros', 500)}>Nosotros</button>
                  <br className="d-inline d-sm-none mb-4" />
                  <button id="artistButton" type="button" className="btn px-5 btn-lg bg-active text-white mx-2 rounded-0" onClick={() => scroll('#carouselContainer', 500)} >Artistas</button>
               </p>
            </div>
            <div id="socialMedia" className="flex-row pt-3 pb-2 mb-3 mx-auto">
               <a className="btn btn-dark p-1 mx-2 bg-unactive border-0" href="https://www.facebook.com/entornodomestico" title="Facebook">
                  <svg style={iconSize} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"/></svg>
               </a>
               <a className="btn btn-dark p-1 mx-2 bg-unactive border-0" href="https://www.youtube.com/user/entornodomestico" title="youtube">
                  <svg style={iconSize} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"/></svg>
               </a>
               <a className="btn btn-dark p-1 mx-2 bg-unactive border-0" href="http://www.twitter.com/entornodiscos" title="twitter">
                  <svg style={iconSize} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/></svg>
               </a>
            </div>
         </div>
      </section>

      

   );
}

export default Cover;
/* <section id="index" className="cover-container flex-column w-100 h-100 text-center text-white bg-secondary p-0" style={{backgroundImage: "url("+fondo+")" }} >
   <header className="py-md-5"  style={{backgroundColor: "rgba(0, 0, 0, .7)"}} >
      <div id="introduction h-100 p-3" style={{maxHeight: "42rem"}} >
         <div className="my-auto" >
            <p className="lead mb-3 bt-auto" >asssssssssss</p>
            <h1 className="text-weight-bold mb-auto" >Entorno doméstico</h1>
         </div>

         <div className="flex-column mb-3 mt-auto" >
            <a className="lead btn btn-outline-light mr-md-2 btn-lg" href="#index">Nosotros</a>
            <a className="lead btn btn-outline-light ml-md-2 btn-lg" href="#index">Artistas</a>
         </div>
      </div>
   </header>
      
</section>

<footer className="mastfoot mt-auto">
   <div className="inner">
      <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
   </div>
</footer>
*/