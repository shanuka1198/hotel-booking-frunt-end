import {useEffect, useState} from "react";
import axios from "axios";



function User(){

    const token=localStorage.getItem("token");

    if(token == null){
        window.location.href = "/login"
    }


    const [user,setUser]=useState([]);
    const [userIsLoaded,setUserIsLoaded]=useState(false);

    useEffect(() => {
        if (!userIsLoaded){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/users/",{
                headers:{
                    Authorization:"Bearer "+token
                }
            }).then((res)=>{
                setUser(res.data.list);
                setUserIsLoaded(true)
            }).catch((err)=>{
                console.log(err);
            })
        }else {
            setUserIsLoaded(false)
        }
        }, [userIsLoaded,token]);

    function deleteCategory(username){


        axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/users/"+username,{
            headers:{
                Authorization:"Bearer "+token
            }
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err);
        })

    }
    return(
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg my-10">
                    <thead>
                    <tr className="bg-fuchsia-900 text-white uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">email</th>
                        <th className="py-3 px-6 text-left">firstName</th>
                        <th className="py-3 px-6 text-left">lastName</th>
                        <th className="py-3 px-6 text-left">type</th>
                        <th className="py-3 px-6 text-left">whatsApp</th>
                        <th className="py-3 px-6 text-left">phone</th>
                        <th className="py-3 px-6 text-left">disabled</th>
                        <th className="py-3 px-6 text-left">status</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                    {user.map((users,index)=> (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{users.email}</td>
                            <td className="py-3 px-6 text-left">{users.firstName}</td>
                            <td className="py-3 px-6 text-left">{users.lastName}</td>
                            <td className="py-3 px-6 text-left">{users.type}</td>
                            <td className="py-3 px-6 text-left">{users.whatsApp}</td>
                            <td className="py-3 px-6 text-left">{users.phone}</td>
                            <td className="py-3 px-6 text-left">{users.disabled.toString()}</td>
                            <td className="py-3 px-6 text-left">
                                <div className="">

                                    <button onClick={() => {
                                            deleteCategory(users.username);
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

        </>
    )
}

export default User;