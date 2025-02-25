// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


const ImgSlider = ({ arrayImg, coverImg }) => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src={coverImg} alt="" className='card-img' /></SwiperSlide>
                {arrayImg.map((img) => (
                    <SwiperSlide>
                        <img src={img.path} alt="img" className='card-img' />
                    </SwiperSlide>
                ))}


            </Swiper>
        </>
    )
}

export default ImgSlider