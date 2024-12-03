import {IoIosCloseCircle} from "react-icons/io";

function RoomEdit(props){

    function closeRoomModel(){
        // eslint-disable-next-line react/prop-types
        props.closeModel();
    }



    return(
        <>
        <div className="flex h-[700px] w-full bg-white">
            <div
                className="mx-[300px] overflow-y-scroll rounded-lg p-5 my-5 justify-center border border-fuchsia-800 bg-fuchsia-50 shadow-2xl shadow-black">
                <div className="flex">
                    <h3 className="text-xl font-bold mb-6 text-center w-full h-10 rounded-2xl">Add Gallery</h3>
                    <button onClick={()=>{
                        closeRoomModel();
                    }} className="w-10 h-5 rounded-3xl text-3xl text-red-500 hover:text-red-700">
                        <IoIosCloseCircle/>
                    </button>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault()

                }}
                      id="galleryForm" className="space-y-1 my-1 w-[500px]">

                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Room Id</label>
                        <input type="text" id="name" name="name"
                               className="w-full px-2 py-1 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                               required/>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Category</label>
                        <input type="text" id="name" name="name"
                               className="w-full px-2 py-1 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                               required/>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Max Guests</label>
                        <input type="text" id="name" name="name"
                               className="w-full px-2 py-1 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                               required/>
                    </div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold">Available</label>
                    <select
                        id="available"
                        className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                    >
                        <option value="">Select Availability</option>
                        <option value="true">Available</option>
                        <option value="false">Not Available</option>
                    </select>
                    <div>
                        <label className="block text-gray-700 font-semibold" htmlFor="specialDescription">Special
                            Description</label>
                        <textarea
                            id="specialDescription"
                            rows="3"
                            placeholder="Enter any special description"
                            className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold" htmlFor="notes">Notes</label>
                        <textarea
                            id="notes"
                            rows="3"
                            placeholder="Enter additional notes"
                            className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-gray-700 font-semibold">Image</label>
                        <input type="file" id="image" name="image"
                               className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"/>
                    </div>

                    <div className="text-center">
                        <button  type="submit"
                                className="w-full my-5 bg-fuchsia-900 text-white font-bold py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                            Add Gallery
                        </button>
                    </div>
                </form>
            </div>
        </div>

        </>
    )
}

export default RoomEdit;