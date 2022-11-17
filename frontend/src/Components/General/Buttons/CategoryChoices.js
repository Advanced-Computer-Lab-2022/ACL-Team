import React from 'react'
import { useEffect, useState } from 'react'
import "./categoryChoices.css"

const menu = [
  {
    name: "🔘 It & software"
  },

  {
    name: "🔘 Development & Data Science"
  },

  {
    name: "🔘 Personal Development"
  },
  {
    name: "🔘 Health & Fitness"
  },
  {
    name: "🔘 Computer Science"
  },
  {
    name: "🔘 Marketing & Finance"
  }
  // Han7ot ba2y el items ely 3yzenha fl dropdown
]

const MenuButton = ({name}) => (
  <button>
    <span className="material-symbols-outlined">
      {name}
    </span>
  </button>
);


export default function Dropdown2() {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    document.body.addEventListener("click",
    () => setIsOpen(false));
  });

  return (
    <div className="dropdown">
      <div className={`menu ${isOpen ? "open" : ""}`} >
        {menu.map((item) => (
          <MenuButton
            name = {item.name}
          />
        ))}
        
      </div>
      <button onClick={handleClick}>
        Category
        <span className="material-symbols-outlined">
          {isOpen ?"":""}
        </span>
      </button>
    </div>
  )
}