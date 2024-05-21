import SidebarElement from "../../sidebar-element/SidebarElement";
import Sponsors from "../../sponsors/Sponsors";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import { CiMail } from "react-icons/ci";
import { RiExternalLinkLine } from "react-icons/ri";
import './U23Herren2.css';

function U23Herren2(props: any) {
    return (
        <div className="grid">
            <div className="main">
                <h1>Herren 2</h1>
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
                        <img src="src/assets/Mixed/mixed1.jpeg" className="test"></img>
                    </SwiperSlide>
                    <SwiperSlide data-swiper-autoplay="5000">
                        <img src="src/assets/Mixed/mixed2.jpeg" className="test"></img>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="sidebar">
                <SidebarElement title="Swiss Volley EasyLeague">
                    <div>
                        <RiExternalLinkLine className="icon"/>
                        <a href="https://svra.sook.ch/events/game_results/?league=545&type=200" className="laila">Rangliste</a>
                    </div>
                </SidebarElement>
                <SidebarElement title="Coach">
                <p>Alessandro Damore</p>
                <div>
                    <CiMail className="icon"/> <a href="mailto:info@volebo.ch">info@volebo.ch</a>
                </div>
                </SidebarElement>
            </div>
        </div>
    )
}

export default U23Herren2;