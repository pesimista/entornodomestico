import React from "react";
import ReactModal from 'react-modal';
import letras from '../entorno_letras.PNG';

const re = /\S+@\S+\.\S+/;
const fun = () =>{
  var name = document.getElementById("nameField").value;
  var mail = document.getElementById("emailField").value;
  if(name.length>0 && mail.length>0)
  {
    if(re.test(mail))
      alert("Hola "+name+"!\n\nAquí es donde va la descarga del album.\n\nPara poder hacerlode forma efectiva se necesita un servidor, lastimosamente github no me permite hacer eso. De momento conformemonos con saber que el front funciona de maravilla.");
  }
  else
  {
    alert('Rellena los campos para poder dercargar el album');
  }

  
}

const Modal = ({showModal, Close, name, albumInfo}) =>
{
  ReactModal.setAppElement('#root');
  var ul = <li/>;
  if(typeof albumInfo.songs !== 'undefined')
    ul = albumInfo.songs.map((currentItem) =>{
    return <li key={currentItem.replace(/ /g, "")} >{currentItem}</li>;
  });
  return(
    <ReactModal id="NiceId" isOpen={showModal} contentLabel="Example Modal" className="Modal" >
      <button type="button" className="close" onClick={() => Close()}>
        <span aria-hidden="true">&times;<br/></span>
      </button>
      <div className="text my-auto">
        <img src={letras} alt="entornodomestico" className="h-100 float-left mr-3 d-none d-md-inline pb-5"  />

        <div id="info" className="d-sm-flex h-100 mb-1 mt-md-3" >
          <img className="d-block d-sm-inline mb-3 my-md-auto mx-auto mr-sm-0 ml-sm-auto" src={albumInfo.url} alt={albumInfo.name} style={{maxHeight: "340px", maxWidth:"340px", width:"70%" }} />
          <div id="info"  className="ml-0 ml-sm-3 mr-auto"> 
            <p className="mb-1" >{name}</p>
            <h2>{albumInfo.name}</h2>
            <ol className="songList" >
              {ul}
            </ol>
          </div>
        </div>
        <h5 className="text-left mb-1">Obtén el disco</h5>    
        <p className="mb-1" style={{fontSize: "12px"}} >
          Rellena los siguientes datos para ver el enlace al disco metafísico (descarga digital gratuita).
          <br/>
          Tus datos siempre serán mantenidos en secreto.
          </p>
        <form className="row justify-content-around pb-3 pb-md-0" >
          <fieldset className="mb-2 col-12 col-md-5 row justify-content-center">
            <label className="col-12 my-auto" htmlFor="nombre">Nombre completo</label>
            <input id="nameField" className="col-12 form-control" type="text" name="nombre" placeholder="Aqui va tu nombre" required/>
          </fieldset>
          <fieldset className="mb-2 col-12 col-md-5 row justify-content-center">
            <label className="col-12 my-auto" htmlFor="mail">Correo</label>
            <input id="emailField" className="col-12 form-control" type="email" name="mail" placeholder="Aqui pones tu correo" required />
          </fieldset>
          <button onClick={() => fun()} className="col-md-2 align-self-center btn bg-active text-white rounded-0" type="button">Descargar</button>
        </form>
      </div>    
    </ReactModal>
  );
}

export default Modal;
/*
<span className="d-none d-xl-inline" >extra large<br/></span>
<span className="d-none d-lg-inline" >large<br/></span>
<span className="d-none d-md-inline" >medium<br/></span>
<span className="d-none d-sm-inline" >small<br/></span>
<span className="d-inspanne" >tiny<br/></span>
*/