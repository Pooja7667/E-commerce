import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Link } from "react-router-dom";
import "../Style/nav.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="main-box">
      <div className="navbar">
        <nav>
          <DehazeIcon className="dehaze-icon" onClick={handleOpen} />
          <div className="logo">
            <div>LOGO</div>
          </div>

          <div className="link">
            <Link to="home">Home</Link>
            <Link to="buty">Beauty</Link>
            <Link to="man">Men</Link>
            <Link to="kids">Kids</Link>
            <Link to="electroic">Electronics</Link>
            <Link to="wemon">Women</Link>
          </div>

          <div className="search">
            <input type="text" placeholder="search..." />
            <SearchIcon />
          </div>

          <div className="icons">
            <div className="icon">
              <WorkOutlineIcon /> Cart
            </div>
            <div className="icon">
              <FavoriteIcon /> Wishlist
            </div>
            <div className="icon">
              <PersonAddAlt1Icon />
              Profile
            </div>
          </div>
        </nav>
      </div>

      {open && (
        <div className="phone">
          <div>
            <Link to="home">Home</Link>
            <Link to="buty">Beauty</Link>
            <Link to="man">Men</Link>
            <Link to="kids">Kids</Link>
            <Link to="electroic">Electronics</Link>
            <Link to="wemon">Women</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
