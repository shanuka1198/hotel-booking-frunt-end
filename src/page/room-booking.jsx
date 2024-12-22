import axios from "axios";
import { useState, useEffect } from "react";
import BookingDetails from "../component/booking-details.jsx";

function RoomBooking() {
    const [rooms, setRooms] = useState([]);
    const [bookingTable, setBookingTable] = useState([]);
    const [categories, setCategories] = useState([]);
    const [catPrice, setCatprice] = useState("");
    const [name, setCatName] = useState("");
    const [roomId, setRoomId] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [category, setCategory] = useState("");
    const [notes, setNotes] = useState("");
    const [receivedBookingData, setReceivedBookingData] = useState("");

    const [editRoomId, setCatEditRoomId] = useState("");
    const [editStart, setCatEditStart] = useState("");
    const [editEnd, setCatEditEnd] = useState("");
    const [editCategory, setCatEditCategory] = useState("");
    const [editNotes, setCatEditNotes] = useState("");
    const [bookingId, setBookingId] = useState("");
    const [editPrice, setEditPrice] = useState("");

    const [categoryChange, setCategoryChange] = useState(false);
    const token = localStorage.getItem("token");

    // Fetch categories
    useEffect(() => {
        axios
            .get(import.meta.env.VITE_BACKEND_URL + "/api/category/")
            .then((res) => setCategories(res.data.result))
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    // Fetch rooms when category or categoryChange changes
    useEffect(() => {
        if (categoryChange && category) {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/rooms/category/" + category)
                .then((res) => {
                    if (res.data.message === "Rooms found") {
                        setRooms(res.data.result);
                        console.log("Rooms data:", res.data.result);
                    } else {
                        console.warn("No rooms found:", res.data.message);
                    }
                    setCategoryChange(false);
                })
                .catch((err) => console.error("Error fetching rooms:", err));
        }
    }, [category, categoryChange]);

    // Fetch category price
    useEffect(() => {
        if (name) {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/category/" + name)
                .then((res) => {
                    setCatprice(res.data.result.price);
                    setEditPrice(res.data.result.price);
                })
                .catch((err) => console.error(err));
        }
    }, [name]);

    // Create booking
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
                setBookingTable(result.data.result);
                console.log(result.data.result);
            })
            .catch((err) => console.error(err));
    }

    // Update booking
    function updateBooking(e) {
        if (!bookingId) {
            console.error("No booking ID found for update!");
            return;
        }

        const updateBooking = {
            roomId: editRoomId,
            start: editStart,
            end: editEnd,
            category: editCategory,
            notes: editNotes,
            price: editPrice,
        };

        axios
            .put(import.meta.env.VITE_BACKEND_URL + "/api/booking/" + bookingId, updateBooking, {
                headers: { Authorization: "Bearer " + token },
            })
            .then((result) => {
                setBookingTable(result.data.result);
                console.log(result.data.result);
            })
            .catch((err) => console.error(err));
    }

    const handleBookingData = (data) => {
        setReceivedBookingData(data);
        setCatEditRoomId(data?.roomId || "");
        setCatEditStart(data?.start.slice(0, 10) || "");
        setCatEditEnd(data?.end.slice(0, 10) || "");
        setCatEditCategory(data?.category || "");
        setCatEditNotes(data?.notes || "");
        setBookingId(data?.bookingId || "");
    };

    // Populate editing fields
    useEffect(() => {
        if (receivedBookingData) {
            setCatEditRoomId(receivedBookingData.roomId);
            setCatEditStart(receivedBookingData.start.slice(0, 10));
            setCatEditEnd(receivedBookingData.end.slice(0, 10));
            setCatEditCategory(receivedBookingData.category);
            setCatEditNotes(receivedBookingData.notes);
            setBookingId(receivedBookingData.bookingId);
        }
    }, [receivedBookingData]);

    return (
        <>
            <div className="w-full max-h-full">
                <div className="p-6 min-h-screen flex flex-col gap-6">
                    <div className="w-full my-5 flex justify-center h-[100px]">
                        <h1 className="text-2xl text-black font-serif">CREATE</h1>
                        <h1 className="text-6xl text-fuchsia-800 font-serif">BOOKING</h1>
                    </div>
                    <div className="w-full bg-fuchsia-900 flex justify-center h-0.5"></div>

                    <div className="mx-10 flex flex-row ">
                        <div
                            className="p-4 bg-fuchsia-100 bg-opacity-20 shadow shadow-black rounded-xl flex flex-col w-[700px]">
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
                                        value={editCategory}
                                        onChange={(e) => {
                                            setCategory(e.target.value);
                                            setCatName(e.target.value);
                                            setCatEditCategory(e.target.value);
                                            setCategoryChange(true)
                                        }}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Category
                                        </option>
                                        {categories.map((cat, index) => (
                                            <option key={index} value={cat.name}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="roomId" className="block text-gray-800 font-medium mb-2">
                                        Room ID
                                    </label>
                                    <select
                                        id="roomId"
                                        name="roomId"
                                        value={editRoomId || roomId}
                                        onChange={(e) => {
                                            setRoomId(e.target.value);
                                            setCatEditRoomId(e.target.value);
                                        }}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Room ID
                                        </option>
                                        {rooms.map((room, index) => (
                                            <option key={index} value={room.roomId}>
                                                {room.roomId}
                                            </option>
                                        ))}
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
                                        value={editStart || (receivedBookingData?.start ? receivedBookingData.start.slice(0, 10) : "")}
                                        onChange={(e) => {
                                            setStart(e.target.value);
                                            setCatEditStart(e.target.value);
                                        }}
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
                                        value={editEnd || (receivedBookingData?.end ? receivedBookingData.end.slice(0, 10) : "")}
                                        onChange={(e) => {
                                            setEnd(e.target.value);
                                            setCatEditEnd(e.target.value);
                                        }}
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
                                        value={editNotes}
                                        onChange={(e) => {
                                            setNotes(e.target.value);
                                            setCatEditNotes(e.target.value);
                                        }}
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
                                    <div className="text-center">
                                        <button onClick={updateBooking}
                                                className="bg-fuchsia-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-fuchsia-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                        >
                                            Update Booking
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>

                        <div>
                            <BookingDetails editRoomId={editRoomId} editStart={editStart} editEnd={editEnd}
                                            editCategory={editCategory} editNotes={editNotes}
                                            catPrice={catPrice} booking={bookingTable}
                                            onBookingData={handleBookingData}/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomBooking;
