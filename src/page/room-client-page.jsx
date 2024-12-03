import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {supabase, uploadSupabase} from "../util/supabase.js";


function RoomClientPage() {

    const location = useLocation();

    const [rooms, setRooms] = useState([]);
    const [isRoomLoad, setRoomLoad] = useState(false)
    const [image, setImage] = useState([]);
    // const [roomId,setRoomId]=useState(null);
    const token = localStorage.getItem("token");



    const name=location.state.name;



    useEffect(() => {
        if (!isRoomLoad) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/rooms/"+name,{
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then((result) => {
                setRooms(result.data.result);
                setImage(result.data.result);
                console.log(result.data.result)
                setRoomLoad(true);
            }).catch((err) => {
                console.log(err);
            })
        } else {
            setRoomLoad(false);
        }

    }, [setRoomLoad, token]);





    console.log(image);


    return (
        <>

            <div
                className="bg-gradient-to-b from-blue-50 to-gray-100 p-6 min-h-screen flex flex-col gap-6">
                {rooms.map((room,index)=>(
                <div key={index}
                    className="bg-white border w-full border-gray-300 rounded-lg shadow-2xl p-4 flex overflow-hidden">

                    <div className="relative w-[350px] h-[250px]">
                        <img
                            id="slideshow-image"
                            src=""
                            alt="Room Photo"
                            className="w-full h-64 object-cover rounded-lg"
                        />


                        <button
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-fuchsia-900 opacity-50 text-white rounded-full p-2 shadow-lg hover:bg-fuchsia-700"
                            id="prev-btn"
                        ><FaChevronLeft/>

                        </button>

                        <button
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-fuchsia-900 opacity-50 text-white rounded-full p-2 shadow-lg hover:bg-fuchsia-700"
                            id="next-btn"
                        ><FaChevronRight/>

                        </button>
                    </div>

                    <div
                        className="px-6 py-4 flex-1">
                        <h2 className="text-2xl font-semibold text-fuchsia-900 mb-4">
                        Room ID: <span className="text-gray-800"></span>{room.roomId}
                            </h2>
                            <p className="text-gray-700 text-base mb-2">
                                <span className="font-bold text-fuchsia-700">Category:</span>{room.category}
                            </p>
                            <p className="text-gray-700 text-base mb-2">
                                <span className="font-bold text-fuchsia-700">Max Guests:</span>{room.maxGuests}
                            </p>
                            <p className="text-gray-700 text-base mb-2">
                                <span className="font-bold text-fuchsia-700">Available:</span>{room.available.toString()}
                                <span className="text-green-500 font-medium"> </span>
                            </p>
                            <p className="text-gray-700 text-base mb-2">
                                <span className="font-bold text-fuchsia-700">Special Description:</span>{room.specialDescription}
                            </p>
                            <p className="text-gray-700 text-base mb-4">
                                <span className="font-bold text-fuchsia-700">Notes:</span>{room.notes}
                            </p>
                        </div>

                </div>
                ))}
            </div>

        </>
    )

}

export default RoomClientPage