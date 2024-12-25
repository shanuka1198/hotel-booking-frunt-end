import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import FeatureBookingDetails from "../component/feature-booking-details.jsx";

function FeaturedBooking() {
    const location = useLocation();
    const room = location.state.room;

    const category = room.category;
    const roomId = room.roomId;
    const notes = room.notes;
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [bookingTable, setBookingTable] = useState([]); // For created bookings
    // const [bookingDetails, setBookingDetails] = useState([]); // For created bookings

    const email=bookingTable.email;

    const [catPrice, setCatprice] = useState("");
    const token = localStorage.getItem("token");




    useEffect(() => {
        if (room.category) {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/category/" + category)
                .then((res) => {
                    setCatprice(res.data.result.price);
                })
                .catch((err) => console.error(err));
        }
    }, [room.category]);



    function createBooking() {
        if (!catPrice) {
            console.error("Price is not defined yet!");
            return;
        }

        const booking = { roomId, start, end, category, notes, price: catPrice };
        axios
            .post(import.meta.env.VITE_BACKEND_URL + "/api/booking", booking, {
                headers: { Authorization: "Bearer " + token },
            })
            .then((result) => {
                setBookingTable(result.data.result); // Append new booking
                console.log(result.data.result);
            })
            .catch((err) => console.error(err));
    }


    // useEffect(() => {
    //     if (bookingTable.email) {
    //         axios
    //             .get(import.meta.env.VITE_BACKEND_URL + "/api/booking/" + bookingTable.email, {
    //                 headers: {
    //                     Authorization: "Bearer " + token,
    //                 },
    //             })
    //             .then((result) => {
    //                 setBookingDetails(result.data.result);
    //                 console.log("Booking details fetched:", result.data.result);
    //             })
    //             .catch((err) => {
    //                 console.error("Error fetching booking details:", err);
    //
    //             });
    //     } else {
    //         console.warn("Email is not provided.");
    //     }
    // }, [token, bookingTable.email]);

    return (
        <>
            <div className="w-full max-h-full">
                <div className="p-6 min-h-screen flex flex-col gap-6">
                    <div className="w-full my-5 flex justify-center h-[100px]">
                        <h1 className="text-2xl text-black font-serif">CREATE</h1>
                        <h1 className="text-6xl text-fuchsia-800 font-serif">BOOKING</h1>
                    </div>
                    <div className="w-full bg-fuchsia-900 flex justify-center h-0.5"></div>

                    <div className="mx-10 flex flex-row">
                        <div
                            className="p-4 bg-fuchsia-100 bg-opacity-20 shadow shadow-black rounded-xl flex flex-col w-[700px]"
                        >
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    createBooking();
                                }}
                            >
                                <div className="mb-4">
                                    <label htmlFor="category" className="block text-gray-800 font-medium mb-2">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={category}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Category
                                        </option>
                                        <option value={category}>{category}</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="roomId" className="block text-gray-800 font-medium mb-2">
                                        Room ID
                                    </label>
                                    <select
                                        id="roomId"
                                        name="roomId"
                                        value={roomId}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Room ID
                                        </option>
                                        <option value={roomId}>{roomId}</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="start" className="block text-gray-800 font-medium mb-2">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        id="start"
                                        name="start"
                                        value={start}
                                        onChange={(e) => setStart(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="end" className="block text-gray-800 font-medium mb-2">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        id="end"
                                        name="end"
                                        value={end}
                                        onChange={(e) => setEnd(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="notes" className="block text-gray-800 font-medium mb-2">
                                        Notes
                                    </label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        rows="4"
                                        value={notes}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        placeholder="Enter any additional notes..."
                                    ></textarea>
                                </div>

                                <div className="flex justify-center gap-[200px]">
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="bg-fuchsia-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        >
                                            Submit Booking
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <FeatureBookingDetails email={email} bookingTable={bookingTable}  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeaturedBooking;
