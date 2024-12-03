import {Link} from "react-router-dom";

function Menus(){
    return(
        <>
            <div>
                <ul className="flex flex-row right-96">
                    <Link to="/gallery">
                        <li className="mx-5 cursor-pointer text-white font-bold hover:underline">Gallery</li>
                    </Link>

                    <Link to="/about-us">
                        <li className="mx-5 cursor-pointer text-white font-bold hover:underline">About Us</li>
                    </Link>
                </ul>

            </div>

        </>
    )
}

export default Menus;