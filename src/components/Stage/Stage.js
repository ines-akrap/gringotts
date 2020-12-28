import React, { Component } from 'react';
import './Stage.scss';
import stageImage from '../../assets/photos/atrium.jpg';

class Stage extends Component {
  render() {
    return <div className='stage__base'>
      <img src={stageImage} className="stage__image" alt="Test" />
    </div>;
  }
}

export default Stage;