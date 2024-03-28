import SidebarElement from "../../sidebar-element/SidebarElement";
import Sponsors from "../../sponsors/Sponsors";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';

function Mixed() {
    return (
        <div className="grid">
            <div className="main">
                <h1>Mixed</h1>
            </div>
            <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={true}
                >
                    <SwiperSlide data-swiper-autoplay="5000">
                        <img src="src/assets/react.svg"></img>
                    </SwiperSlide>
                    <SwiperSlide data-swiper-autoplay="5000">
                        <img src="src/assets/volebo.png"></img>
                    </SwiperSlide>
                    <SwiperSlide data-swiper-autoplay="5000">
                        <img src="src/assets/Mixed.jpeg" className="test"></img>
                    </SwiperSlide>
                </Swiper>
            <div className="sidebar">
                <SidebarElement title="Migros-Vereinsbons"></SidebarElement>
                <SidebarElement title="NEWS"></SidebarElement>
            </div>
        </div>
    )
}

export default Mixed