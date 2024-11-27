import Userdata from "./userdata.jsx";
function Header(){
    return(
        <>
            <header className='relative h-[100px] flex items-center '>
                <div className="absolute w-full h-[750px] overflow-hidden eff">
                    <div className="flex animate-slide">
                        <img
                            src="https://codecagon.wordpress.com/wp-content/uploads/2016/03/sri-lanka-anantaya.jpg?w=1920&h=1080&crop=1"
                            alt="Image 1" className="w-full h-full object-cover flex-shrink-0"/>
                        <img
                            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/225527103.jpg?k=3788a4bcc8e8a2ee68ae6b4acf5822830d989a2588825257cb34232d5edd5429&o=&hp=1"
                            alt="Image 2" className="w-full h-full object-cover flex-shrink-0"/>
                        <img
                            src="https://2cw.co.uk/lk197/images/1+86c09a-anantaya-resort-&-spa.jpg"
                            alt="Image 3" className="w-full h-full object-cover flex-shrink-0"/>
                    </div>
                </div>

                <h1 className='absolute text-amber-50 font-sans text-5xl mx-7'>ANANTAYA Resort and Spa</h1>
                <Userdata
                    imageLink="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
                    name="Shanuka"/>
            </header>

        </>
    )
}

export default Header;