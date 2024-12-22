import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import CategoryRoomImageSlide from "../component/category-room-image.slide.jsx";


function RoomPage() {

    const [rooms, setRooms] = useState([]);
    const [isRoomLoad, setRoomLoad] = useState(false)
    const navigate=useNavigate();
    const token = localStorage.getItem("token");

    const location = useLocation();

    const roomId = location.state.roomId;

    useEffect(() => {
        if (!isRoomLoad) {
            axios.get(import.meta.env.VITE_BACKEND_URL +"/api/rooms/id/" + roomId, {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then((result) => {

                console.log(result.data.resultRoom);

                setRooms([result.data.resultRoom]);

                setRoomLoad(true);

            }).catch((err) => {
                console.log(err);
                setRoomLoad(false);
            })
        }
    }, [isRoomLoad, token]);




    return (
        <>
            <div>
                {rooms.length > 0 ? (
                    rooms.map((room, index) => (
                        <div key={index} className="min-h-screen p-5">
                            <div className="relative">

                               <CategoryRoomImageSlide photo={room}/>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <h1 className="text-white text-4xl font-bold">
                                        {room.category}
                                    </h1>
                                </div>
                            </div>

                            <div className="container mx-auto p-6">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="p-6">
                                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                            Max Guests: {room.maxGuests}
                                        </h2>

                                        <p className="text-gray-600 text-lg mb-6">
                                            {room.specialDescription}
                                        </p>
                                        <p className="text-gray-600 text-lg mb-6">
                                            {room.notes}
                                        </p>


                                        <div className="flex justify-between items-center">
                                            <button
                                                onClick={() => {

                                                }}
                                                className="py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No rooms available {rooms.length}</p>  // Fallback if no rooms data is available

                )}
            </div>

        </>
    )
}

export default RoomPage;