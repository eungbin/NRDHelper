import React from 'react';
import '../css/Pick.css';
import Button from './Button';
import Input from './Input';

const Pick = () => {
  return (
    <div className="pickContainer">
      <p>첫 번째 유저</p>
      <Input width={"300px"} height={"50px"} id={"firstUser"} />
      <p>두 번째 유저</p>
      <Input width={"300px"} height={"50px"} id={"secondUser"} />
      <Button width={"300px"} height={"100px"} color={"aqua"} text={"입력"} hColor={"pink"} aColor={"gray"} />
    </div>
  );
};

export default Pick;