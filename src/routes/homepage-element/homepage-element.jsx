import { Fragment } from "react";
import HeroImage from "../../assets/restauranfood.jpg";

import "./homepage-element-styles.css"

const HomePage = () =>   {
    const heroImg = {
        marginTop: "20px",
        width: "230px",
        height: "230px",
        borderRadius: "10px"
    }

    return (
        <Fragment>
            <div className="heroSection">
                <div className="left-section">
                    <h2 className="headerText">Little Lemon</h2>
                    <h4 className="chiText">Chicago</h4>
                    <p className="briefText">
                        We are a family owned Medditerranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button type="button" className="reserve-btn">Reserve a Table</button>
                </div>
                <div className="rightHeroSection">
                    <img src={HeroImage} alt="HeroImage" style={heroImg}/>
                </div>
            </div>
        </Fragment>
        
    )
}

export default HomePage;