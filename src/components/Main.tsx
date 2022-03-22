import React from 'react';
import '../css/Main.css';
import Cardview from './Cardview';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <h1>팀 정하기 페이지</h1>
      <div className="mainContainer">
        <Link to="/pick">
          <Cardview width={"250px"} height={"150px"} paddingTop={"70px"} innerText={"두 명이 고르기"} />
        </Link>
        <Cardview width={"250px"} height={"150px"} paddingTop={"70px"} innerText={"선택지2"} />
        <Cardview width={"250px"} height={"150px"} paddingTop={"70px"} innerText={"선택지3"} />
      </div>
    </>
  );
};

export default Main;