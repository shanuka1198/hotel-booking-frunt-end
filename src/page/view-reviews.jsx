import axios from "axios";
import {useState} from "react";

function ViewReviews(){

    const [review,setReview]=useState([]);
    const token = localStorage.getItem("token");

    axios.get(import.meta.env.VITE_BACKEND_URL +"/api/feedback/visible",{
        headers:{
            Authorization:"Bearer " + token
        }
    }).then((result)=>{

       setReview(result.data.result);
    }).catch((err)=>{
        console.log(err)
    })

    return(
        <>
            <div className="h-[1200vh] w-screen fixed top-0 bg-fuchsia-900 bg-opacity-50">
                <div className="my-12 flex justify-center h-[500px] w-full bg-white">
                    {review.map((reviews,index)=>(
                    <div key={index} className=" w-full my-5 mx-10 h-[150px] border-b-4 border-t-2 border-b-fuchsia-950 rounded-2xl">
                            <div className="flex justify-center items-center mx-10 h-9 my-6  w-[200px] rounded-3xl bg-fuchsia-900 bg-opacity-60">
                                <p className=" font-bold">{reviews.email}</p>
                                <small className="my-1 mx-5">{reviews.name}</small>
                            </div>
                            <small className="mx-[100px]">{reviews.feedback}</small>

                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ViewReviews;