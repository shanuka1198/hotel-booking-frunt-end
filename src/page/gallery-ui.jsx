// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import axios from "axios";


function GalleryUi(){

    const [gallery,setGallery]=useState([]);

    axios.get(import.meta.env.VITE_BACKEND_URL+"/api/gallery").then(
        (res)=>{
            setGallery(res.data.list)
        }
    ).catch((err)=>{
        console.log(err);
    })
    return(
        <>

            <div className="relative bg-cover bg-center h-[50vh]">
                <div className="absolute inset-0 bg-fuchsia-900 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">Gallery</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 my-2">
                {gallery.map((gallerys, index) => (
                    <div
                        key={index}
                        className="bg-fuchsia-200 w-[400px]  h-[500px] shadow-black rounded-lg shadow-lg overflow-hidden mx-auto
            transition-all duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src={gallerys.image}
                            alt="Category Image"
                            className="w-full h-[400px] object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-bold text-gray-800">{gallerys.name}</h1>

                            <p className="text-sm text-gray-600 mb-4">{gallerys.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GalleryUi;