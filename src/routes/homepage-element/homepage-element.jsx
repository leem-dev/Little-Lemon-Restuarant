import { Fragment } from "react";
import HeroSection from "./hero-section/hero-section-element";
import Specials from "./special-section/special-section-element";


const HomePage = () =>   {

    return (
        <Fragment>
            <HeroSection />
            <Specials />
        </Fragment>
    )
}

export default HomePage;