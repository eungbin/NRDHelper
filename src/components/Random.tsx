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

  const randomNum = Math.floor(Math.random()*2+1);
  let pickedUser = "";

  if(randomNum === 1) {
    pickedUser = users.user1;
  } else {
    pickedUser = users.user2;
  }

  return (
    <div className="randomContainer">
      {users.user1}
      {users.user2}
    </div>
  );
};

export default Random;