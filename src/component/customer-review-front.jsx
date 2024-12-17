
import {useNavigate} from "react-router-dom";


function CustomerReviewFront(){

    const navigate=useNavigate();

    function writeFeedbackModelOPen(){
        navigate("/reviews")
    }
    function feedbackView(){
        navigate("/view-reviews")
    }


    return(
        <>
            <div className="w-full h-[400px] flex justify-center items-center border  border-fuchsia-950">
                <div className=" mx-[60px]  flex-col justify-center">
                    <h1 className="text-2xl text-black font-serif ">HOTEL</h1>
                    <h1 className="text-6xl text-fuchsia-800 font-serif">REVIEWS</h1>
                    <div className="w-full h-0.5 bg-fuchsia-200"></div>
                </div>
                <div className="mx-5 my-5 p-4 border w-[600px] h-[200px] rounded-3xl flex justify-center items-center">
                    <h1 className="text-lg font-bold  text-fuchsia-900 ">Anantaya Resort & Spa </h1>
                    <p className="text-sm text-gray-700 mb-4">
                        <span className="text-gray-600">Write your experience about Anantaya Resort and Spa.</span>
                    </p>
                    <ul>
                        <button onClick={()=>{
                            writeFeedbackModelOPen();
                        }} className="w-[150px] text-white rounded-3xl cursor-pointer hover:scale-105 duration-300 ease-in-out transform flex justify-center items-center h-7 bg-fuchsia-900">
                            Write Reviews
                        </button>
                        <button onClick={()=>{
                            feedbackView();
                        }} className="w-[150px] text-white rounded-3xl cursor-pointer hover:scale-105 duration-300 ease-in-out transform my-5 flex justify-center items-center text-center h-7 bg-fuchsia-900">
                            View Reviews
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CustomerReviewFront;