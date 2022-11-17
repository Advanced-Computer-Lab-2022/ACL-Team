import React from 'react'
import img1 from '../../images/settings.png'
import img2 from '../../images/question-circle.png'
import img3 from '../../images/notification.png'
import img4 from '../../images/Union.png'
import img5 from '../../images/app-switcher.png'

import './navbar.css'
import Dropdown from '../Buttons/ButtonsList'


export default function Navbar() {
  return (
    <div>
    <div className="Navbar">
      <button className="sidemenu_button"><img className="setting_icon" src={img5} alt='setting_icon'/></button>
      <h1 className="web_title">LearnHub</h1>
      <input type="text" className="SearchBar" placeholder="🔍 Search" />
      
      <div>
        <ul className="navbar_paths">
          <li className="dropdown">
            <Dropdown/>
          </li>
          <li>
            <a href="/">Tracks</a>
          </li>
          <li>
            <a href="/">Certificates</a>
          </li>
          <li>
            <a href="/">Progress</a>
          </li>
          <li>
            <a href="/">Plans</a>
          </li>
          <li>
            <a href="/">Enterprise</a>
          </li>
        </ul>
      </div>

      <div className="navbar_actions">
        <ul>
            <li>
              <a href='/'><img className="setting_icon" src={img4} alt='profile_icon'/></a>
            </li>
            <li>
              <a href='/'><img className="setting_icon" src={img3} alt='notification_icon'/></a>
            </li>
            <li>
              <a href='/'><img className="setting_icon" src={img2} alt='help_icon'/></a>
            </li>
            <li>
              <a href='/'><img className="setting_icon" src={img1} alt='setting_icon'/></a>
            </li>
            <li>
              <a href='/'><img className="setting_icon" src={img1} alt='setting_icon'/></a>
            </li>
        </ul>
      </div>
    </div>
    </div>
  )
}