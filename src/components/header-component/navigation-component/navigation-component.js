import React from "react";
import { Link } from "react-router-dom";
import "../header-styles.css";

const Navigation = ({ className }) =>    {

    const ulStyle = {
        margin: "0px",
        marginRight: "20px",
        padding: "0px",
        display: "flex",
        justifyContent: "space-between"
    }

    const liStyle = {
        listStyle: "none",
        fontSize: "17px",
        fontWeight: "700",
    }

    const aStyle = {
        color: "black",
        textDecoration: "none",
    }

    return (
        <nav className="nav-body" >
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link to="/" style={aStyle}>Home</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/about" style={aStyle}>About</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/menu" style={aStyle}>Menu</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/reservation" style={aStyle}>Reservations</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/order" style={aStyle}>Order Online</Link>
                </li>
                <li style={liStyle}>
                    <Link to="/login" style={aStyle}>Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;