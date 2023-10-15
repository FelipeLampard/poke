import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const inputClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <>
      <Navbar className="d-flex justify-content-between px-5">
        <Navbar.Brand>
          <img width="50" src="https://w7.pngwing.com/pngs/579/122/png-transparent-mystic-pokemon-go-logo-pokemon-go-decal-pokemon-black-white-t-shirt-pokemon-go-blue-logo-video-game-thumbnail.png" alt="" />
        </Navbar.Brand>
        <div>
          <NavLink className={inputClass + " m-3"} to="/">
            Home
          </NavLink>
          <NavLink className={inputClass + " ml-3"} to="/pokemons">
            Pokemones
          </NavLink>
        </div>
      </Navbar>
    </>
  );
};

export default Menu;

