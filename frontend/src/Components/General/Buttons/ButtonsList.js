import React from 'react'
import { useEffect, useState } from 'react'
import "./dropdown.css"

const menu = [
  {
    name: "Course"
  },

  {
    name: "Boda"
  },

  {
    name: "Maro"
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


export default function Dropdown() {
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
        Courses
        <span className="material-symbols-outlined">
          {isOpen ? "x": "⇓"}
        </span>
      </button>
    </div>
  )
}
