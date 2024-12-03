import Header from "../../component/header.jsx";
import CategoryCard from "../../component/category-card.jsx";
import Userdata from "../../component/userdata.jsx";
import Menus from "../../component/menus.jsx";
import {useState} from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
import FeaturedRoom from "../../component/featured-room.jsx";
import {useNavigate} from "react-router-dom";

function HomePage() {
    const token=localStorage.getItem("token");
    const navigate=useNavigate();
    const[isCardLoad,setIsCardLoad]=useState(false);

    if(token == null){
        window.location.href = "/login"
    }

    function navigateContactus(){
        navigate("/contact-us")
    }

    return (
        <>
            <div className="relative w-full h-screen overflow-y-hidden ">
                <Header/>
                <div className="absolute w-full top-1 h-full flex flex-col ">

                    <div className="relative  bg-black">
                        <div className="absolute flex justify-center items-center w-full p-6">
                            <Menus/>
                            <Userdata
                                imageLink="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                                name="Shanuka"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div
                            className="mt-[150px] w-[600px] h-[110px] bg-opacity-35  bg-white shadow-4xl rounded-3xl p-6 ">
                            <div className="flex items-center justify-between space-x-6">

                                <div className="flex flex-col w-1/3">
                                    <label className="text-fuchsia-950 font-semibold mb-2">Starting Date:</label>
                                    <input
                                        type="date"
                                        className="border  rounded-xl p-2 bg-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-900"
                                    />
                                </div>


                                <div className="flex flex-col w-1/3">
                                    <label className="text-fuchsia-950 font-semibold mb-2">End Date:</label>
                                    <input
                                        type="date"
                                        className="border rounded-xl bg-fuchsia-200  p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-900"
                                    />
                                </div>


                                <div className="flex flex-col w-1/3">
                                    <label className="text-fuchsia-950 font-semibold mb-2">Select Option:</label>
                                    <select
                                        className="border  rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-900 bg-fuchsia-200 text-gray-700">
                                        <option>Deluxe</option>
                                        <option>Luxury</option>
                                        <option>Normal</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-5 flex justify-center">
                        <button
                            type="submit"
                            className="rounded-md bg-fuchsia-700 px-4 py-2 text-white font-semibold shadow-lg hover:bg-fuchsia-500 transition-all duration-300 ease-in-out"
                        >
                            Book Now
                        </button>
                    </div>
                    <div className="mt-[30px]  text-center">
                        <h1 className="text-white text-6xl font-bold">Welcome to the Anantaya</h1>
                        <h2 className="text-amber-50 mt-4">"From breathtaking views to luxurious amenities, book your perfect stay today
                            <br/>and let your dream vacation begin."</h2>
                    </div>
                    <div className="flex justify-center my-3">
                        <button onClick={()=>{
                            setIsCardLoad(true);
                        }} className="w-[150px] h-9 text-xs border hover:scale-105 duration-300 ease-in-out transform rounded text-blue-700 bg-white border-white">Explore Rooms</button>
                        <button onClick={()=>{
                            navigateContactus();
                        }} className=" mx-3 w-[100px] hover:animate-none hover:scale-105 duration-300 ease-in-out transform rounded-2xl text-white font-bold text-xs h-9 border-2 animate-pulse underline">Contact Us</button>
                    </div>

                    {isCardLoad && (
                        <div className="flex justify-center my-5">
                            <div
                                className="w-[55px] h-[55px] rounded-full bg-fuchsia-300 shadow-xl shadow-black text-white flex justify-center items-center text-5xl bg-opacity-10 animate-bounce">
                                <RxDoubleArrowDown/>
                            </div>
                        </div>
                    )
                    }

                </div>
            </div>

            {isCardLoad && (
                <div  className="w-full h-screen my-[100px] bg-white">
                    <div className="w-full h-[330px] rounded-br-full rounded-tl-full bg-fuchsia-900 bg-opacity-50">
                        <div className=" mx-[60px] flex flex-col justify-center">
                            <h1 className="text-2xl text-black font-serif">OUR</h1>
                            <h1 className="text-6xl text-fuchsia-800 font-serif">ROOMS</h1>
                            <div className="w-full h-0.5 bg-fuchsia-300"></div>
                        </div>
                        <CategoryCard/>
                    </div>
                    <div className=" my-[250px] w-full h-[500px] bg-fuchsia-300 rounded-3xl bg-opacity-50 overflow-hidden">
                        <div className=" mx-[60px]  flex-col justify-center">
                            <h1 className="text-2xl text-black font-serif text-end">FEATURED</h1>
                            <h1 className="text-6xl text-fuchsia-800 font-serif text-end">ROOMS</h1>
                            <div className="w-full h-0.5 bg-fuchsia-300"></div>
                        </div>
                        <div className="absolute w-full p-4 overflow-hidden">
                            <FeaturedRoom/>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default HomePage;