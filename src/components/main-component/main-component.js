import { Router, Route, Switch } from "react-router-dom";
import HomePage from "../../routes/homepage-element/homepage-element";
import BookingPage from "../../routes/booking-element/booking-element";

const Main = () =>  {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <HomePage />
                    </Route>
                    <Route path="/booking">
                        <BookingPage />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Main;