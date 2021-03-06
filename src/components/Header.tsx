import React, { useState } from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Header = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="menu">
      <Link to="/"><div className="menu-item home">NRD Helper</div></Link>
      <div className="menu-item items" onClick={openModal}>Information</div>
      <Link to="/fast"><div className="menu-item items">Fast High-Tier</div></Link>
      <Modal open={modal} close={closeModal} header="제작자">
        김응빈 (programmer97@naver.com) <br />
        https://github.com/eungbin <br />
        Map Version: 7.394
      </Modal>
    </div>
  );
};

export default Header;