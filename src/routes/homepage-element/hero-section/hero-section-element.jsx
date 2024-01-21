import HeroImage from "../../../assets/restauranfood.jpg";

import "./hero-section-element-styles.css";


const HeroSection = () =>   {

    

    return (
        <>
            <div className="heroSection">
                <div className="left-section">
                    <h2 className="headerText">Little Lemon</h2>
                    <h4 className="chiText">Chicago</h4>
                    <p className="briefText">
                        We are a family owned Medditerranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button type="button" className="reserve-btn btn">Reserve a Table</button>
                </div>
                <div className="right-hero-section">
                    <img src={HeroImage} alt="HeroImage" className="hero-image"/>
                </div>
            </div>
        </>
    )
}

export default HeroSection;