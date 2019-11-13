import React from 'react';
import './App.css';

class MainItem extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <div className="item"><img src="dog.jpg" className="photo"/></div>
                <span className='counter'>Counter</span>

            </div>
        )
    }
}

export default MainItem;
