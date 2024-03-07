import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroNewsCard = () => {
  const heroNewsArray = [
    {
      title: "Tron Ares Reveals First-Look Image From The Grid",
      info: "We've known that Tron: Ares, AKA the third movie set on the Grid following the original and 2010's Tron: Legacy, has been shooting since January. Joachim Rønning is in the director's chair and the first look at Jared Leto suited up as the title character is online — see it lower down the page.",
    },
    {
      title: "TAvengers 5 Will No Longer Be Titled The Kang Dynasty",
      info: "For much of the last year, the question has hung in the air around what Marvel is going to do with Kang. First, Ant-Man And The Wasp: Quantumania underperformed significantly, intended to be the Multiverse Saga uber-villain’s big launch on the world. Then, months after allegations were made against him, actor Jonathan Majors was found guilty of assault in December, at which point he was dropped by the studio. In the wake of all that, Marvel Studios is said to be retooling its plans for the future – plans which originally had the next Avengers movie down as The Kang Dynasty.",
    },
    {
      title: "House of the Dragon season 2",
      info: "Vhagar took one massive bite out of prince Lucerys (Elliot Grihault) and his dragon Arrax, so Rhaenyra's boy will not be returning for season two. We're sure, however, that the implications of his death will be massive. Also not joining season two's cast is Paddy Considine. Sadly, King Viserys has hung his crown up on the Iron Throne, leaving his squabbling children to cut each other down on their way to retrieve it.",
    },
  ];
  return (
    <div className="z-50 cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-slate-800/95 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4 py-2 hover:shadow-2xl hover:shadow-sky-400 ">
      <Swiper
        className="w-full h-full  flex justify-center"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={1}
        modules={[Autoplay]}
      >
        {heroNewsArray.map((news, i) => {
          return (
            <SwiperSlide
              key={i}
              className="w-[600px] h-[600px] flex flex-col gap-5"
            >
              <span className="text-xl font-bold text-blue-600 line-clamp-2">
                {news.title}
              </span>
              <p className="line-clamp-3 text-white">{news.info}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="absolute -bottom-5 -right-5 bg-sky-700 font-extrabold text-white p-2 px-6 rounded-lg hover:bg-sky-500 transition-colors">
        More
      </button>
    </div>
  );
};

export default HeroNewsCard;
