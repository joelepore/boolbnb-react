// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const ImgSlider = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src="https://placehold.co/150x150"
                        alt="Immagine appartamento"
                        className="card-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://placehold.co/150x150"
                        alt="Immagine appartamento"
                        className="card-img" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default ImgSlider