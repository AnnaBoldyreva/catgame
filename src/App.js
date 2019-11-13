import React from 'react';
import './App.css';




class App extends React.Component {
  state = {
    counter: 6,
    currentActiveId: 2
  };
  render() {
    return (
       <div className='App'>
         <div className="wrapper">
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo show"/></div>
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo"/></div>
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo"/></div>
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo"/></div>
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo"/></div>
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo"/></div>
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo"/></div>
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo"/></div>
           <div className="item"><img src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg' className="photo"/></div>



         </div>

         <div className="counter">
           0
         </div>
       </div>
    )
  }
}

export default App;
