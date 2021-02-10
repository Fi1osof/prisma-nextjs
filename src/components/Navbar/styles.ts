#navbar {
    position: fixed;
    z-index: 9999;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    background-color: #202736;
  }
  
  #navbar.bgActive {
    background: #181d23;
  }
  
  #navbar .navWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    padding: 0 2rem;
  }
  
  #navbar .brand {
    font-size: 1.6rem;
    color: #fafafa;
    cursor: default;
  }
  
  /***** Menu Button *****/
  .menuButton {
    position: relative;
    height: 22px;
    width: 30px;
    outline: none;
  }
  
  .menuButton span,
  .menuButton span::before,
  .menuButton span::after {
    position: absolute;
    content: '';
    width: 30px;
    height: 3px;
    background: #fafafa;
    transition: 500ms cubic-bezier(0.77, 0, 0.175, 1);
  }
  
  .menuButton span {
    position: relative;
    display: block;
    top: 50%;
    transform: translate(0,-50%);
  }
  
  .menuButton span::before {
    top: -8px;
  }
  
  .menuButton span::after {
    top: 8px;
  }
  
  .menuButton:hover > span,
  .menuButton:hover > span::before,
  .menuButton:hover > span::after {
    background: #f300b4;
  }
  
  .menuButton.active > span  {
    background: transparent;
  }
  
  .menuButton.active > span::before  {
    transform: rotate(-225deg);
    top: 0px;
  }
  
  .menuButton.active > span::after  {
    transform: rotate(225deg);
    top: 0px;
  }
  
  @media only screen and (max-width: 849px) {
    #navbar {
      background: #181d23aa;
    }
  }