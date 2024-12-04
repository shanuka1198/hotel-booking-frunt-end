import {IoIosCloseCircle} from "react-icons/io";
import axios from "axios";
import {useState} from "react";
import {supabase, uploadSupabase} from "../util/supabase.js";

function RoomAdd(props){

    const [roomId,setRoomId]=useState(0);
    const [category,setCategory]=useState("");
    const [maxGuests,setMaxGuests]=useState(0);
    const [available,setAvailable]=useState(true);
    const [photos,setPhotos]=useState([]);
    const [specialDescription,setSpecialDescription]=useState("");
    const [imageLink,setImageLink]=useState("");
    const [notes,setNotes]=useState("");
    const token=localStorage.getItem("token");


    function closeAddModel(){
        // eslint-disable-next-line react/prop-types
        props.closeModel();
    }

    function imageUpload(){
        uploadSupabase(photos).then((res)=>{
            console.log(res)
        })
        const url=supabase.storage.from("images").getPublicUrl(photos.name);
        setImageLink(url.data.publicUrl);
        console.log(imageLink)
    }

    function createRoom(){

            const roomDetails = {
                roomId,
                category,
                maxGuests: parseInt(maxGuests, 10), // Convert maxGuests to a number
                available, // Ensure available is a boolean
                photos:imageLink,
                specialDescription,
                notes,
            };

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/rooms",roomDetails,{
            headers:{
                Authorization:"Bearer "+token
            }}).then((result)=>{
                console.log(result);
            }).catch((err)=>{
                console.log(err);
            })
    }

    return(
        <>
            <div className="flex h-[700px] w-full bg-white">
                <div className="mx-[300px] overflow-y-scroll rounded-lg p-5 my-5 justify-center border border-fuchsia-800 bg-fuchsia-50 shadow-2xl shadow-black">
                    <div className="flex">
                        <h3 className="text-xl font-bold mb-6 text-center w-full h-10 rounded-2xl">
                            Add Room
                        </h3>
                        <button
                            onClick={() => {
                                closeAddModel();
                            }}
                            className="w-10 h-5 rounded-3xl text-3xl text-red-500 hover:text-red-700"
                        >
                            <IoIosCloseCircle />
                        </button>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            createRoom();
                        }}
                        id="roomForm"
                        className="space-y-1 my-1 w-[500px]"
                    >
                        <div>
                            <label htmlFor="roomId" className="block text-gray-700 font-semibold">
                                Room ID
                            </label>
                            <input
                                type="text"
                                id="roomId"
                                name="roomId"
                                onChange={(e) => setRoomId(e.target.value)}
                                className="w-full px-2 py-1 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-gray-700 font-semibold">
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-2 py-1 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="maxGuests" className="block text-gray-700 font-semibold">
                                Max Guests
                            </label>
                            <input
                                type="number"
                                id="maxGuests"
                                name="maxGuests"
                                onChange={(e) => setMaxGuests(e.target.value)}
                                className="w-full px-2 py-1 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="available" className="block text-gray-700 font-semibold">
                                Available
                            </label>
                            <select
                                id="available"
                                onChange={(e) => setAvailable(e.target.value)}
                                className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                            >
                                <option value="true">Available</option>
                                <option value="false">Not Available</option>
                            </select>
                        </div>

                        <div>
                            <label
                                className="block text-gray-700 font-semibold"
                                htmlFor="specialDescription"
                            >
                                Special Description
                            </label>
                            <textarea
                                onChange={(e) => setSpecialDescription(e.target.value)}
                                id="specialDescription"
                                rows="3"
                                placeholder="Enter any special description"
                                className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-semibold" htmlFor="notes">
                                Notes
                            </label>
                            <textarea
                                onChange={(e) => setNotes(e.target.value)}
                                id="notes"
                                rows="3"
                                placeholder="Enter additional notes"
                                className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="photos" className="block text-gray-700 font-semibold">
                                Upload Photos
                            </label>
                            <input
                                type="file"
                                id="photos"
                                name="photos"
                                multiple
                                onChange={(e) => setPhotos(e.target.files[0])}
                                className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                            />
                        </div>

                        <div className="text-center">
                            <button onClick={()=>{
                                imageUpload();
                            }}
                                type="submit"
                                className="w-full my-5 bg-fuchsia-900 text-white font-bold py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            >
                                Create Room
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RoomAdd;