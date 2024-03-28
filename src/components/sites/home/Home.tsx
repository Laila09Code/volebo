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
                        <img src="src/assets/react.svg"></img>
                    </SwiperSlide>
                    <SwiperSlide data-swiper-autoplay="5000">
                        <img src="src/assets/volebo.png"></img>
                    </SwiperSlide>
                    <SwiperSlide data-swiper-autoplay="5000">
                        <img src="src/assets/Mixed.jpeg" className="test"></img>
                    </SwiperSlide>
                </Swiper>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id consectetur orci. Curabitur sit amet ipsum sed tortor ultrices vehicula ut ac lorem. Quisque luctus nisl nibh, nec eleifend dolor vehicula in. Aenean nec tortor eleifend, dignissim augue id, consequat ligula. Proin auctor, justo vitae commodo dictum, eros quam pulvinar odio, id consequat ante nisl sed dolor. Mauris cursus molestie massa, ac convallis libero cursus at. Nulla sit amet metus eu lorem pulvinar interdum blandit a ipsum.

                    Mauris metus quam, commodo sit amet iaculis id, auctor tincidunt ligula. Curabitur nibh orci, elementum in erat id, ultricies imperdiet odio. Mauris aliquet convallis velit, sagittis dapibus metus sodales non. Suspendisse potenti. Maecenas et varius dui. Cras volutpat, orci at egestas finibus, lorem nunc ullamcorper augue, nec hendrerit sapien libero sed orci. Nulla a eleifend urna. Vestibulum id felis convallis libero varius sollicitudin. Proin non ex dictum, egestas ipsum eget, efficitur magna. In hac habitasse platea dictumst. Aliquam gravida iaculis mauris, eget euismod lorem ultricies ut. Curabitur varius feugiat leo, a fringilla sem dapibus id. Aenean pharetra non risus in lacinia. Aliquam erat volutpat. Cras porttitor libero a orci convallis, bibendum consectetur augue accumsan.

                    Donec ultrices auctor massa non vestibulum. Nam arcu enim, varius a dignissim vel, dictum quis lacus. Mauris ullamcorper pharetra magna sit amet tristique. Vestibulum sed ante vitae ex pretium efficitur. Aliquam ac metus sit amet odio varius luctus eget sit amet felis. Ut et volutpat ex, sed placerat eros. Integer hendrerit tristique augue a rutrum. In luctus iaculis nisi eu aliquam. Vestibulum condimentum urna at facilisis molestie. Mauris placerat velit ut turpis tristique, ac scelerisque felis porttitor.

                    In efficitur aliquet diam consectetur aliquam. Fusce ac scelerisque nisi, in vestibulum ante. Duis diam lorem, interdum id gravida interdum, suscipit id magna. Sed varius nec lectus eget tincidunt. Nunc varius iaculis sapien. Integer sit amet nibh risus. Aenean in eleifend neque. Mauris quis consectetur ligula, sed fringilla ligula. Pellentesque eleifend dictum leo eget accumsan.

                    Donec ut magna at dui rhoncus egestas nec vel ex. Proin id enim in odio congue consectetur. Sed ut erat nisi. Fusce a lobortis ipsum, sit amet egestas tellus. Curabitur pharetra velit in pharetra varius. Quisque tincidunt feugiat lectus. Aenean sit amet lobortis felis, eget pretium augue. Mauris congue ultricies auctor. In viverra tellus ut molestie dapibus. Nulla a nibh hendrerit, rutrum velit et, malesuada lectus. Nunc lorem quam, volutpat id faucibus ac, faucibus sed eros.</p>
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
                    <CiMail />
                    <p><a href="mailto:info@volebo.ch">info@volebo.ch</a></p>
                </SidebarElement>
                <SidebarElement title="NEWS"></SidebarElement>
                <SidebarElement title="Corona-Schutzkonzept"></SidebarElement>
            </div>
        </div>
    )
}

export default Home