import React, { useState } from 'react';
import '../css/Random.css';
import { useLocation } from 'react-router-dom';

const Random = () => {
  const location = useLocation();

  console.log(location.state);

  return (
    <div className="randomContainer">
      TEST
    </div>
  );
};

export default Random;