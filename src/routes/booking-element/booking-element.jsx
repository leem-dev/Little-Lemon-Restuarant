import BookingForm from "./booking-form-element";

const BookingPage = (props) =>   {
    return (
        <BookingForm availNewTimes={props.availNewTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
    )
}

export default BookingPage;