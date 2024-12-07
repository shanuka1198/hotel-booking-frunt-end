function Footer(){
    return(
        <>
            <footer className="bg-fuchsia-900 bg-opacity-50 text-black py-8 h-[400px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">

                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold text-white">Anantaya Resort & Spa</h2>
                        </div>


                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-blue-500">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-500">Contact</a>
                                </li>
                            </ul>
                        </div>


                        <div className="w-full md:w-1/3">
                            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557a9.835 9.835 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3.2a9.872 9.872 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482 13.978 13.978 0 0 1-10.153-5.158A4.822 4.822 0 0 0 2.924 8.99 4.907 4.907 0 0 1 .96 8.13v.045a4.918 4.918 0 0 0 3.946 4.827 4.908 4.908 0 0 1-2.212.084 4.92 4.92 0 0 0 4.59 3.415A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.21c9.055 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.015-.636A10.011 10.011 0 0 0 24 4.557z"/>
                                    </svg>
                                </a>
                                <a href="#" className="hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M22.675 0H1.325C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.432c0-3.1 1.892-4.788 4.657-4.788 1.324 0 2.462.099 2.795.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.309h3.587l-.467 3.622h-3.12V24h6.117c.73 0 1.325-.595 1.325-1.325V1.325C24 .595 23.405 0 22.675 0z"/>
                                    </svg>
                                </a>
                                <a href="#" className="hover:text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.316.975.975 1.253 2.242 1.315 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.34 2.633-1.315 3.608-.975.975-2.242 1.253-3.608 1.315-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.34-3.608-1.315-.975-.975-1.253-2.242-1.315-3.608-.058-1.266-.07-1.646-.07-4.85 0-3.204.012-3.584.07-4.85.062-1.366.34-2.633 1.315-3.608.975-.975 2.242-1.253 3.608-1.315 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.012 7.052.07 5.769.129 4.659.39 3.768 1.281 2.877 2.171 2.616 3.281 2.057 4.564.998 5.844.986 6.254.986 9.513c0 3.259.012 3.669.07 4.949.059 1.283.32 2.393 1.211 3.284.891.891 2.001 1.152 3.284 1.211 1.28.059 1.69.07 4.949.07s3.669-.012 4.949-.07c1.283-.059 2.393-.32 3.284-1.211.891-.891 1.152-2.001 1.211-3.284.059-1.28.07-1.69.07-4.949s-.012-3.669-.07-4.949c-.059-1.283-.32-2.393-1.211-3.284-.891-.891-2.001-1.152-3.284-1.211-1.28-.059-1.69-.07-4.949-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-.001-2.882 1.44 1.44 0 0 0 .001 2.882z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
                        <p>© 2024 Your Brand. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;