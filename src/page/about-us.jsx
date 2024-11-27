
// eslint-disable-next-line no-unused-vars
import React from "react";
import {useNavigate} from "react-router-dom";

function AboutUs(){

    const navigate=useNavigate();
    function navigateHome(){
        navigate("/")
    }
    return(
        <>

            <div>
                <div className="relative bg-cover bg-center h-[50vh]">
                    <div className="absolute inset-0 bg-fuchsia-900 bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
                    </div>
                </div>


                <div className="py-[100px] px-6 md:px-12 lg:px-24">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Welcome to <span className="font-bold text-fuchsia-700">Anataya Resort Hotel and Spa</span>,
                            where luxury meets tranquility. Nestled in the heart of nature, Anataya is your escape to
                            rejuvenation,
                            offering world-class hospitality, serene surroundings, and unparalleled comfort.
                        </p>
                    </div>
                </div>


                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At Anataya Resort, our mission is to provide an unforgettable experience for our guests
                            by combining
                            exceptional service, elegant accommodations, and holistic wellness offerings. We aim to
                            create a sanctuary
                            where every guest can unwind, reconnect, and rediscover inner peace.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Whether you're seeking a romantic getaway, a family vacation, or a wellness retreat,
                            Anataya promises an experience
                            beyond expectations.
                        </p>
                    </div>
                    <div>
                        <img src="public/2.jpg" alt="Mission Image"
                             className="rounded-lg shadow-lg"/>
                    </div>
                </div>

                <div className="py-12 px-6 md:px-12 lg:px-24">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-8">Why Choose Anataya?</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold text-fuchsia-700">World-Class Spa</h3>
                                <p className="text-gray-600 mt-2">Indulge in our luxurious spa treatments designed to
                                    relax, heal, and rejuvenate your body and mind.</p>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold text-fuchsia-700">Exquisite Cuisine</h3>
                                <p className="text-gray-600 mt-2">Enjoy a culinary journey with our expertly crafted
                                    dishes, featuring local and international flavors.</p>
                            </div>
                            <div className="p-6 bg-white shadow-lg rounded-lg">
                                <h3 className="text-xl font-semibold text-fuchsia-700">Breathtaking Views</h3>
                                <p className="text-gray-600 mt-2">Wake up to stunning views of lush greenery, tranquil
                                    beaches, or serene mountain ranges.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 bg-fuchsia-900 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-4">Book Your Escape</h2>
                        <p className="text-lg mb-6">
                            Let us make your dream vacation a reality. Experience Anataya Resort Hotel and Spa and create memories that will last a lifetime.
                        </p>
                        <button onClick={()=>{
                            navigateHome()
                        }} className="px-6 py-3 bg-fuchsia-700 rounded-md hover:bg-fuchsia-600 transition focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;