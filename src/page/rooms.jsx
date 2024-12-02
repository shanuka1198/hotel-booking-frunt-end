import {RiDeleteBin5Fill, RiEdit2Fill} from "react-icons/ri";
import {useEffect, useState} from "react";
import axios from "axios";

function Rooms(){

    const [rooms,setRooms]=useState([]);
    const [isRoomLoad,setRoomLoad]=useState(false)
    const token=localStorage.getItem("token");
    // const [isChecked,setIsChecked]=useState();
    let isChecked;

    console.log(isChecked)

    useEffect(() => {
        if (!isRoomLoad){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/rooms",{
                headers:{
                    Authorization:"Bearer " + token
                }
            }).then((result)=>{
                setRooms(result.data.result);
                setRoomLoad(true);

            }).catch((err)=>{
                console.log(err);
            })
        }else {
            setRoomLoad(false);
        }

    }, [setRoomLoad, token]);

    function deleteFeature(roomId){
        if (isChecked===false) {
            axios
                .delete(import.meta.env.VITE_BACKEND_URL+"/api/featured/"+roomId)
                .then((result) => {
                    console.log("Feature deleted:", result);
                })
                .catch((err) => {
                    console.error("Error deleting feature:", err);
                });
            return;
        }

        if (isChecked===true){
            axios
                .get(import.meta.env.VITE_BACKEND_URL+"/api/featured/"+roomId)
                .then((result) => {
                    console.log("Feature fetched:", result);
                })
                .catch((err) => {
                    console.error("Error fetching feature:", err);
                });
            return;
        }
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
                    {rooms.map((room,index)=> (
                        <tr key={index}
                            className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{room.roomId}</td>
                            <td className="py-3 px-6 text-left">{room.category}</td>
                            <td className="py-3 px-6 text-left">{room.maxGuests}</td>
                            <td className="py-3 px-6 text-left">
                                <span className="text-green-500 font-medium">{room.available.toString()}</span>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <img
                                    src={room.photos}
                                    alt="Room Photo"
                                    className="h-16 w-16 object-cover rounded-md"
                                />
                            </td>
                            <td className="py-3 px-6 text-left">{room.specialDescription}</td>
                            <td className="py-3 px-6 text-left">{room.notes}</td>
                            <td className="py-3 px-6 text-left flex">
                                <div className="py-3 px-6 text-left flex ">

                                    <div className="flex items-center justify-center">
                                        <label className="relative cursor-pointer">
                                            <input
                                                type="checkbox"
                                                onChange={(e) => {
                                                   isChecked=e.target.checked;
                                                    deleteFeature(room.roomId);
                                                }}
                                                id="toggle"
                                                className="sr-only peer"
                                            />
                                            <div className="block w-8 h-4 bg-gray-300 rounded-full peer-checked:bg-fuchsia-700"></div>
                                            <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-4"></div>
                                        </label>
                                    </div>

                                    <button
                                        className="w-7 mx-3 h-5 bg-fuchsia-900 text-amber-50 rounded-xl hover:bg-fuchsia-700">
                                        <span className="flex justify-center"><RiEdit2Fill/></span>
                                    </button>
                                    <button
                                        className="w-7 h-5 bg-red-700 mx-5 text-amber-50 rounded-2xl hover:bg-red-600">
                                        <span className="flex justify-center"><RiDeleteBin5Fill/></span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Rooms;