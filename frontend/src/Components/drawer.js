import React from 'react'

export default function Drawer() {

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
    
          return (
            <div>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: \"Lato\", sans-serif;\n}\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n" }} />
              <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onclick={closeNav()}>×</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
              <h2>Animated Sidenav Example</h2>
              <p>Click on the element below to open the side navigation menu.</p>
              <span style={{fontSize: '30px', cursor: 'pointer'}} onclick={openNav()}>☰ open</span>
            </div>
          );
        }
  
 
  
  
