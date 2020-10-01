import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {SidebarData} from './sidebardata';





const sidebar = () => {
    return (
        <div>
        <ul>
            {SidebarData.map((item, index) => {
    return (
      <li key={index} className={item.cName}>
        <Link to={item.path}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
      </li>
    )} 

    )}
    </ul>
        </div>
)}

export default sidebar;






