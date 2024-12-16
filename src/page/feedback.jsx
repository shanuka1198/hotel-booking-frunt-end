import { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin5Fill } from "react-icons/ri";

function Feedback() {
    const [feedback, setFeedback] = useState([]);
    const [isFeedbackLoad, setFeedbackLoad] = useState(false);

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


    const deleteFeedback = (email) => {
        axios
            .delete(import.meta.env.VITE_BACKEND_URL + "/api/feedback/" + email, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(() => {
                setFeedback((prev) => prev.filter((item) => item.email !== email));
            })
            .catch((err) => console.error(err));
    };


    const toggleVisibility = (email, currentVisible) => {
        const feedbackDetails = { visible: !currentVisible };

        axios
            .put(import.meta.env.VITE_BACKEND_URL + `/api/feedback/${email}`, feedbackDetails, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then(() => {
                // Update local state
                setFeedback((prev) =>
                    prev.map((item) =>
                        item.email === email ? { ...item, visible: !currentVisible } : item
                    )
                );
            })
            .catch((err) => console.error(err));
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
                        <tr
                            key={item.email}
                            className="border-b border-gray-200 hover:bg-gray-100"
                        >
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                {item.email}
                            </td>
                            <td className="py-3 px-6 text-left">{item.feedback}</td>
                            <td className="py-3 px-6 text-left">{item.visible.toString()}</td>
                            <td className="py-3 px-6 text-left flex">
                                {/* Toggle Visibility Button */}
                                <button
                                    onClick={() => toggleVisibility(item.email, item.visible)}
                                    className={`w-20 h-8 ${
                                        item.visible
                                            ? "bg-green-600 hover:bg-green-800"
                                            : "bg-gray-600 hover:bg-gray-800"
                                    } text-white rounded-lg mx-2`}
                                >
                                    {item.visible ? "Visible" : "Invisible"}
                                </button>

                                {/* Delete Feedback Button */}
                                <button
                                    onClick={() => deleteFeedback(item.email)}
                                    className="w-7 h-5 bg-red-700 mx-5 text-amber-50 rounded-2xl hover:bg-red-600"
                                >
                                        <span className="flex justify-center">
                                            <RiDeleteBin5Fill />
                                        </span>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Feedback;
