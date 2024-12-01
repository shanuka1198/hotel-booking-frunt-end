import {useEffect, useState} from "react";
import axios from "axios";



function FeaturedRoom() {
        const [rooms, setRooms] = useState([]);
        const [isRoomLoad, setRoomLoad] = useState(false);

        useEffect(() => {
            if (!isRoomLoad) {
                axios
                    .get(import.meta.env.VITE_BACKEND_URL + "/api/featured")
                    .then((result) => {
                        setRooms(result.data.result);
                        setRoomLoad(true);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }, [isRoomLoad]);

        return (
            <>
                <div className="w-screen">
                    <div
                        className=" mx-5 my-5  inline-flex gap-x-16 ">
                        {rooms.map((room, index) => (
                            <div
                                key={index}
                                className="w-[300px] h-[420px] max-w-[100%] shadow-black rounded-lg shadow-lg bg-white card-animate-slide"
                            >
                                <img
                                    src="public/header/place2.jpg"
                                    alt="Category Image"
                                    className="w-full h-[200px] object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <p className="text-gray-700 text-base mb-2">
                                        <span className="font-bold text-sm text-fuchsia-700">Category: </span>
                                        {room.category}
                                    </p>
                                    <p className="text-gray-700 text-base mb-2">
                                        <span className="font-bold text-fuchsia-700">Max Guests: </span>
                                        {room.maxGuests}
                                    </p>
                                    <p className="text-gray-700 text-base mb-2">
                                        <span className="font-bold text-fuchsia-700">Special Description: </span>
                                        {room.specialDescription}
                                    </p>
                                    <button
                                        className="w-full bg-fuchsia-900 text-white py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </>
        );
}

export default FeaturedRoom;