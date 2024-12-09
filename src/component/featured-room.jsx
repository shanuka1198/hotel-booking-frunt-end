import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";



function FeaturedRoom() {
        const [rooms, setRooms] = useState([]);
        const [isRoomLoad, setRoomLoad] = useState(false);
        const navigate=useNavigate();

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

    function navigateRoomPage(roomId){
        navigate("/rooms/featured-rooms",{
            state:{
                roomId:roomId
            }
        })
    }
    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };
        return (
            <>
                <div className="w-screen">
                    <div className="mx-5 my-5 inline-flex gap-x-16">
                        {rooms.map((room, index) => (
                            <div
                                key={index}
                                className="w-[300px] h-[420px] max-w-[100%] shadow-xl rounded-lg border bg-white card-animate-slide"
                            >
                                <img
                                    src={room.photos}
                                    alt="Category Image"
                                    className="w-full h-[200px] object-cover rounded-t-lg"
                                />
                                <div className="p-4 flex flex-col justify-between h-[220px]">
                                    <div>
                                        <p className="text-gray-700 text-base mb-2">
                                            <span className="font-bold text-sm text-fuchsia-700">Category: </span>
                                            {room.category}
                                        </p>
                                        <p className="text-gray-700 text-base mb-2">
                                            <span className="font-bold text-fuchsia-700">Max Guests: </span>
                                            {room.maxGuests}
                                        </p>
                                        <p
                                            className="text-gray-700 text-base mb-2 overflow-hidden text-ellipsis"
                                            style={{
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                WebkitLineClamp: 3
                                            }}
                                        >
                                            <span className="font-bold text-fuchsia-700">Special Description: </span>
                                            {truncateText(room.specialDescription, 10)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            navigateRoomPage(room.roomId);
                                        }}
                                        className="w-full flex justify-center bg-fuchsia-900 text-white py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
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