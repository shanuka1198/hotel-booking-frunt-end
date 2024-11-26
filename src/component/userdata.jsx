import axios from "axios";
import {useEffect, useState} from "react";

function UserData(props) {
    const token = localStorage.getItem("token");

    if (token == null) {
        window.location.href = "/login"
    }

    const [name, setName] = useState("");

    const [userFound, setUserFound] = useState(false)


    //useEffect( function , []   )
    useEffect(
        () => {
            const token = localStorage.getItem("token");
            console.log(token)
            if (token != null) {
                axios
                    .get("http://localhost:5000/api/users/loginUser", {
                        headers: {
                            Authorization: "Bearer " + token,
                            "Content-Type": "application/json",
                        },
                    })
                    .then((res) => {
                        console.log(res);
                        setName(res.data.users.firstName);

                        setUserFound(true)
                    });
            } else {
                setName("")
            }
        }, [userFound]
    );


    return (
        <>

            <div className="absolute right-8 flex  items-center mr-2">
                <div className="flex items-center">
                    <ul className="flex flex-row right-96">
                        <li className="mx-5 cursor-pointer text-white font-bold hover:underline">Gallery</li>
                        <li className="mx-5 cursor-pointer text-white font-bold hover:underline">About Us</li>
                    </ul>
                </div>
                {/* eslint-disable-next-line react/prop-types */}
                <img className="rounded-full w-[50px] h-[50px]" src={props.imageLink}/>
                <span className="text-white ml-[3px] text-[15px] ">{name}</span>

                <div
                    className="h-5 text-amber-50 rounded flex items-center justify-center w-20 bg-fuchsia-600 text-center mx-2">
                    <button className="text-[15px]" onClick={() => {
                        localStorage.removeItem("token")
                        setUserFound(false)
                    }}>
                        logout
                    </button>
                </div>

            </div>

        </>


    )

}

export default UserData;
