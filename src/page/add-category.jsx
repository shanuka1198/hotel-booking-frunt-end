import {IoIosCloseCircle} from "react-icons/io";
import axios from "axios";
import {useState} from "react";
import {uploadSupabase,supabase} from "../util/supabase.js";



function AddCategory(props){




    const [name,setName] = useState("");


    const [price, setPrice] = useState("");

    const [features, setFeatures] = useState("");

    const [description, setDescription] = useState("");

    const [image, setImage] = useState(null);

    const [imageLink, setImageLink] = useState(null);

    const token=localStorage.getItem("token");

    function closeAddCategory(){
        // eslint-disable-next-line react/prop-types
        props.closeModel();
    }



    function imageUpload(){
        uploadSupabase(image).then((res)=>{
                console.log(res)
        })
        const url=supabase.storage.from("images").getPublicUrl(image.name);
        setImageLink(url.data.publicUrl);
        console.log(url.data.publicUrl);

    }



    const category={
        name,
        price,
        features,
        description,
        image:imageLink
    };
    function createCategory(){
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/category",category,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then((result)=>{
            console.log(imageLink)
            console.log("created")
            console.log(result);
        }).catch(()=>{
            console.log("can't created")
        })
    }

    return(
        <>
            <div className=" flex h-screen w-full bg-white">
                <div
                    className="mx-[300px] rounded-lg p-5 my-5 justify-center border border-fuchsia-800 bg-fuchsia-50 shadow-2xl shadow-black">
                    <div className="flex">
                        <h3 className="text-xl font-bold mb-6 text-center w-full h-10  rounded-2xl">Create
                            Category</h3>
                        <button onClick={() => {
                            closeAddCategory()
                        }} className="w-10 h-5 rounded-3xl text-3xl text-red-500 hover:text-red-700"><IoIosCloseCircle/></button>
                    </div>

                    {
                        <form
                            // key={name}
                            onSubmit={(e) => {
                                createCategory()

                        }}
                            id="categoryForm" className="space-y-1 my-1 w-[500px]">

                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                                <input type="text" id="name" name="name"
                                       className="w-full px-2 py-1  border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                        onChange={(e)=>{
                                            setName(e.target.value);
                                        }}
                                       required/>
                            </div>


                            <div>
                                <label htmlFor="price" className="block text-gray-700 font-semibold">Price</label>
                                <input type="text" id="price" name="price"

                                       className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                       onChange={(e)=>{
                                           setPrice(e.target.value)
                                       }}
                                       required/>
                            </div>


                            <div>
                                <label htmlFor="features"
                                       className="block text-gray-700 font-semibold">Features</label>
                                <input type="text" id="features" name="features"
                                       onChange={(e)=>{
                                           setFeatures(e.target.value)
                                       }}
                                       className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                       required/>
                                <small className="text-gray-500">Enter features separated by commas (e.g., WiFi, Air
                                    Conditioning, TV)</small>
                            </div>


                            <div>
                                <label htmlFor="description"
                                       className="block text-gray-700 font-semibold">Description</label>
                                <textarea id="description" name="description" rows="4"
                                          onChange={(e)=>{
                                              setDescription(e.target.value)
                                          }}
                                          className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                          required></textarea>
                            </div>


                            <div>
                                <label htmlFor="image" className="block text-gray-700 font-semibold">Image
                                    URL</label>
                                <input type="file" id="image" name="image"
                                    // placeholder={image}
                                       onChange={(e)=>{
                                           setImage(e.target.files[0])
                                       }}
                                       className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"/>
                            </div>
                            <div className="text-center">
                                <button onClick={()=>{
                                    imageUpload()
                                }} type="submit"
                                        className="w-full my-5 bg-fuchsia-900 text-white font-bold py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">Submit
                                    Category
                                </button>
                            </div>
                        </form>

                    }

                </div>
            </div>
        </>
    )
}

export default AddCategory;