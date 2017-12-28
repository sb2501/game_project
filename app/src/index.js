import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Rectangle extends React.Component{
    
    render(){
       return(
            <rect className="rect" width="50" height="100" x={this.props.x} y={this.props.y}></rect>
        );
    }
}


class Game extends React.Component{
    
    renderRect(_x,_y){
        return <Rectangle x={_x} y={_y} />; 
    }
    
    render(){
        return(
                
            <svg width="100%">
                {this.renderRect("90%","50")}
                
                {this.renderRect("10%","50")}
        
            </svg>
            );
    }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);