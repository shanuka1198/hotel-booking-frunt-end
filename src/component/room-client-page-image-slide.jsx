import  {useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {Navigation} from "swiper/modules";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

export function RoomClientPageImageSlide(props){
    const swiperRef = useRef(null);  // Create a reference for the Swiper instance
    // eslint-disable-next-line react/prop-types
    const [images,setImage]=useState(props.photo.photos)

    return (
        <>
        <div className="image-slider-container" style={{position: 'relative', maxWidth: '500px', margin: '0 auto'}}>
            <Swiper
                ref={swiperRef} // Attach the swiper reference
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                loop
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={[image]}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[200px] object-cover rounded"  // Set a fixed height and make width 100%
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="relative h-7 ">
                <button
                    className="prev-button absolute bg-fuchsia-700 rounded"
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    style={{
                        top: '50%',
                        left: '0',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                    }}
                >
                    <FaAnglesLeft/>
                </button>
                <button
                    className="next-button absolute bg-fuchsia-700 rounded"
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    style={{
                        top: '50%',
                        right: '0',
                        transform: 'translateY(-50%)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                    }}

                >
                    <FaAnglesRight/>
                </button>
            </div>

        </div>
        </>
    )
}
export default RoomClientPageImageSlide;
