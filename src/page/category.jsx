import {useEffect, useState} from "react";
import axios from "axios";
import EditCategory from "./edit-category.jsx";
import { IoIosAddCircle } from "react-icons/io";
import AddCategory from "./add-category.jsx";


function Category(){
    const token=localStorage.getItem("token");

    if(token == null){
        window.location.href = "/login"
    }


    const [categories,setCategory]=useState([]);
    const [categoryIsLoaded,setCategoryIsLoaded]=useState(false);
    const [isModelOPen,setIsModelOPen]=useState(false);
    const [isAddModelOpen,setIsAddModelOpen]=useState(false);
    const [activeCategory,setActiveCategory]=useState(null);

    useEffect(() => {
        if (!categoryIsLoaded){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/category").then((res)=>{
                setCategory(res.data.result)
                setCategoryIsLoaded(true);
            }).catch((err)=>{
                console.log(err);
            })
        }else {
            setCategoryIsLoaded(false);
        }

    }, [categoryIsLoaded,token]);


    function deleteCategory(name){
        axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/category/"+name ,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then(()=>{
            setCategoryIsLoaded(false)
        }).catch(()=>{
            console.log("can't delete")
        })
    }

    function modelOpen(){
        setIsModelOPen(true);

    }

    function addModelOpen(){
        setIsAddModelOpen(true)
    }


    return(
        <>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg my-10">
                    <thead>
                    <tr className="bg-fuchsia-900 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-left">Features</th>
                        <th className="py-3 px-6 text-left">description</th>
                        <th className="py-3 px-6 text-left">image</th>
                        <th className="py-3 px-6 text-left">Status</th>


                    </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">

                    {categories.map((category,index)=>(
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">{category.name}</td>
                        <td className="py-3 px-6 text-left">{category.price}</td>
                            <td className="py-3 px-6 text-left">
                                <ul>
                                    {category.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="py-3 px-6 text-left">{category.description}</td>
                            <td className="py-3 px-6 text-left">
                                {category.image ? (
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="h-16 w-16 object-cover"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                        <td className="py-3 px-6 text-left">
                            <div>
                                <button onClick={() => {
                                    setActiveCategory(category)
                                    modelOpen();
                                }}
                                        className="w-12 h-5 bg-fuchsia-900 text-amber-50 rounded-2xl hover:bg-fuchsia-700">Edit
                                </button>
                                <button onClick={() => {
                                    deleteCategory(category.name)
                                }}
                                        className="w-[70px] h-5 bg-red-700 mx-5 text-amber-50 rounded-2xl hover:bg-red-600">Delete
                                </button>
                            </div>
                        </td>

                        </tr>
                    ))}

                    </tbody>
                </table>
                </div>
            <div className="fixed my-[120px] right-20">
                <button onClick={()=>{
                    addModelOpen();
                }} className="flex rounded-2xl text-6xl text-fuchsia-950 hover:text-fuchsia-800 shadow shadow-black"><IoIosAddCircle /></button>
            </div>
            {
                isModelOPen && (
                    <div className="h-[100vh] w-screen fixed top-0 bg-fuchsia-50 opacity-90">
                        <EditCategory refresh={() => {
                            setCategoryIsLoaded(false)
                        }} closeModel={() => {
                            setIsModelOPen(false)
                        }} name={activeCategory.name} price={activeCategory.price} features={activeCategory.features}
                                      description={activeCategory.description}/>

                    </div>
                )

            }

            {
                isAddModelOpen && (
                    <div className="h-[100vh] w-screen fixed top-0 bg-fuchsia-50 opacity-90">
                        <AddCategory closeModel={() => {
                            setIsAddModelOpen(false)
                        }} />

                    </div>
                )

            }


        </>
    )
}

export default Category;