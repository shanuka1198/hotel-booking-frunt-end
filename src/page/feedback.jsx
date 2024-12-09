import {RiDeleteBin5Fill} from "react-icons/ri";
import {useEffect, useState} from "react";
import axios from "axios";


function Feedback(){


        const [feedback,setFeedback]=useState([]);
        const [isFeedbackLoad,setFeedbackLoad]=useState(false)
        const token=localStorage.getItem("token");




    useEffect(() => {
        if (!isFeedbackLoad){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/feedback",{
                headers:{
                    Authorization:"Bearer " + token
                }
            }).then((result)=>{
                setFeedback(result.data.result);
                setFeedbackLoad(true);
            }).catch((err)=>{
                console.log(err);
            })
        }

        }, [isFeedbackLoad, token]);

function deleteFeedback(email){
    axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/feedback/"+email,{
        headers:{
            Authorization:"Bearer " + token
        }
    }).then((result)=>{
       console.log(result)
        setFeedbackLoad(false);
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
                        <th className="py-3 px-6 text-left">UserName</th>
                        <th className="py-3 px-6 text-left">Feedback</th>
                        <th className="py-3 px-6 text-left">Visible</th>
                        <th className="py-3 px-6 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                    {feedback.map((feedbacks,index)=> (
                        <tr key={index}
                            className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                {feedbacks.email}
                            </td>
                            <td className="py-3 px-6 text-left">
                                {feedbacks.feedback}
                            </td>
                            <td className="py-3 px-6 text-left">
                                {feedbacks.visible.toString()}
                            </td>
                            <td className="py-3 px-6 text-left flex">
                                {/*<input*/}
                                {/*    type="checkbox"*/}
                                {/*    onChange={() => {*/}
                                {/*        deleteFeature(room.roomId, isFeatured)*/}
                                {/*        setIsFeatured(!isFeatured)*/}
                                {/*    }}*/}
                                {/*    id="toggle"*/}
                                {/*    className="sr-only peer"*/}
                                {/*    checked={isFeatured}*/}
                                {/*/>*/}
                                <button onClick={() => {
                                    deleteFeedback(feedbacks.email)
                                }}
                                        className="w-7 h-5 bg-red-700 mx-5 text-amber-50 rounded-2xl hover:bg-red-600">
                            <span className="flex justify-center">
                                <RiDeleteBin5Fill/>
                            </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Feedback;