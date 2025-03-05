
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReviewCard from './ReviewCard'


const ReviewSlider = ({ review }) => {
    return (

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            }}
            breakpoints={{

                320: {
                    slidesPerView: 1, // Mostra una slide per volta
                    spaceBetween: 10,  // Spazio tra le slide
                },

                768: {
                    slidesPerView: 2, // Mostra tre slide per volta
                    spaceBetween: 30,  // Spazio tra le slide
                },

                1024: {
                    slidesPerView: 3, // Mostra quattro slide per volta
                    spaceBetween: 30,  // Spazio tra le slide
                },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper px-1 pb-5"
        >
            {review.map((rev) => (
                <SwiperSlide key={rev.id}>
                    <ReviewCard review={rev} />
                </SwiperSlide>
            ))}

            <div className="swiper-button-prev custom-prev" ></div>
            <div className="swiper-button-next custom-next" ></div>
        </Swiper>

    )
}




export default ReviewSlider