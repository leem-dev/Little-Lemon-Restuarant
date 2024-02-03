import BookingForm from "./booking-form-element";

const BookingPage = props => {
  return (
    <BookingForm
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      submitForm={props.submitForm}
      loading={props.loading}
      fetchAPI={props.fetchAPI}
    />
  );
};

export default BookingPage;
