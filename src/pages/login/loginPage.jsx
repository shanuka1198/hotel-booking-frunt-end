import "./loginPage.css";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        axios.post("http://localhost:5000/api/users/login",{
            email:email,
            password:password
        }).then(
            (res)=>{
                console.log(res.data.token);
                localStorage.setItem("token",res.data.token)

                if (res.data.user.type==="admin"){
                    window.location.href="/admin/"
                    return
                }
                if(res.data.user.type==="customer"){
                    window.location.href="/"

                }
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
    }

    return (
        <>
            <div className="flex justify-center items-center w-full h-[100vh] pic-bg">
                <div className="relative text-center p-5 w-[300px] h-[400px] bg-white opacity-80 rounded-2xl">
                    <div className="h-[80px] flex w-[300px] mx-[90px]">
                        <img src="public/header/Anantra-removebg-preview.png" alt="Logo"/>
                    </div>
                    <h4 className="text-xl font-medium my-1">Login</h4>
                    <input
                        type="text"
                        placeholder="Input Your Email"
                        className="text-fuchsia-950 w-full h-5 my-5 p-5 border-2 rounded-2xl border-violet-950 hover:bg-fuchsia-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Input Your Password"
                        className="text-fuchsia-950 w-full h-5 p-5 border-2 rounded-2xl border-violet-950 hover:bg-fuchsia-200"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="w-full h-9 flex justify-center items-center rounded my-6 bg-fuchsia-950 text-amber-50 hover:bg-fuchsia-700"
                        onClick={login}
                    >
                        Login
                    </button>

                    <div className="flex mb-5 text-fuchsia-950">
                        <small className="">
                            Create account :
                            <Link to="/login/create-user">
                                <span className="font-bold text-black hover:text-blue-600">Sign Up</span>
                            </Link>
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
