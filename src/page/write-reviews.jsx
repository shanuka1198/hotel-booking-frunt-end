import axios from "axios";
import { useState } from "react";
import {IoIosCloseCircle} from "react-icons/io";
import {useNavigate} from "react-router-dom";

function WriteReviews() {
    const [review, setReview] = useState({ feedback: "", visible: false });
    const token = localStorage.getItem("token");
    const navigate=useNavigate();

    function createReview() {

        if (!review.feedback) {
            console.error("Feedback is required!");
            return;
        }

        axios
            .post(
                import.meta.env.VITE_BACKEND_URL + "/api/feedback",
                review,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function writeFeedbackModelCLose(){
        navigate("/")
    }

    return (
        <div className="h-[1200vh] w-screen fixed top-0 bg-fuchsia-50 opacity-90">
            <div className="my-12 flex justify-center h-[500px] w-full bg-white">
                <div
                    className="mx-[300px] my-5 rounded-3xl p-5 border border-fuchsia-800 bg-fuchsia-50 shadow-2xl shadow-black">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-center w-full h-10 rounded-2xl">
                            Leave a Review
                        </h3>
                        <button
                            onClick={() => {
                                writeFeedbackModelCLose()
                            }}
                            className="w-10 h-5 text-3xl text-red-500 hover:text-red-700"
                        >
                            <IoIosCloseCircle/>
                        </button>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            createReview();
                        }}
                        className="space-y-4 w-[500px]"
                    >
                        {/* Review Textarea */}
                        <div>
                            <label
                                htmlFor="feedback"
                                className="block text-gray-700 font-semibold"
                            >
                                Review
                            </label>
                            <textarea
                                id="feedback"
                                name="feedback"
                                rows="4"
                                placeholder="Write your review here..."
                                value={review.feedback}
                                onChange={(e) =>
                                    setReview({...review, feedback: e.target.value})
                                }
                                className="w-full px-4 py-2 border border-fuchsia-700 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-700"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full my-5 bg-fuchsia-900 text-white font-bold py-2 rounded-md hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                            >
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default WriteReviews;
