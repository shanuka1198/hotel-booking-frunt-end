import axios from "axios";
import { useState } from "react";
import {IoIosCloseCircle} from "react-icons/io";
import {useNavigate} from "react-router-dom";


function AddUser() {

    const navigate=useNavigate();
    function closeUser(){
        navigate("/login");
    }



    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [type, setType] = useState("customer");
    const [whatsApp, setWhatsapp] = useState("");
    const [phone, setPhone] = useState("");

    const users = {
        username,
        email,
        password,
        firstName,
        lastName,
        type,
        whatsApp,
        phone,
    };

    function createUse() {
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/users/", users)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="w-full h-screen bg-fuchsia-300 flex justify-center overflow-y-scroll">
                <div className="my-10 w-[500px] h-[900px] shadow-2xl shadow-black max-w-lg bg-white rounded-lg p-8">

                    <div className="flex justify-center">
                        <h2 className="text-xl font-bold mb-6 text-center w-full h-10  rounded-2xl">User Registration</h2>
                        <button onClick={() => {
                            closeUser();
                        }} className="w-10 h-5 rounded-3xl text-3xl text-red-500 hover:text-red-700"><IoIosCloseCircle/></button>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-gray-700">Username</label>
                            <input type="text" id="username" name="username" required
                                   onChange={(e) => {
                                       setUsername(e.target.value);
                                   }}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                   }}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input type="password" id="password" name="password" required
                                   onChange={(e) => {
                                       setPassword(e.target.value);
                                   }}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                            <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                            <input type="text" id="firstName" name="firstName" required
                                   onChange={(e) => {
                                       setFirstname(e.target.value);
                                   }}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                            <input type="text" id="lastName" name="lastName" required
                                   onChange={(e) => {
                                       setLastname(e.target.value);
                                   }}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-gray-700">User Type</label>
                            <select id="type" name="type" required
                                    onChange={(e) => {
                                        setType(e.target.value);
                                    }}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="whatsApp" className="block text-gray-700">WhatsApp</label>
                            <input type="text" id="whatsApp" name="whatsApp" required
                                   onChange={(e) => {
                                       setWhatsapp(e.target.value);
                                   }}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone</label>
                            <input type="text" id="phone" name="phone" required
                                   onChange={(e) => {
                                       setPhone(e.target.value);
                                   }}
                                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <button type="button"
                                onClick={() => {
                                    createUse();
                                }}
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddUser;
