import React, { Component } from 'react';
import Carousel from '../Components/carousel';
import ArtistMenu from '../Components/artistsMenu';
import arrow from '../arrow.jpg';
import '../css/App.css';

class AlbumContainer extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      currentArtist: 0,
      artistList: this.props.Data,
      side: ""
    };
  }

  selectArtist = (event) =>
  {
    var result = this.props.Data.filter((singer) => {
      return singer.name.toLowerCase().includes(event.target.innerHTML.toLowerCase())
    }
    );
    this.setState({currentArtist : result[0].id});

    var sty = getComputedStyle(document.getElementById('semiCarousel') );
     if(sty.position==='absolute'){
       this.setState({side: "carouselRight"})
     }
  }
  goToArtist = (event) =>
  {
    this.setState({side: "carouselLeft"});
  }
  render() {
    var temp = this.props.Data.map((currentValue) => {
      var isActive = ((currentValue.id===this.state.currentArtist)? "" : "d-none" );
      return( <Carousel key={"Carousel"+currentValue.name.replace(/ /g, "-")} currentArtist={currentValue} active={isActive} inheritAction={this.props.action} /> );
    } );
    return (
      <section id="carouselContainer" className="" >
      <h2 className="title2 text-light text-center position-relative bg-unactive pb-4 mb-0" >Artistas</h2>
      <div id="semiCarousel" className={"d-flex flex-nowrap m-0 "+this.state.side} >
        <ArtistMenu artistsList={this.props.Data} index={this.state.currentArtist} action={this.selectArtist}/>
        <div id="actualCarousel" className="col-12 col-xl-8 col-lg-9 col-sm-8 px-0" style={{borderBottom: "5px solid #2f4970", backgroundColor: "#43cf99"}} >
          <button className="mx-3 mt-2 d-inline d-sm-none p-0 rounded-circle border-0" onClick={this.goToArtist} ><img src={arrow} alt="arrowLeft" className="rounded-circle" /> </button>
            {/* <Carousel currentArtist={this.state.currentArtist} /> */
            temp}
            <div></div>
        </div>
      </div>
      </section>
    );
  }
}

export default AlbumContainer;
