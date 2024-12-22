import axios from "axios";
import {useEffect, useState} from "react";

function BookingDetails(props){
    const [bookingDetails,setBookingDetails]=useState([]);

    const token = localStorage.getItem("token");
    // eslint-disable-next-line react/prop-types
    const email=props.booking;






    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/booking/"+email,{
            headers: {
                Authorization: "Bearer " + token,
            },
        }).then((result) => {
            setBookingDetails(result.data.result)
            console.log(result.data.result)
            console.log(email)

        })
            .catch((err) => {
                console.log(err);
            });

    }, [token]);

    const handleEdit = (booking) => {
        // You can send the booking data back to the parent
        // eslint-disable-next-line react/prop-types
        props.onBookingData(booking);  // Call the callback function passed as a prop
    };

    function deleteBooking(bookingId){
        axios
            .delete(import.meta.env.VITE_BACKEND_URL + "/api/booking/" + bookingId, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((result) => {
                console.log(result.data.result);
            })
            .catch((err) => {
                console.error(err);
            });
    }


    return(
        <>
            <div className="mx-5 w-[500px] h-[600px] bg-fuchsia-100 bg-opacity-20 shadow shadow-black rounded-3xl overflow-y-scroll">
                <h2 className="text-center my-2 font-sans text-fuchsia-950 text-xl">Booking Details</h2>
                {bookingDetails.map((booking,index)=> (
                    <div key={index} className="mx-6 my-10 ">
                        <ul>
                            <li className="my-3">Booking No:- {booking.bookingId}</li>
                            <li className="my-3">Room No:- {booking.roomId}</li>
                            <li className="my-3">Email:- {booking.email}</li>
                            <li className="my-3">First Name:- {booking.firstName}</li>
                            <li className="my-3">Whatsapp:- {booking.whatsApp}</li>
                            <li className="my-3">Phone:- {booking.phone}</li>
                            <li className="my-3">Start Date:- {booking.start}</li>
                            <li className="my-3">End Date:- {booking.end}</li>
                            <li className="my-3">Category:- {booking.category}</li>
                            <li className="my-3">Notes:- {booking.notes}</li>
                            <li className="my-3 text-green-700">Status:- {booking.status}</li>
                            <li className="my-3">Price:- {booking.price}</li>
                        </ul>
                        <div className="text-center flex">
                            <button onClick={()=>{
                                handleEdit(booking)
                            }}
                                type="submit"
                                className="bg-fuchsia-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            >
                                Edit Booking
                            </button>
                            <button onClick={()=>{
                                deleteBooking(booking.bookingId)
                            }}
                                type="submit"
                                className="mx-10 bg-red-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            >
                                Delete Booking
                            </button>
                        </div>


                    </div>
                ))}
            </div>
        </>
    )
}

export default BookingDetails;