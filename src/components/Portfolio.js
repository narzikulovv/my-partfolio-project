import React from 'react';
import {BsLink} from 'react-icons/bs'
const Portfolio = () => {
  return (
    <>
      <section className="portfolio">
        <div className="portfolio-container">
          <div className="container-fluid ">
          <h1 className="portfolio-title">Portfolio</h1>
            <div className="row mx-0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-photo ">
                  <img src="./images/Screenshot_110.png" width="100%" height="auto" alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-link">
                  <h3>My first portfolio</h3>
                  <p>Used technologies: HTML, CSS, Bootstrap, JavaScript</p>
                  <a className="link" target="_blank" href="https://portfolio-my-project.netlify.app/"><span><BsLink /></span>Demo</a>
                </div>
              </div>
            </div>
            <div className="row mobile mx-0">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-link">
                  <h3>Fruit magazine creative</h3>
                  <p>Used technologies: HTML, CSS, Bootstrap, JavaScript</p>
                  <a className="link" target="_blank" href="https://fruit-magazine.netlify.app/"><span><BsLink /></span>Demo</a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-photo ">
                  <img src="./images/Screenshot_111.png" width="100%" height="auto" alt=""/>
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-photo ">
                  <img src="./images/Screenshot_112.png" width="100%" height="auto"  alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-link">
                  <h3>React real project lenguage and register</h3>
                  <p>Used technologies: React and 15 more libraries</p>
                  <a className="link" target="_blank" href="https://react-project-lenguage.netlify.app"><span><BsLink /></span>Demo</a>
                </div>
              </div>
            </div>
            <div className="row mobile mx-0">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-link">
                  <h3>React project clock magazine</h3>
                  <p>Used technologies: React, Css and Libraries</p>
                  <a className="link" target="_blank" href="https://magazine-clock-react-project.netlify.app/"><span><BsLink /></span>Demo</a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-photo ">
                  <img src="./images/Screenshot_113.png" height="auto" alt=""/>
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-photo ">
                  <img src="./images/Screenshot_114.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-link">
                  <h3>Storm Websites</h3>
                  <p>Used technologies: HTML, CSS, Bootstrap, JavaScript</p>
                  <a className="link" target="_blank" href="https://battle-project.netlify.app/"><span><BsLink /></span>Demo</a>
                </div>
              </div>
            </div>
            <div className="row mobile mx-0">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-link">
                  <h3>React Chat</h3>
                  <p>Used technologies: React, Material-UI, Fairbase</p>
                  <a className="link" target="_blank" href="https://github.com/narzikulovv/react-chat"><span><BsLink /></span>Github</a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-photo ">
                  <img src="./images/Screenshot_115.png" alt=""/>
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-photo ">
                  <img src="./images/Screenshot_116.png" alt=""/>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 px-0">
                <div className="portfolio-link">
                  <h3>Quiz App Javascript project</h3>
                  <p>Used technologies: HTML, CSS, JavaScript</p>
                  <a className="link" target="_blank" href="https://quiz-app-myjavascript.netlify.app/"><span><BsLink /></span>Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;