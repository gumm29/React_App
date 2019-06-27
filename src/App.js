import React, {Component} from "react"
import Button from "./component/Button.js"

class App extends Component {
  state= {
    valor1: "teste 1",
    valor2: "teste 2"
  }

  ok =()=>{
    if (!this.valor1)  return <Button w={this.setState({valor1: "valor2"})} />
  }

  render() {
  return (
    <div onClick={()=>this.ok()}>
      <button>{this.state.valor1}</button>
    </div>
  );
}
}

export default App
