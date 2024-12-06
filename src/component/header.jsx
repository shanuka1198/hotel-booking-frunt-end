

function Header(){
    return(
        <>

            <div className="relative flex items-center w-full h-screen overflow-hidden">
                <div className="absolute ">
                    <div className="flex animate-slide">
                        <img
                            src="public/header/place2.jpg"
                            alt="Image 1"
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                        <img
                            src="public/header/7.jpeg"
                            alt="Image 2"
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                        <img
                            src="public/header/place5.jpg"
                            alt="Image 3"
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;