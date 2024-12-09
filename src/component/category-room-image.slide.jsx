import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function CategoryRoomImageSlide(props) {
    const swiperRef = useRef(null);
    // eslint-disable-next-line react/prop-types
    const [images, setImage] = useState(props.photo.photos);

    return (
        <div className="image-slider-container relative max-w-screen w-full mx-auto">
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
                            src={image} // Corrected the `src` property
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[500px] object-cover rounded-3xl" // Set full width and fixed height
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            <button
                className="prev-button absolute bg-fuchsia-700 text-white rounded p-2 hover:bg-fuchsia-600"
                onClick={() => swiperRef.current.swiper.slidePrev()}
                style={{
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                }}
            >
                <FaAnglesLeft />
            </button>
            <button
                className="next-button absolute bg-fuchsia-700 text-white rounded p-2 hover:bg-fuchsia-600"
                onClick={() => swiperRef.current.swiper.slideNext()}
                style={{
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                }}
            >
                <FaAnglesRight />
            </button>
        </div>
    );
}

export default CategoryRoomImageSlide;
