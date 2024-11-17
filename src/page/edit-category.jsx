import { IoIosCloseCircle } from "react-icons/io";
import { useState} from "react";
import axios from "axios";


function EditCategory(props) {


    function closeModel() {
        // eslint-disable-next-line react/prop-types
        props.closeModel()
    }



    // eslint-disable-next-line react/prop-types
    const [name,setName] = useState(props.name);

    // eslint-disable-next-line react/prop-types
    const [price, setPrice] = useState(props.price); // Make sure price is defined

    // eslint-disable-next-line react/prop-types
    const [features, setFeatures] = useState(props.features);

    // eslint-disable-next-line react/prop-types
    const [description, setDescription] = useState(props.description);

    const [image, setImage] = useState(null);


    function updateCategory() {

        const token=localStorage.getItem("token");

        if(token == null){
            window.location.href = "/login"
        }



            const updatedCategory = {
                name,
                price,
                features,
                description,
                image,
            };

            axios.patch(import.meta.env.VITE_BACKEND_URL+"/api/category/"+name,updatedCategory,{
                headers:{
                    Authorization:"Bearer "+token
                }
            }).then(()=>{

                // eslint-disable-next-line react/prop-types
             props.refresh();

            }).catch((err)=>{
                console.log(err)
            })
        }


        return (
            <>
                <div className=" flex h-screen w-full bg-white">
                    <div
                        className="mx-[300px] rounded-lg p-5 my-5 justify-center border border-fuchsia-800 bg-fuchsia-50 shadow-2xl shadow-black">
                        <div className="flex">
                            <h3 className="text-xl font-bold mb-6 text-center w-full h-10  rounded-2xl">Edit
                                Category</h3>
                            <button onClick={() => {
                                closeModel();

                            }} className="w-10 h-5 rounded-3xl text-3xl text-red-500 hover:text-red-700 "><IoIosCloseCircle/></button>
                        </div>

                        {
                            <form
                                // key={name}
                                id="categoryForm" className="space-y-1 my-1 w-[500px]">

                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                                    <input type="text" id="name" name="name"
                                           className="w-full px-2 py-1  border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                           value={name} onChange={(e)=>{setName(e.target.value)}}
                                           required/>
                                </div>


                                <div>
                                    <label htmlFor="price" className="block text-gray-700 font-semibold">Price</label>
                                    <input type="text" id="price" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}
                                           className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"

                                           required/>
                                </div>


                                <div>
                                    <label htmlFor="features"
                                           className="block text-gray-700 font-semibold">Features</label>
                                    <input type="text" id="features" name="features"
                                           value={features} onChange={(e)=>{setFeatures(e.target.value)}}
                                           className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                           required/>
                                    <small className="text-gray-500">Enter features separated by commas (e.g., WiFi, Air
                                        Conditioning, TV)</small>
                                </div>


                                <div>
                                    <label htmlFor="description"
                                           className="block text-gray-700 font-semibold">Description</label>
                                    <textarea id="description" name="description" rows="4"
                                              value={description} onChange={(e)=>{setDescription(e.target.value)}}
                                              className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                              required></textarea>
                                </div>


                                <div>
                                    <label htmlFor="image" className="block text-gray-700 font-semibold">Image
                                        URL</label>
                                    <input type="text" id="image" name="image"
                                           // placeholder={image}
                                           className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"/>
                                </div>


                                <div className="text-center">
                                    <button onClick={() => {
                                        updateCategory()
                                    }} type="submit"
                                            className="w-full my-5 bg-fuchsia-900 text-white font-bold py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">Edit
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
// }

export default EditCategory;