import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ImgSlider = ({ arrayImg, coverImg }) => {
    return (
        <Swiper
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            modules={[Navigation]}
            className="mySwiper"
        >
            {coverImg && <SwiperSlide><img src={coverImg} alt="cover" className="card-img" /></SwiperSlide>}
            {arrayImg.map((img, index) => (
                <SwiperSlide key={img.id || index}>
                    <img src={img.path} alt="img" className="card-img" />
                </SwiperSlide>
            ))}

            {/* Frecce personalizzate con stopPropagation */}
            <div className="swiper-button-prev custom-prev" onClick={(e) => e.stopPropagation()}></div>
            <div className="swiper-button-next custom-next" onClick={(e) => e.stopPropagation()}></div>
        </Swiper>
    );
};

export default ImgSlider;
