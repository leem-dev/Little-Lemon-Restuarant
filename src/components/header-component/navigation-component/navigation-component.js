import "../header-styles.css";

const Navigation = () =>    {

    const ulStyle = {
        margin: "0px",
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
                <li style={liStyle}><a href="/" style={aStyle}>Home</a></li>
                <li style={liStyle}><a href="/about" style={aStyle}>About</a></li>
                <li style={liStyle}><a href="/menu" style={aStyle}>Menu</a></li>
                <li style={liStyle}><a href="/reservation" style={aStyle}>Reservations</a></li>
                <li style={liStyle}><a href="/order" style={aStyle}>Order Online</a></li>
                <li style={liStyle}><a href="/login" style={aStyle}>Login</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;