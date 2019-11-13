import React from 'react';
import './App.css';

function getRandomImageIndex(number) {
  return Math.floor(Math.random() * (number+1));
}


class App extends React.Component {
  state = {
    counter: 0,
    currentActiveId: 8
  };

  componentDidMount() {
    setInterval(() => {
      this.setCurrentActiveId(getRandomImageIndex(8))
    }, 1000)
  }

  setCurrentActiveId = (id) => {
    this.setState({currentActiveId: id })
  };

  increaseCounter = () => {
    this.setState({counter: this.state.counter + 1 })
  };

  render() {

    let divs = [1,2,3,4,5,6,7,8,9];
    let elm = divs.map((number) => <div  onClick={ this.increaseCounter} className="item"><img src='https://1946.ska.ru/media/images/player/mini/5c88df7b06dc57_26735791.png' className={this.state.currentActiveId === number ? 'photo show' : 'photo'}/></div> )

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
