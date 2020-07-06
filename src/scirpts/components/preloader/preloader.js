import React from 'react';

import './preloader.css';

const Preloader = () => {
  
  return (
    <div className="preloader">
      <div className="preloader__progress">
        <div className="preloader__progress-value"></div>
      </div>
    </div>
  )
}

export default Preloader;