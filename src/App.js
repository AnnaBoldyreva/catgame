import React from 'react';
import './App.css';




class App extends React.Component {
  state = {
    counter: 6,
    currentActiveId: 2
  };
  render() {

    let divs = [1,2,3,4,5,6,7,8,9];
    let elm = divs.map((number) => <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className={this.state.currentActiveId === number ? 'photo show' : 'photo'}/></div> )

    return (
       <div className='App'>
         <div className="wrapper">
           {elm}
         </div>

         <div className="counter">
           {this.state.counter}
         </div>
       </div>
    )
  }
}

export default App;
