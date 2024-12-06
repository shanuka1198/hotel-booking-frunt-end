import {RiDeleteBin5Fill, RiEdit2Fill} from "react-icons/ri";
import {useEffect, useState} from "react";
import axios from "axios";
import RoomEdit from "./room-edit.jsx";
import {IoIosAddCircle} from "react-icons/io";
import RoomAdd from "./room-add.jsx";
import RoomTableRow from "../component/room-table-row.jsx";



function Rooms(){

    const [rooms,setRooms]=useState([]);
    const [isRoomLoad,setRoomLoad]=useState(false)
    const [isRoomEditModelOpen,setIsRoomEditModelOpen]=useState(false);
    const [isRoomAddModelOpen,setIsRoomAddModelOpen]=useState(false);
    const [activeRoom,setActiveRoom]=useState(null);
    const token=localStorage.getItem("token");






    useEffect(() => {
        if (!isRoomLoad) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/rooms", {
                headers: {
                    Authorization: "Bearer " + token
                }
            }).then((result) => {
                setRooms(result.data.result);
                setRoomLoad(true);

            }).catch((err) => {
                console.log(err);
            })
        }
    }, [isRoomLoad, token]);

    function deleteFeature(roomId,isChecked){
        if (isChecked===true) {
            axios
                .delete(import.meta.env.VITE_BACKEND_URL+"/api/featured/"+roomId)
                .then((result) => {
                    console.log("Feature deleted:", result);
                    setRoomLoad(false)
                })
                .catch((err) => {
                    console.error("Error deleting feature:", err);
                });
            return;
        }

        if (isChecked===false){
            axios
                .get(import.meta.env.VITE_BACKEND_URL+"/api/featured/"+roomId)
                .then((result) => {
                    console.log(result);
                    setRoomLoad(false)
                })
                .catch((err) => {
                    console.error(err);
                });
            return;
        }
    }

    function deleteRoom(roomId){
        axios
            .delete(import.meta.env.VITE_BACKEND_URL+"/api/rooms/"+roomId)
            .then((result) => {
                console.log(result);
                setRoomLoad(false)
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return(
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg my-10">
                    <thead>
                    <tr className="bg-fuchsia-900 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Room ID</th>
                        <th className="py-3 px-6 text-left">Category</th>
                        <th className="py-3 px-6 text-left">Max Guests</th>
                        <th className="py-3 px-6 text-left">Available</th>
                        <th className="py-3 px-6 text-left">Photos</th>
                        <th className="py-3 px-6 text-left">Special Description</th>
                        <th className="py-3 px-6 text-left">Notes</th>
                        <th className="py-3 px-6 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                    {rooms.map((room) => (
                        <RoomTableRow room={room} deleteRoom={deleteRoom} deleteFeature={deleteFeature} setIsRoomEditModelOpen={setIsRoomEditModelOpen}/>
                    ))}

                    </tbody>
                </table>
            </div>
            <div className="fixed bottom-32 right-32">
                <button onClick={() => {
                    setIsRoomAddModelOpen(true);
                }} className="flex rounded-2xl text-6xl text-fuchsia-950 hover:text-fuchsia-800 shadow shadow-black">
                    <IoIosAddCircle/>
                </button>
            </div>

            {
                isRoomEditModelOpen && (
                    <div className="h-[100vh] w-screen fixed top-0 bg-fuchsia-50 opacity-90">
                        <RoomEdit closeModel={() => {
                            setIsRoomEditModelOpen(false)
                        }} roomId={activeRoom.roomId} category={activeRoom.category} maxGuests={activeRoom.maxGuests}
                                  Available={activeRoom.available} Photos={activeRoom.photos} specialDescription={activeRoom.specialDescription}
                                  notes={activeRoom.notes}
                        />

                    </div>
                )
            }
            {
                isRoomAddModelOpen && (
                    <div className="h-[100vh] w-screen fixed top-0 bg-fuchsia-50 opacity-90">
                        <RoomAdd closeModel={() => {
                            setIsRoomAddModelOpen(false)
                        }}/>

                    </div>
                )
            }

        </>
    )
}

export default Rooms;