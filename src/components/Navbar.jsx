import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar(props) {


  useEffect(() => {
    async function fetchData() {
    }
    fetchData();
  }, [])

  return (
    <div id="navbar" className="border border-black  flex justify-between  m-4  px-4  rounded-lg mx-10">
      <div id="navbar-main-menu" className="columns-2 p-6 flex">
        <NavLink id="navlink-home" className="font-bold p-6 navlink" to="/">
          Quizzes
        </NavLink>
        <NavLink id="navlink-projects" className="p-6" to="/azure/questions">
          Azure
        </NavLink>
      </div>
      <div id="navbar-auth-menu" className="p-6 columns-2">
      </div>
    </div>
  );
}

export default Navbar;