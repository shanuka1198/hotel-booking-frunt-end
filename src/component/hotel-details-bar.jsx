
function HotelDetailsBar(){
    return(
        <>
            <div className=" mx-[60px]  flex-col justify-center">
                <h1 className="text-2xl text-black font-serif text-end">BARS &</h1>
                <h1 className="text-6xl text-fuchsia-800 font-serif text-end">RESTAURANTS</h1>
            </div>
            <div className="w-full h-[200px] bg-fuchsia-100 justify-center">
                <div className="w-full h-0.5 bg-fuchsia-200"></div>
                <div className="flex justify-center top-3">
                    <img className="w-[450px] hover:scale-105  duration-300 ease-in-out transform h-[350px] my-10 rounded-3xl" src="public/food.jpg"/>
                    <div className="my-10 mx-10 p-12 font-serif text-sky-950">
                        <p>
                            Embark on a sensory voyage through our diverse culinary offerings. <br/>
                            From themed dining experiences tailored just for you to tantalizing local <br/>
                            favorites and exquisite dishes from one end to the other of the globe,<br/>
                            our gourmet selection promises an exotic journey around the world.<br/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelDetailsBar;