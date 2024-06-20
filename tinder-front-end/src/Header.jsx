import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person"; 
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header"> 
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" /> 
      </IconButton>

      <img className="header__logo" src='https://www.tinderpressroom.com/file.php/178055/flame-gradient-RGB_1000px.jpg?thumbnail=modal' alt="" />
 
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" /> 
      </IconButton>
    </div>
  );
};

export default Header;
