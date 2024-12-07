
function Facilities(){
    return(
        <>
            <div className="w-full  h-screen ">
                <div className=" mx-[60px]  flex-col justify-center">
                    <h1 className="text-2xl text-black font-serif ">HOTEL</h1>
                    <h1 className="text-6xl text-fuchsia-800 font-serif">FACILITIES</h1>
                    <div className="w-full h-0.5 bg-fuchsia-200"></div>
                </div>
                <div className="relative w-full p-12 h-[350px] bg-fuchsia-100 rounded-3xl">
                    <div className="absolute mx-10 flex my-10 ">
                        <img
                            className="w-[500px] hover:scale-105  duration-300 ease-in-out transform h-[400px] rounded-3xl"
                            src="public/hotel-facility.jpg"/>
                        <div className="my-10 flex flex-col justify-center p-12 font-serif text-sky-950">
                            <p>The extensive selection of facilities at our exclusive beach resort in Sri Lanka<br/>
                                includes exciting indoor and outdoor resort activities in addition to recreational<br/>
                                facilities such as our all equipped gym and our spacious swimming pool. Guests can<br/>
                                also enjoy revitalizing wellness treatments in our tranquil spa after splurging to
                                their<br/>
                                heart’s content at our exclusive shopping arcade. Discover all this and more at<br/>
                                Anantaya Resort & Spa, catering to your most dearest desires. Your comfort and
                                convenience is utmost in our mind, always.</p>

                            <div className="my-5 text">
                                <h1 className="text-4xl my-4">GYM</h1>
                                <p>Keeping in mind the needs of today’s health conscious traveller,
                                    Anantaya Resort & Spa Chilaw has its very own state-of-the art
                                    fully equipped gym. Be it at the beginning of the day before heading
                                    off on your many adventures or in the evenings when one is looking to unwind,
                                    our modern gym is a great place to work out, stay in shape and lose
                                    those pesky holiday calories.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Facilities;