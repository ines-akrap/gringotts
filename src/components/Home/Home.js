import React, { Component } from 'react';
import './Home.scss';
import Stage from '../Stage/Stage';

class Home extends Component {
  render() {
    return <div className='home__base'>
      <Stage />
    </div>;
  }
}

export default Home;