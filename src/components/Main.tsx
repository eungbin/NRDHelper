import React from 'react';
import '../css/Main.css';
import Cardview from './Cardview';

const Main = () => {
  return (
    <>
      <h1>팀 정하기 페이지</h1>
      <div className="mainContainer">
        <Cardview width={"250px"} height={"250px"} innerText={"선택지1"} />
        <Cardview width={"250px"} height={"250px"} innerText={"선택지2"} />
        <Cardview width={"250px"} height={"250px"} innerText={"선택지3"} />
      </div>
    </>
  );
};

export default Main;