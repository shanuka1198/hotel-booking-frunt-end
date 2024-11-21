import {useState} from "react";
import axios from "axios";


function Gallery(){

    const[image, setImage]=useState([]);

    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/gallery").then(
            (res)=>{
                setImage(res.data.list)
            }
        )


    return(
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg my-10">
                    <thead>
                    <tr className="bg-fuchsia-900 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Description</th>
                        <th className="py-3 px-6 text-left">Image</th>
                        <th className="py-3 px-6 text-left">Status</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                    {image.map((images, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{images.name}</td>
                            <td className="py-3 px-6 text-left">{images.description}</td>
                            <td className="py-3 px-6 text-left">
                                <img src={images.image} alt="Nature"
                                     className="h-16 w-16 object-cover rounded"/>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div>
                                    <button
                                        className="w-12 h-5 bg-fuchsia-900 text-amber-50 rounded-2xl hover:bg-fuchsia-700">Edit
                                    </button>
                                    <button
                                        className="w-[70px] h-5 bg-red-700 mx-5 text-amber-50 rounded-2xl hover:bg-red-600">Delete
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

export default Gallery;