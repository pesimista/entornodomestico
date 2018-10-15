import React, { Component } from 'react';
import AlbumContainer from "./albumContainer";
// import '../css/bootstrap.min.css';
import '../css/App.css';
// import Musicians from '../Components/artists';
import Cover from '../Components/cover';
import Info  from '../Components/Info';
import Footer  from '../Components/footer';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
       Musicians: [
        {
          name: '',
          id : '',
          albums:
          [
            {
                id: '',
                name: '',
                url: "",
                short: '' ,
                long: '' 
            }
          ]
        }
      ]
    };
  }

  render() {
    const textMe = 'You should not be able to see this.\n\nStop messing w/ my site >:(\n\nJust kidding, hit me up at @MezzMar_ on Twitter if you saw this :)';
    const tiltedBorder = {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      width: "100%",
      height: "100%",
      transform: "skewY(-6deg)",
      transformOrigin: "top right"
    }
    const tiltedBorderContainer = {
      position: 'relative',
      height: '180px',
      backgroundColor: 'black'
    }

    return (
      <div>
      <button className="d-none btn px-5 btn-lg bg-active text-white mx-2 rounded-0" type="button" value="Click me!" onClick={() => {alert(textMe);this.smoothScroll('#footer', 500)}}>
        Hola
        </button>
        <Cover scroll={this.smoothScroll} />
        <Info />
        <div style={tiltedBorderContainer}>
          <div style={tiltedBorder} className="bg-unactive" ></div>
        </div>
        <AlbumContainer Data={this.state.Musicians} />
        <Footer scroll={this.smoothScroll} />
      </div>
    );
    
  }
  componentWillMount() {
 // fetch('https://next.json-generator.com/api/json/get/VydBEEoqS')
    fetch('https://next.json-generator.com/api/json/get/N1MQtF39S')
    .then(resp => resp.json())
    .then(data => 
    {
      console.log("-------------------------------------------------");
      this.setState({Musicians: data}); 
    })
    .catch(() => console.log("Someting went wrong") );
  }

  smoothScroll = (parameter, time) =>
  {
    var target = document.querySelector(parameter);
    var position = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;

    // var delta = position - startPosition;
    var startTime = null;

    /* t : currentTime | b : start value 
     * c : change in value | d : duration 
     */
    function ease(t, b, c, d)
    {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    }


    function animationScroll(currentTime)
    {
      if(startTime===null) startTime = currentTime;
      var timeElapsed = currentTime- startTime;
      var run = ease(timeElapsed, startPosition, position, time);
      // var run = ease( timeElapsed, startPosition, delta, time);
      window.scrollTo(0, run);
      if(timeElapsed<time) requestAnimationFrame(animationScroll);

    }

    requestAnimationFrame(animationScroll);
  }
}

export default App;