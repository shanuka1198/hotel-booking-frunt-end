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

            <div className="flex gap-2 my-2 ">
                {rooms.map((room, index) => (
                    <div key={index}
                         className="w-[400px] h-[450px] shadow-black rounded-lg shadow-lg bg-white animate-slide">
                        <img
                            src={room.image}
                            alt="Category Image"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-bold text-fuchsia-900">{room.roomId}</h1>
                            <p className="text-gray-700 text-base mb-2">
                                <span className="font-bold text-sm text-fuchsia-700">Category: </span>
                                {room.category}
                            </p>
                            <p className="text-gray-700 text-base mb-2">
                                <span className="font-bold text-fuchsia-700">Max Guests:</span>
                                {room.maxGuests}
                            </p>
                            <p className="text-gray-700 text-base mb-2">
                                <span className="font-bold text-fuchsia-700">Special Description:</span>
                                {room.specialDescription}
                            </p>
                            <button
                                className="w-full bg-fuchsia-900 text-white py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
export default FeaturedRoom;