import React, { useState } from 'react';
import '../css/Pick.css';
import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

const Pick = () => {
  const [users, setUsers] = useState({
    user1: "",
    user2: "",
  });

  const navigate = useNavigate();

  const onChangeUsers = (e) => {
    if(e.target.id === "firstUser") {
      users.user1 = e.target.value;
    } else if(e.target.id === "secondUser") {
      users.user2 = e.target.value;
    }
  }

  const buttonClick = () => {
    if(users.user1 === "") {
      alert("첫 번째 유저를 입력해 주세요.");
    } else if(users.user2 === "") {
      alert("두 번째 유저를 입력해 주세요.");
    } else {
      console.log(users);
      navigate("/random", {state: users});
    }
  }

  return (
    <div className="pickContainer">
      <p>첫 번째 유저</p>
      <Input width={"300px"} height={"50px"} id={"firstUser"} onChange={onChangeUsers} />
      <p>두 번째 유저</p>
      <Input width={"300px"} height={"50px"} id={"secondUser"} onChange={onChangeUsers} />
      <Button width={"300px"} height={"100px"} color={"aqua"} text={"입력"} hColor={"pink"} aColor={"gray"} onClick={buttonClick} />
    </div>
  );
};

export default Pick;