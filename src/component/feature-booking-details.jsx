import { useEffect, useState } from "react";
import axios from "axios";

function FeatureBookingDetails(props) {
    const [bookingDetails, setBookingDetails] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading state

    // eslint-disable-next-line react/prop-types
    const bookingTable = props.bookingTable;
    const token = localStorage.getItem("token");

    const email=props.email;



    useEffect(() => {
        if (email) {
            setLoading(true);  // Start loading data
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/booking/" + email, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((result) => {
                    setBookingDetails(result.data.result); // Set the data
                    console.log("Booking details fetched:", result.data.result);
                })
                .catch((err) => {
                    console.error("Error fetching booking details:", err);
                })
                .finally(() => {
                    setLoading(false); // Stop loading after fetch
                });
        } else {
            console.warn("Email is not provided.");
            setLoading(false); // Stop loading if email is not provided
        }
    }, [token,email]); // Dependency array ensures the hook is triggered on mount and when `bookingTable.email` changes

    return (
        <>
            <div
                className="mx-5 w-[500px] h-[600px] bg-fuchsia-100 bg-opacity-20 shadow shadow-black rounded-3xl overflow-y-scroll"
            >
                <h2 className="text-center my-2 font-sans text-fuchsia-950 text-xl">
                    Booking Details
                </h2>


                {loading ? (
                    <p className="text-center my-4 text-gray-700">Loading...</p>
                ) : (
                    <>
                        {bookingDetails.length > 0 ? (
                            bookingDetails.map((booking, index) => (
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
                                        <button
                                            onClick={() => {
                                                // console.log("Edit Booking", booking);
                                            }}
                                            type="submit"
                                            className="bg-fuchsia-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        >
                                            Edit Booking
                                        </button>
                                        <button
                                            onClick={() => {
                                                // console.log("Delete Booking ID:", booking.bookingId);
                                            }}
                                            type="submit"
                                            className="mx-10 bg-red-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        >
                                            Delete Booking
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center my-4 text-gray-700">
                                No booking details available.
                            </p>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default FeatureBookingDetails;
