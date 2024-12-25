import {Link, Route, Routes} from "react-router-dom";
import Booking from "../../page/booking.jsx";
import Category from "../../page/category.jsx";
import { IoMdBookmark } from "react-icons/io";
import {BiSolidCategoryAlt, BiSolidMessageDots} from "react-icons/bi";
import User from "../../page/user.jsx";
import { FaUserGroup } from "react-icons/fa6";
import Gallery from "../../page/gallery.jsx";
import { RiGalleryFill } from "react-icons/ri";
import Feedback from "../../page/feedback.jsx";
import Rooms from "../../page/rooms.jsx";
import { MdBedroomChild } from "react-icons/md";

function AdminPage(){
    const token=localStorage.getItem("token");

    if(token == null){
        window.location.href = "/login"
    }


    return(
        <>
            <div className="flex">
                <div className="relative w-[230px] h-screen bg-fuchsia-800 overflow-y-hidden">
                    <div className="my-[40px]">
                        <div>
                            <img src="public/header/Anantra-removebg-preview.png" alt=""/>
                        </div>
                        <ul>
                        <Link to="/admin/booking">
                                <div
                                    className="w-full h-10 flex justify-center items-center rounded-l-2xl my-8 bg-fuchsia-800 hover:bg-fuchsia-200 cursor-pointer">
                                    <li className="flex items-center"><IoMdBookmark />Booking</li>
                                </div>
                            </Link>

                            <Link to="/admin/category">
                                <div
                                    className="w-full h-10 flex justify-center items-center rounded-l-2xl my-8 bg-fuchsia-800 hover:bg-fuchsia-200 cursor-pointer">
                                    <li  className="flex items-center"><BiSolidCategoryAlt />Categories</li>
                                </div>
                            </Link>

                            <Link to="/admin/rooms">
                                <div className="w-full h-10 flex justify-center items-center rounded-l-2xl my-8 bg-fuchsia-800 hover:bg-fuchsia-200 cursor-pointer">
                                    <li className="flex items-center"><MdBedroomChild />Room</li>
                                </div>
                            </Link>

                            <Link to="/admin/user">
                                <div className="w-full h-10 flex justify-center items-center rounded-l-2xl my-8 bg-fuchsia-800 hover:bg-fuchsia-200 cursor-pointer">
                                    <li className="flex items-center"><FaUserGroup />Users</li>
                                 </div>
                            </Link>

                            <Link to="/admin/feedback">
                                <div
                                    className="w-full h-10 flex justify-center items-center rounded-l-2xl my-8 bg-fuchsia-800 hover:bg-fuchsia-200 cursor-pointer">
                                    <li className="flex items-center"><BiSolidMessageDots />FeedBack</li>
                                </div>
                            </Link>

                            <Link to="/admin/gallery">
                                <div className="w-full h-10 flex justify-center items-center rounded-l-2xl my-8 bg-fuchsia-800 hover:bg-fuchsia-200 cursor-pointer">
                                    <RiGalleryFill /><li>Gallery</li>
                                </div>
                            </Link>
                        </ul>
                    </div>

                </div>
                <div className="w-full h-screen bg-white overflow-y-scroll">
                    <Routes path="/*">
                        <Route path="/booking" element={<Booking/>}></Route>
                        <Route path="/category" element={<Category/>}></Route>
                        <Route path="/user" element={<User/>}></Route>
                        <Route path="/gallery" element={<Gallery/>}></Route>
                        <Route path="/feedback" element={<Feedback/>}></Route>
                        <Route path="/rooms" element={<Rooms/>}></Route>
                    </Routes>
                </div>
            </div>

        </>
    )
}

export default AdminPage;