import React from 'react';
import {FaFacebook, FaTelegram} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {AiFillGithub} from 'react-icons/ai';
import {FaFileDownload} from 'react-icons/fa';
const Banner = () => {
  return (
    <>
    <section className="banner">
      <div className="intro">
        <img src="./images/my-Image.jpg" alt="banner" className="shadow" />
        <h1>Sardor Narzikulov</h1>
        <p>I'm FrontEnd Devoloper from Uzbekistan, Jizzax</p>
        <p> Welcome to my personal website</p>
        <div className="social-media">
          <a className="social-link" href="https://www.facebook.com/sardor.narzikulov.71"><FaFacebook /></a>
          <a className="social-link" href="https://t.me/sardornarzikulov1"><FaTelegram /></a>
          <a className="social-link" href="https://www.instagram.com/narzikulov.sardor/"><GrInstagram /></a>
          <a className="social-link" href="https://github.com/narzikulovv"><AiFillGithub /></a>
        </div>
        <div className="download">
          <a className="linkCV" href="#"><span><FaFileDownload /></span>Download CV</a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Banner;