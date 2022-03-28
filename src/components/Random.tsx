import React, { useState } from 'react';
import '../css/Random.css';
import { useLocation } from 'react-router-dom';

interface props {
  user1: string;
  user2: string;
}

const Random = () => {
  const location = useLocation();
  const users = location.state as props   // 그냥 location.state.user1로 사용할 경우 에러 발생

  console.log(location.state);

  return (
    <div className="randomContainer">
      {users.user1}
    </div>
  );
};

export default Random;