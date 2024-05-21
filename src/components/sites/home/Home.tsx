import SidebarElement from "../../sidebar-element/SidebarElement";
import Sponsors from "../../sponsors/Sponsors";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import './Home.css';
import { CiMail } from "react-icons/ci";
import { RiExternalLinkLine } from "react-icons/ri";


function Home() {
    return (
        <div className="grid">
            <div className="main">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('hallo laila')}
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
                    <SwiperSlide data-swiper-autoplay="5000">
                        <img src="src/assets/Mixed.jpeg" className="test"></img>
                    </SwiperSlide>
                </Swiper>
                
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    
                    
            </div>
            <div className="sidebar">
                <SidebarElement title="Migros-Vereinsbons">
                    <p>Sammle auch Du Migros-Vereinsbons und unterstütze unsere Verein bei der Beschaffung von neuem Trainingsmaterial für unsere Jugend-Teams. VIELEN DANK !</p>
                </SidebarElement>
                <SidebarElement title="Migros-Vereinsbons">
                    <p>Sammle auch Du Migros-Vereinsbons und unterstütze unsere Verein bei der Beschaffung von neuem Trainingsmaterial für unsere Jugend-Teams. VIELEN DANK !</p>
                    <div>
                    <RiExternalLinkLine className="icon"/>
                    <a href="https://svra.sook.ch/events/game_results/?league=545&type=200" className="laila">Rangliste</a>
                    </div>
                    <div>
                    <RiExternalLinkLine className="icon"/>
                    <a href="https://www.ag.ch" className="laila">ag.ch</a>
                    </div>
                </SidebarElement>
                <SidebarElement title="Migros-Vereinsbons">
                    <p>Sammle auch Du Migros-Vereinsbons und unterstütze unsere Verein bei der Beschaffung von neuem Trainingsmaterial für unsere Jugend-Teams. VIELEN DANK !</p>
                    <div>
                        <CiMail className="icon"/> <a href="mailto:info@volebo.ch">info@volebo.ch</a>
                    </div>
                </SidebarElement>
                <SidebarElement title="NEWS"></SidebarElement>
                <SidebarElement title="Corona-Schutzkonzept"></SidebarElement>
            </div>
        </div>
    )
}

export default Home