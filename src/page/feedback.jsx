import { useEffect, useState } from "react";
import axios from "axios";
import FeedbackTableRaw from "../component/feedback-table-raw.jsx";

function Feedback() {
    const [feedback, setFeedback] = useState([]);
    const [isFeedbackLoad, setFeedbackLoad] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const token = localStorage.getItem("token");

    // Fetch feedback data
    useEffect(() => {
        if (!isFeedbackLoad) {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/feedback", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                })
                .then((result) => {
                    setFeedback(result.data.result);
                    setFeedbackLoad(true);
                })
                .catch((err) => console.error(err));
        }
    }, [isFeedbackLoad, token]);


    function deleteFeedback(email){
        axios
            .delete(import.meta.env.VITE_BACKEND_URL + "/api/feedback/" + email, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((result) => {
                console.log(result);
                setFeedbackLoad(false);
            })
            .catch((err) => console.error(err));
    };

    function updateVisible(email,visible){
        alert(email);
        alert(visible)
        axios
            .put(import.meta.env.VITE_BACKEND_URL + "/api/feedback/visible",{visible:!visible,email:email}, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((result) => {
                console.log(result);
                setFeedbackLoad(false);
            })
            .catch((err) => console.error(err));
    }

    const handleToggle = () => {
            setIsToggled((prevState) => !prevState); // Toggle state
    };



    return (
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
                    {feedback.map((item) => (

                        // eslint-disable-next-line react/jsx-key
                        <FeedbackTableRaw updateVisible={updateVisible} isToggled={isToggled} item={item} deleteFeedback={()=>{deleteFeedback()}} handleToggle={()=>{handleToggle()}}/>
                        // <tr
                        //     key={item.email}
                        //     className="border-b border-gray-200 hover:bg-gray-100"
                        // >
                        //     <td className="py-3 px-6 text-left whitespace-nowrap">
                        //         {item.email}
                        //     </td>
                        //     <td className="py-3 px-6 text-left">{item.feedback}</td>
                        //     <td className="py-3 px-6 text-left">{item.visible.toString()}</td>
                        //     <td className="py-3 px-6 text-left flex">
                        //
                        //         <div className="flex fixed">
                        //             <button
                        //                 onClick={handleToggle}
                        //                 className={`px-6 flex justify-center items-center h-5 py-2 rounded-md text-white font-semibold focus:outline-none transition ${
                        //                     isToggled ? "bg-green-500" : "bg-gray-400"
                        //                 }`}
                        //             >
                        //                 {isToggled ? "Visible" : "Invisible"}
                        //             </button>
                        //             <button
                        //                 onClick={() => deleteFeedback(item.email)}
                        //                 className="w-7 h-5 bg-red-700 mx-5 text-amber-50 rounded-2xl hover:bg-red-600"
                        //             >
                        //                 <span className="flex justify-center">
                        //                     <RiDeleteBin5Fill/>
                        //                 </span>
                        //             </button>
                        //         </div>
                        //
                        //
                        //     </td>
                        // </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Feedback;
