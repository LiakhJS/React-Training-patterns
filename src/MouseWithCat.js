import React from "react";
import cat from "./images/cat.jpeg";

function Ccat() {
return(<img src={cat} alt="cat"  />
);
}
class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={cat} alt="cat" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
  
  class Mouse extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Вместо статического представления того, что рендерит <Mouse>,
            используем рендер-проп для динамического определения, что надо отрендерить.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }
  
 
  class MouseWithTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Перемещайте курсор мыши!</h1>
  
          {/*
            Это плохо! Значение рендер-пропа будет
            разным при каждом рендере.
          */}
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )}/>
        </div>
      );
    }
  }
  export default MouseWithTracker;
  export {Ccat};
   
