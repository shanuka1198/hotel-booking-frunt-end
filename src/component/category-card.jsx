import {useState} from "react";
import axios from "axios";

function CategoryCard(){

    const [category,setCategory]=useState([]);

        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/category").then((res)=>{
            setCategory(res.data.result)
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 my-2">
                {category.map((categorys, index) => (
                    <div
                        key={index}
                        className="bg-white  w-[300px]  h-[380px] shadow-black rounded-lg shadow-lg overflow-hidden mx-auto
            transition-all duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src={categorys.image}
                            alt="Category Image"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-bold  text-fuchsia-900 ">{categorys.name}</h1>
                            <p className="text-sm text-gray-700 mb-4">
                                Features: <span className="text-gray-600">{categorys.features}</span>
                            </p>
                            <p className="text-sm text-gray-600 mb-4">{categorys.description}</p>
                            <button
                                className="w-full bg-fuchsia-900 text-white py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}

export default CategoryCard;