import {RiDeleteBin5Fill, RiEdit2Fill} from "react-icons/ri";
import {useEffect, useState} from "react";
import axios from "axios";

function Rooms(){

    const [rooms,setRooms]=useState([]);
    const [isRoomLoad,setRoomLoad]=useState(false)
    const token=localStorage.getItem("token");




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
                                    src="public/2.jpg"
                                    alt="Room Photo"
                                    className="h-16 w-16 object-cover rounded-md"
                                />
                            </td>
                            <td className="py-3 px-6 text-left">{room.specialDescription}</td>
                            <td className="py-3 px-6 text-left">{room.notes}</td>
                            <td className="py-3 px-6 text-left flex">
                                <div className="py-3 px-6 text-left flex ">
                                    <button
                                        className="w-7 h-5 bg-fuchsia-900 text-amber-50 rounded-xl hover:bg-fuchsia-700">
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