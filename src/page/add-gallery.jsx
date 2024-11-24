import {IoIosCloseCircle} from "react-icons/io";
import {useState} from "react";
import axios from "axios";
import {supabase, uploadSupabase} from "../util/supabase.js";

function EditGallery(props){


    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [image,setImage]=useState(null);
    const [imageLink,setImageLink]=useState(null);



    const token=localStorage.getItem("token");

    if(token == null){
        window.location.href = "/login"
    }

    function closeAddModel(){
        // eslint-disable-next-line react/prop-types
        props.closeAddModel();
    }



    function imageUpload(){
        uploadSupabase(image).then((res)=>{
            console.log(res)
        })
        const url=supabase.storage.from("images").getPublicUrl(image.name);
        setImageLink(url.data.publicUrl);
        console.log(imageLink)


    }

    const imageItem={
        name,
        image:imageLink,
        description

    }

    function addGallery(){
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/gallery/",imageItem,{
            headers:{
                Authorization:"Bearer " + token
            }
        }).then((result)=>{
            console.log(imageLink);
            console.log(name);
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <>
            <div className="flex h-screen w-full bg-white">
                <div
                    className="mx-[300px] rounded-lg p-5 my-5 justify-center border border-fuchsia-800 bg-fuchsia-50 shadow-2xl shadow-black">
                    <div className="flex">
                        <h3 className="text-xl font-bold mb-6 text-center w-full h-10 rounded-2xl">Add Gallery</h3>
                        <button onClick={()=>{
                            closeAddModel();
                        }}
                            className="w-10 h-5 rounded-3xl text-3xl text-red-500 hover:text-red-700">
                            <IoIosCloseCircle/>
                        </button>
                    </div>

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        addGallery();
                    }}
                          id="galleryForm" className="space-y-1 my-1 w-[500px]">

                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                            <input type="text" id="name" name="name" value={name}
                                   onChange={(e) => {
                                       setName(e.target.value)
                                   }}
                                   className="w-full px-2 py-1 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                   required/>
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-gray-700 font-semibold">Image</label>
                            <input type="file" id="image" name="image" onChange={(e) => {
                                setImage(e.target.files[0])
                            }}
                                   className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"/>
                        </div>

                        <div>
                            <label htmlFor="description"
                                   className="block text-gray-700 font-semibold">Description</label>
                            <textarea id="description" name="description" rows="4" value={description}
                                      onChange={(e) => {
                                          setDescription(e.target.value)
                                      }}
                                      className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                      required></textarea>
                        </div>

                        <div className="text-center">
                            <button onClick={()=>{
                                imageUpload()
                            }} type="submit"
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

export default EditGallery;