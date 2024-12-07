import {RiDeleteBin5Fill, RiEdit2Fill} from "react-icons/ri";
import {useEffect, useState} from "react";
import axios from "axios";

function RoomTableRow(props){
    const [isFeatured,setIsFeatured]=useState(false)
    // eslint-disable-next-line react/prop-types
    const room=props.room;
    // eslint-disable-next-line react/prop-types
    const setIsRoomEditModelOpen=props.setIsRoomEditModelOpen;
    // eslint-disable-next-line react/prop-types
    const setActiveRoom=props.setActiveRoom;
    // eslint-disable-next-line react/prop-types
    const  deleteRoom=props. deleteRoom;
    // eslint-disable-next-line react/prop-types
    const deleteFeature=props.deleteFeature;


    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        axios.get(import.meta.env.VITE_BACKEND_URL + "/api/featured/byId/"+room.roomId)
                .then((result) => {
                console.log(result);
                 const ans=result.data.result.length>0
                    setIsFeatured(ans);
                })
                .catch((err) => {
                    console.log(err);
                });

    }, []);

    return(
        <>
            {/* eslint-disable-next-line react/prop-types */}
            <tr key={room.roomId}
                className="border-b border-gray-200 hover:bg-gray-100">
                {/* eslint-disable-next-line react/prop-types */}
                <td className="py-3 px-6 text-left whitespace-nowrap">{room.roomId}</td>
                {/* eslint-disable-next-line react/prop-types */}
                <td className="py-3 px-6 text-left">{room.category}</td>
                {/* eslint-disable-next-line react/prop-types */}
                <td className="py-3 px-6 text-left">{room.maxGuests}</td>
                <td className="py-3 px-6 text-left">
                    {/* eslint-disable-next-line react/prop-types */}
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
                                    onChange={() => {
                                        deleteFeature(room.roomId,isFeatured)
                                        setIsFeatured(!isFeatured)
                                    }}
                                    id="toggle"
                                    className="sr-only peer"
                                    checked={isFeatured}
                                />
                                <div
                                    className="block w-8 h-4 bg-gray-300 rounded-full peer-checked:bg-fuchsia-700"></div>
                                <div
                                    className="absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-4"></div>
                            </label>
                        </div>

                        <button onClick={() => {
                            setIsRoomEditModelOpen(true)
                            setActiveRoom(room);
                        }}
                                className="w-7 mx-3 h-5 bg-fuchsia-900 text-amber-50 rounded-xl hover:bg-fuchsia-700">
                            <span className="flex justify-center"><RiEdit2Fill/></span>
                        </button>
                        <button
                            onClick={() => {
                                deleteRoom(room.roomId)
                            }}
                            className="w-7 h-5 bg-red-700 mx-5 text-amber-50 rounded-2xl hover:bg-red-600">
                            <span className="flex justify-center"><RiDeleteBin5Fill/></span>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default RoomTableRow;