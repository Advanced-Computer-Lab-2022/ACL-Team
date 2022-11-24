import React , {useState} from 'react'
import "../css/sidebar.css"




export default function Sidebar() {
    const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Roadmap",
			icon: "../Images/Icon.svg",
		},
		{
			text: "Backlog",
			icon: "../Images/Icon (2).svg",
		},
		{
			text: "Board",
			icon: "Images/Icon (3).svg",
		},
		{
			text: "Reports",
			icon: "Images/Icon (4).svg",
		},
		{
			text: "Issues",
			icon: "Images/Icon (5).svg",
		},
		{
			text: "Releases",
			icon: "Images/Icon (6).svg",
		},
		{
			text: "Pages",
			icon: "Images/Icon (7).svg",
		},
		{
			text: "Add Item",
			icon: "Images/Icon (8).svg",
		},
        {
            text:"Project settings",
            icon:"Images/Icon (9).svg",
        }
	];
    return (
        <div
        className={
            isExpanded
                ? "side-nav-container"
                : "side-nav-container side-nav-container-NX"
        }
    >
        <div className="nav-upper">
            <div className="nav-heading">
                {isExpanded && (
                    <div className="nav-brand">
                        <img src="Images/avatar1.svg" alt="" srcset="" />
                        Mr Marwan
                    </div>
                )}
                {isExpanded && (
                    <div className = "nav-subheading">
                        Software Dev
                    </div>
                )}
                <button
                    className={
                        isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
                    }
                    onClick={() => setExpendState(!isExpanded)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className="nav-menu">
                {menuItems.map(({ text, icon }) => (
                    <a
                        className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                        href="#"
                    >
                        <img className="icons/Icon.png" src={icon} alt="" srcset="" />
                        {isExpanded && <p>{text}</p>}
                    </a>
                ))}
            </div>
        </div>
        <div className="nav-footer">
            {isExpanded && (
                <div className="nav-details">
                    <img
                        className="nav-footer-avatar"
                        src="icons/admin-avatar.svg"
                        alt=""
                        srcset=""
                    />
                    <div className="nav-footer-info">
                        <p className="nav-footer-user-name"></p>
                        <p className="nav-footer-user-position"></p>
                    </div>
                </div>
            )}
            <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
        </div>
    </div>
);
  
}

