// Importando os Componentes Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando SEU CSS
import "./Carrossel.css";

// Importando Modulos do Carrossel
import {Autoplay, Navigation, Pagination } from 'swiper/modules';

import logo01 from "../../assets/logo01.jpg"
import logo02 from "../../assets/logo02.jpg"
import logo04 from "../../assets/logo04.jpg"

function Carrossel() {

    const items = [
        { img: logo01 },
        { img: logo02 },
        { img: logo04 }
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    items.map((item) => (

                        <SwiperSlide>
                            <img src={item.img} alt="Imagem" />
                        </SwiperSlide>
                        
                    ))
                }

            </Swiper>
        </>
    )
}

export default Carrossel