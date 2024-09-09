import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="open-btn" onClick={toggleSidebar}>
        <span class="material-symbols-outlined menu">menu</span>
      </button>

      <div
        className={isOpen ? "overlay active" : "overlay"}
        onClick={toggleSidebar}
      ></div>

      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
