import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CommonSlider = ({
    data = [],
    renderItem,
    slidesPerView = 3,
    spaceBetween = 30,
}) => {
    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            modules={[Pagination]}
            pagination={{
                clickable: true,
                bulletClass:
                    "swiper-pagination-bullet rounded-[5px] !w-[30px] !h-[10px] !bg-[#495669] opacity-100 transition-all duration-300",
                bulletActiveClass:
                    "!bg-[#E897B4] !w-[40px] !h-[12px] !rounded-[20px]",
            }}
            className="w-full h-full pb-14"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: slidesPerView,
                },
            }}
        >
            {data.map((item, index) => (
                <SwiperSlide
                    key={item.id || index}
                    className="flex items-center justify-center"
                >
                    {renderItem(item, index)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CommonSlider;