import img2 from '../../assets/img-2.png'
import img3 from '../../assets/img-3.png'
import img4 from '../../assets/img-4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const HomeTestimonials = () => {
  return (
    <div className='bg-black'>
      <Swiper
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      // className="mySwiper"
      >

                {/* SLIDE 1 */}
       <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center w-full md:flex-row-reverse">
            <div className="flex items-center justify-center w-full h-full px-6">
              <img className='absolute top-16 w-40 h-40 z-10 rounded-full border-[0.1em] border-[#FD602A] object-cover md:rounded-none md:border-none md:h-[23rem] md:w-[50%]
              md:top-0 lg:h-[28rem] xl:h-[38rem]'
              src={img2} alt="testimonials image" />
            </div>
      
            <div className="relative flex flex-col items-center justify-center w-full bg-black h-[31rem] text-white px-6 md:h-[23rem] lg:h-[28rem] xl:h-[38rem]">
              <h2 className="text-center text-[17px] font-medium w-[80%] mt-48 md:mt-0 lg:w-[70%] lg:text-[20px] lg:mt-16 xl:text-[28px] xl:mt-28">
                 “Alpha-X, with the sub-accounts feature, makes it easy to segment our cash and in turn optimise it for targeted goals.”
              </h2>
              <p className="text-[#9B9B9B] mt-10 text-[15px] lg:mt-16 xl:text-[22px] xl:mt-24">
                  Simi Adejumo, Hustler Capital
              </p>
            </div>

          </div>
        </SwiperSlide>


               {/* SLIDE 2 */}
       <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center w-full md:flex-row-reverse">
            <div className="flex items-center justify-center w-full h-full px-6">
              <img className='absolute top-16 w-40 h-40 z-10 rounded-full border-[0.1em] border-[#FD602A] object-cover md:rounded-none md:border-none md:h-[23rem] md:w-[50%]
              md:top-0 lg:h-[28rem] xl:h-[38rem]'
              src={img3} alt="testimonials image" />
            </div>
      
            <div className="relative flex flex-col items-center justify-center w-full bg-black h-[31rem] text-white px-6 md:h-[23rem] lg:h-[28rem] xl:h-[38rem]">
              <h2 className="text-center text-[17px] font-medium w-[80%] mt-48 md:mt-0 lg:w-[70%] lg:text-[20px] lg:mt-16 xl:text-[28px] xl:mt-28">
                 “The ease of opening an account completely won me over. The app is very easy to navigate and it’s obvious they have the best interests of SMEs at heart. I’m proud to call them my bank.”
              </h2>
              <p className="text-[#9B9B9B] mt-10 text-[15px] lg:mt-16 xl:text-[22px] xl:mt-24">
                  Femi Oritogun, Cephax IT,
              </p>
            </div>

          </div>
        </SwiperSlide>


                {/* SLIDE 3 */}
       <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center w-full md:flex-row-reverse">
            <div className="flex items-center justify-center w-full h-full px-6">
              <img className='absolute top-16 w-40 h-40 z-10 rounded-full border-[0.1em] border-[#FD602A] object-cover md:rounded-none md:border-none md:h-[23rem] md:w-[50%]
              md:top-0 lg:h-[28rem] xl:h-[38rem]'
              src={img4} alt="testimonials image" />
            </div>
      
            <div className="relative flex flex-col items-center justify-center w-full bg-black h-[31rem] text-white px-6 md:h-[23rem] lg:h-[28rem] xl:h-[38rem]">
              <h2 className="text-center text-[17px] font-medium w-[80%] mt-48 md:mt-0 lg:w-[70%] lg:text-[20px] lg:mt-16 xl:text-[28px] xl:mt-28">
                  “We have to move really fast with our portfolio companies and Brass has helped us validate a lot of ideas and turned them to businesses with the ease of creating sub-accounts.”
              </h2>
              <p className="text-[#9B9B9B] mt-10 text-[15px] lg:mt-16 xl:text-[22px] xl:mt-24">
                   Sharon, Vertismo Inc.
              </p>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>
      </div>
  )
}

export default HomeTestimonials