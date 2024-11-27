import Header from "../../component/header.jsx";
import CategoryCard from "../../component/category-card.jsx";
function HomePage() {
    const token=localStorage.getItem("token");

    if(token == null){
        window.location.href = "/login"
    }

    return (
        <>
            <Header/>
            <div className="w-full h-screen bg-white">
            <div className="relative flex justify-center">
                <div className="my-[70px] font-bold flex justify-center">
                <h1 className="absolute text-fuchsia-950 text-4xl ">WELCOME TO THE ANANTAYA</h1>
                    <h2 className="absolute text-amber-50 my-10">Book your Stay</h2>
                </div>

                <div className="relative flex justify-center my-[170px]">
                    <div className="absolute w-[700px] h-[100px] bg-white shadow-2xl rounded-3xl">
                        <div className="flex items-center p-4 rounded-lg shadow-md">
                            <div className="flex flex-col mx-6">
                                <label className="text-gray-700 font-semibold mb-1">Starting Date:</label>
                                <input type="date"
                                       className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-fuchsia-400"/>
                            </div>
                            <div className="flex flex-col mx-10">
                                <label className="text-gray-700 font-semibold mb-1">End Date:</label>
                                <input type="date"
                                       className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-fuchsia-400"/>
                            </div>
                            <div className="flex flex-col mx-6">
                                <label className="text-gray-700 font-semibold mb-1">Select Option:</label>
                                <select
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-fuchsia-400 bg-white text-gray-700">
                                    <option>Deluxe</option>
                                    <option>Luxury</option>
                                    <option>Normal</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center hover:scale-105">
                            <button type="submit"
                                    className="rounded-md transition-all duration-300 ease-in-out transform  hover:scale-105 bg-fuchsia-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-1">Book
                                Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen my-[100px] bg-white ">
                <div className="w-full h-[330px] rounded-br-full rounded-tl-full bg-fuchsia-900 bg-opacity-50">
                    <div className=" mx-[60px] flex flex-col justify-center">
                        <h1 className="text-2xl text-black font-serif">OUR</h1>
                        <h1 className="text-6xl text-fuchsia-800 font-serif">ROOMS</h1>
                        <div className="w-full h-0.5 bg-fuchsia-300"></div>
                    </div>
                    <CategoryCard/>
                </div>
            </div>
            </div>

        </>
    )
}

export default HomePage;