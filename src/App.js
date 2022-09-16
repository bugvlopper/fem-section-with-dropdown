import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this._toggleMenu = this._toggleMenu.bind(this);
  }

  _toggleMenu(){
    let menu = document.getElementById('menu');
    let menuButton = document.getElementById("menuButton");
    if(menu.className.match(/menu-open/)){
      menu.style.transform = "translate(100%)";
      menu.classList.remove("menu-open");
      menuButton.style.transform = "rotateZ(0deg)";
      
      this._closeSubMenu();
      setTimeout(()=>{
        menuButton.setAttribute("src",require("./images/icon-menu.svg"));
      },200)
    }
    else{
      menu.classList.add("menu-open");
      menu.style.transform = "translate(0%)";
      menuButton.style.transform = "rotateZ(360deg)";
      setTimeout(()=>{
        menuButton.setAttribute("src",require("./images/icon-close-menu.svg"));
      },200)
    }
  }

  _closeSubMenu(){
    let menu = document.getElementById('menu');
    let subMenu = menu.getElementsByClassName("sub-menu");
    let menuHead = menu.getElementsByClassName("menu-head");
    for(let i = 0; i< subMenu.length; i++){
      subMenu[i].style.height = "0px";
      setTimeout(()=>{
        subMenu[i].style.display = "none";
      },400)
    }
    for(let i = 0; i< menuHead.length; i++){
      menuHead[i].getElementsByTagName('img')[0].style.transform = 'rotateZ(0deg)';
    }
  }

  _toggleSubMenu(e){
    let menu;
    if(e.target.parentNode.className.match(/menu-head/)){
      menu = e.target.parentNode.parentNode;
    }
    else{
      menu = e.target.parentNode;
    }
    let arrow = menu.getElementsByClassName("menu-head")[0].getElementsByTagName("img")[0];
    let subMenu = menu.getElementsByClassName("sub-menu")[0];
    if(!arrow.style.transform.match(/rotateZ\(180deg\)/)){
      arrow.style.transform = "rotateZ(180deg)";
      subMenu.style.display = "flex";
      setTimeout(()=>{
        subMenu.style.height = "160px";
      },5)
      
    }else{
      arrow.style.transform = "rotateZ(0deg)";
      subMenu.style.height = "0px";
      setTimeout(()=>{
        subMenu.style.display = "none";
      },400)
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="header" >
          <img src={require("./images/logo.svg")} alt="SNAP" />
          <div id='menu' className="menu">
            <div className='under-menu-div'>
              <div className='menuButtonContainer'>
              <div id='features' >
                <div className='menu-head' onClick={this._toggleSubMenu}>
                  <p className='subMenuHeader'>Features</p>
                  <img src={require("./images/icon-arrow-down.svg")} alt="Open" />
                </div>
                <div className='sub-menu'>
                  <div>
                    <a href="/">
                      <img src={require("./images/icon-todo.svg")} alt="Todo" />
                      <p>Todo List</p>
                    </a>
                  </div>
                  <div>
                    <a href='/'>
                      <img src={require("./images/icon-calendar.svg")} alt="Calendar" />
                      <p>Calendar</p>
                    </a>
                  </div>
                  <div>
                    <a href='/'>
                      <img src={require("./images/icon-reminders.svg")} alt="Reminders" />
                      <p>Reminders</p>
                    </a>
                  </div>
                  <div>
                    <a href='/'>
                      <img src={require("./images/icon-planning.svg")} alt="Planning" />
                      <p>Planning</p>
                    </a>
                  </div>
                </div>
              </div>
              <div id='Company'>
                <div className='menu-head' onClick={this._toggleSubMenu}>
                  <p className='subMenuHeader'>Company</p>
                  <img src={require("./images/icon-arrow-down.svg")} alt="Open" />
                </div> 
                <div className='sub-menu'>
                  <div>
                    <a href='/'>History</a>
                  </div>
                  <div>
                    <a href='/'>Our Team</a>
                  </div>
                  <div>
                    <a href='/'>Blog</a>
                  </div>
                </div>
              </div>
              <a href='/' className='lonelyLink'>Careers</a>
              <a href='/' className='lonelyLink'>About</a>
              </div>
              <div className='connect-div'>
                <a href='/'>Login</a>
                <button>Register</button>
              </div>
            </div> 
          </div>
          <div className="menu-button" onClick={this._toggleMenu}>
            <img id='menuButton' src={require("./images/icon-menu.svg")} alt="Open menu" />
          </div>
        </div>
        <div className="body">
          <img src={require("./images/image-hero-mobile.png")} alt="hero" />
          <div>
            <div>
              <h1>Make remote work</h1>
              <p>Get your team in sync, no matter your location.
                Streamline processes, create team rituals, 
                and watch productivity soar.
              </p>
              <button>Learn more</button>
            </div> 
            <div className="footer">
              <img src={require("./images/client-databiz.svg")} alt="Databiz" />
              <img src={require("./images/client-audiophile.svg")} alt="Audiophile" />
              <img src={require("./images/client-meet.svg")} alt="Meet" />
              <img src={require("./images/client-maker.svg")} alt="Maker" />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
