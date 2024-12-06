
function HotelDetails(){
    return(
        <>
            <div className="absolute flex">
                <div
                    className="w-[600px] my-10 shadow-black shadow-xl mx-10 text-black  p-12 rounded-3xl items-center h-[600px] bg-white bg-opacity-70">
                    <div className=" mx-[60px]  flex-col justify-center">
                        <h1 className="text-2xl text-black font-serif text-end">WEDDING &</h1>
                        <h1 className="text-6xl text-fuchsia-800 font-serif text-end">EVENTS</h1>
                        <div className="w-full h-0.5 bg-fuchsia-300"></div>
                    </div>
                    <div className="my-12 ">
                        <p className="font-serif text-sky-950">For all your event requirements, Anantaya Resort and Spa is your go-to destination,
                            catering to a wide range of occasions, from intimate weddings to grand conferences.
                            Our venue offers a diverse selection of meeting rooms and banquet halls, including a
                            spacious hall capable of accommodating up to 900 guests. Anticipate exceptional
                            service and genuine Sri Lankan hospitality from our dedicated team members,
                            who are committed to ensuring the success of your entire event. Experience world-class
                            facilities and personalized attention every step of the way.
                        </p>
                    </div>

                </div>
                <div className="w-[600px]  my-[200px] hover:scale-110  duration-300 ease-in-out transform">
                    <img className="rounded-2xl" src="public/header/anantaya1.jpg"/>
                </div>
            </div>
        </>
    )
}

export default HotelDetails;