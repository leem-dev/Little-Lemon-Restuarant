import React from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Logo from "../../assets/Logo .svg"
import Navigation from "./navigation-component/navigation-component"

const Header = () =>    {
    return (
        <Router>
            <div>
            <img src={Logo} alt="Logo" />
            <Navigation />
            </div>
        </Router>
    )
}

export default Header;