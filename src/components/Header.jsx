import React from "react";
import Navbar from "./Navbar";

function Header(){
    return(
        <div className="headerDiv">
            <Navbar />
            <h1 className="headerHeading">WE ARE CREATIVES</h1>
        </div>
    );
}

export default Header;