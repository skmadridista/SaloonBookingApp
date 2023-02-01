import '../App.css';


const BookingList = (props) => {

<h1>Booking List</h1>
  return (
    <div>
      {props.isAuth ? (
        <div>
          <h2>Your Bookings</h2>
          <ul>
            {props.Bookings && props.bookings.map(booking => (
              <li key={booking.id}>
                {booking.service} on {booking.date} at {booking.time}
              </li>
            ))}
          </ul>
        </div>
      ) : (
          <div>
            <p>Please login to view your bookings.</p>
          </div>
        )}
    </div>
  );
};

export default BookingList;
