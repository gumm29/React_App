import React, {Component} from 'react'

class Body extends Component{

  render(){
    const number =  [1,23,3,4,5,56]
    const testNumber = [2,1,3,4,5,6,7,8,10,12]

    let hello = () => console.log('teste');
    hello();
    return (
      <section>
        <div>{number+''}</div>
        <div> <label>  <strong>Número maior que 4:</strong> </label> {testNumber.filter(testNumber => (testNumber)/2 > 4)} </div>
        <div>teste</div>
      </section>
    )
  }
}

export default Body