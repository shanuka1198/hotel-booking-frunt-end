import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import { useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import RoomImageSlide from "../component/all-room-image-slide.jsx";

function AllRooms(){


    const [rooms, setRooms] = useState([]);
    const [isRoomLoad, setRoomLoad] = useState(false)
    const [image, setImage] = useState([]);
    const [dateTime, setDateTime] = useState(new Date());
    const monthName = dateTime.toLocaleString("en-US", { month: "long" });
    const navigate=useNavigate();
    // const [roomId,setRoomId]=useState(null);
    const token = localStorage.getItem("token");





    useEffect(() => {
        if (!isRoomLoad) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/rooms", {
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

    }, [isRoomLoad, token]);



    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);


        return () => clearInterval(interval);
    }, []);


    function navigateRoomPage(roomId){
        navigate("/rooms/room-page",{
            state: {
                roomId:roomId,
            },
        });
    }

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
    };
    return(
        <>
            <div className=" w-full max-h-full">
                <div className="p-6 min-h-screen flex flex-col gap-6">
                    <div className="w-full my-5 flex justify-center h-[100px] ">
                        <h1 className="text-2xl text-black font-serif">ALL</h1>
                        <h1 className="text-6xl text-fuchsia-800 font-serif">ROOMS</h1>
                    </div>
                    <div className="w-full bg-fuchsia-900 flex justify-center h-0.5 "></div>
                    <div className="flex flex-row">
                        <div className="w-[1100px] h-full overflow-hidden">
                            {rooms.map((room, index) => (
                                <div key={index}
                                     className="bg-fuchsia-100 hover:bg-stone-100 transition-colors bg-opacity-5 border w-full border-gray-300 rounded-lg p-4 flex overflow-hidden">
                                    <div className="relative w-[350px] h-[250px]">
                                       <RoomImageSlide photo={room}/>
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
                                        <h2 className="text-2xl font-serif text-fuchsia-900 mb-4">
                                            Room ID: <span className="text-gray-800"></span>{room.roomId}
                                        </h2>
                                        <p className="text-gray-700 text-base mb-2">
                                            <span className="font-bold text-fuchsia-700">Category:</span>{room.category}
                                        </p>
                                        <p className="text-gray-700 text-base mb-2">
                                            <span
                                                className="font-bold text-fuchsia-700">Max Guests:</span>{room.maxGuests}
                                        </p>
                                        <p className="text-gray-700 text-base mb-2">
                                <span
                                    className="font-bold text-fuchsia-700">Available:</span>{room.available.toString()}
                                            <span className="text-green-500 font-medium"> </span>
                                        </p>
                                        <p className="text-gray-700 text-base mb-2">
                            <span
                                className="font-bold text-fuchsia-700">Special Description:</span> {truncateText(room.specialDescription, 20)}
                                        </p>
                                        <p className="text-gray-700 text-base mb-4">
                                            <span className="font-bold text-fuchsia-700">Notes:</span>{room.notes}
                                        </p>
                                    </div>
                                    <button onClick={() => {
                                        navigateRoomPage(room.roomId);
                                    }}
                                            type="submit"
                                            className="rounded-md h-10 my-[100px] bg-fuchsia-700 px-4 py-2 text-white font-semibold shadow-lg hover:bg-fuchsia-500 transition-all duration-300 ease-in-out"
                                    >
                                        See More
                                    </button>
                                </div>

                            ))}
                        </div>
                        <div
                            className="p-4 bg-fuchsia-700 bg-opacity-50 shadow shadow-black  rounded-xl flex right-1 flex-col">
                            <div
                                className="shadow flex flex-col justify-center items-center shadow-black px-2 w-[200px] rounded-3xl h-[200px] bg-fuchsia-900 bg-opacity-50">
                                <div className="text-gray-800 text-xl">{monthName},{dateTime.getFullYear()}</div>
                                <div
                                    className="w-[80px] text-white h-[80px] bg-fuchsia-900 rounded-full text-5xl flex justify-center items-center">
                                    <p> {dateTime.getDate()} </p>
                                </div>

                            </div>
                            <div
                                className="my-2 shadow shadow-black w-[200px] flex items-center justify-center text-2xl text-fuchsia-800  font-sans rounded-3xl h-[100px] bg-white">
                                <p>{dateTime.toLocaleTimeString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllRooms;