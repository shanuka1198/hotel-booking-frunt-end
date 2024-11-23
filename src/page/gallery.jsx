import {useEffect, useState} from "react";
import axios from "axios";
import {RiDeleteBin5Fill, RiEdit2Fill} from "react-icons/ri";
import EditGallery from "./edit-gallery.jsx";
import {IoIosAddCircle} from "react-icons/io";
import AddGallery from "./add-gallery.jsx";


function Gallery(){

    const[image, setImage]=useState([]);
    const [imagesLoaded,setImageLoaded]=useState(false);
    const [isModelOpen,setIsModelOpen]=useState(false);
    const [activeGallery,setActiveGallery]=useState(null);
    const [isAddModelOpen,setIsAddModelOpen]=useState(false);


    const token=localStorage.getItem("token");

    if(token == null){
        window.location.href = "/login"
    }

    function modelOPen(){
        setIsModelOpen(true)
    }

    function AddModelOpen(){
        setIsAddModelOpen(true)
    }


    useEffect(() => {
        if (!imagesLoaded){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/gallery").then(
                (res)=>{
                    setImage(res.data.list)
                    setImageLoaded(true)
                }
            ).catch((err)=>{
                console.log(err);
            })
        }else{
            setImageLoaded(false)
        }

    }, [imagesLoaded],token);




    function deleteImages(name){

        if (!token) {
            console.error("No token found. Please log in.");
            return;
        }

        axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/gallery/"+ name ,{
            headers:{
                Authorization:"Bearer " +token
            }
        })
            .then((res) => {
                setImageLoaded(false);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }


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
                                    <button onClick={() => {
                                        setActiveGallery(images);
                                        modelOPen();
                                    }}
                                            className="w-7 h-5 bg-fuchsia-900 text-amber-50 rounded-xl hover:bg-fuchsia-700">
                                        <span className="flex justify-center"><RiEdit2Fill/></span>
                                    </button>
                                    <button onClick={() => {
                                        deleteImages(images.name)
                                    }}
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
            <div className="fixed bottom-32 right-32">
                <button onClick={() => {
                    AddModelOpen();
                }} className="flex rounded-2xl text-6xl text-fuchsia-950 hover:text-fuchsia-800 shadow shadow-black">
                    <IoIosAddCircle/></button>
            </div>

            {
                isModelOpen && (
                    <div className="h-[100vh] w-screen fixed top-0 bg-fuchsia-50 opacity-90">
                        <EditGallery closeModel={() => {
                            setIsModelOpen(false)
                        }} name={activeGallery.name} description={activeGallery.description} image={activeGallery.image}/>
                    </div>
                )
            }
            {
                isAddModelOpen && (
                    <div className="h-[100vh] w-screen fixed top-0 bg-fuchsia-50 opacity-90">
                        <AddGallery closeAddModel={() => {
                            setIsAddModelOpen(false)}}/>
                    </div>
                )
            }
        </>
    )
}

export default Gallery;