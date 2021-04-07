import React from 'react';

export default class HeaderComponent extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      counter: 0
    }

  }

  AddOne(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
  AddMore(){
    this.setState((prevstate)=>{

      var newValue = 0;
      if (prevstate.counter < 90) {
        newValue = prevstate.counter + 10
      } 
      else if (prevstate.counter < 100) {
        newValue = prevstate.counter + 1
      }
       
      return{
        counter: newValue
      }

    })
  }
  ResetCounter(){
    this.setState({
      counter: 0
    })
  }
  

  render(){
    return (
    <div>
      <h1>Nombre: {this.props.Nombre}</h1>
      <h2>Profesión: {this.props.Prof}</h2>
      <p>{this.props.Notas}</p>
      <p>Counter: {this.state.counter}</p>
      <button onClick={()=>{this.AddOne()}}>Añadir 1</button>
      <button onClick={()=>{this.AddMore()}}>Añadir 10</button>
      <button onClick={()=>{this.ResetCounter()}}>Reiniciar</button>
    </div>
    );
  }
}