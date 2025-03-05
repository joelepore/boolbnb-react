import TypesMenu from "../components/TypesMenu"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom";


const TypesWrapper = () => {
    const { setFilterData, types } = useGlobalContext()

    const navigate = useNavigate();

    const handleClick = (id) => {
        setFilterData(prev => ({ ...prev, type: id }));
        navigate('/search')
    }


    return (
        <div className=" container mb-3 w-100">
            <div className="row align-items-center custm-w pt-2">
                <div className="col-1">
                    <TypesMenu
                        id={''}
                        text={'Tutte'}
                        path={'/icons/grid_category.svg'}
                        onClick={() => handleClick('')}
                    />
                </div>

                <div className="col-11">
                    <Swiper
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        modules={[Navigation]}
                        className="mySwiper "
                        slidesPerView={3}
                        breakpoints={{
                            480: { slidesPerView: 5 },
                            768: { slidesPerView: 7 },
                            1024: { slidesPerView: 8 }
                        }}
                    >
                        {types.map(type => (
                            <SwiperSlide className="custom-slide" key={type.id}>
                                <TypesMenu
                                    id={type.id}
                                    text={type.name}
                                    path={type.icon_path}
                                    onClick={() => handleClick(type.id)}
                                />
                            </SwiperSlide>
                        ))}

                        {/* Frecce personalizzate con stopPropagation */}
                        <div className="swiper-button-prev custom-prev" ></div>
                        <div className="swiper-button-next custom-next" ></div>
                    </Swiper>

                </div>
                {/* <div className="col-1">
                </div> */}
            </div>

        </div >
    )
}

export default TypesWrapper