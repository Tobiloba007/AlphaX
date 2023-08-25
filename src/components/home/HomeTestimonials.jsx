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
              <img className='absolute top-12 w-40 h-40 z-10 rounded-full border-[0.1em] border-[#FD602A] object-cover md:rounded-none md:object-fill md:border-none md:h-[23rem] md:w-[50%]
              md:top-0 lg:h-full xl:w-[50%] xl:h-full'
              src={img2} alt="testimonials image" />
            </div>
      
            <div className="relative flex flex-col items-center justify-center w-full bg-black h-[31rem] text-white px-0 md:h-[23rem] lg:h-[28rem] xl:h-[38rem]">
              <h2 className="text-center text-[17px] font-medium w-[80%] mt-52 md:mt-0 lg:w-[80%] lg:text-[20px] lg:mt-0 xl:text-[28px] xl:mt-8">
              We found Alpha X to be an exceptional collaborator. Whenever we required additional teams, they promptly provided the support we needed, facilitating the swift expansion of our Dev and DevOps departments. They seamlessly integrated with our work methods and have effectively acted upon the feedback we&apos;ve provided. 
              </h2>
              <p className="text-[#9B9B9B] mt-5 text-[15px] lg:mt-8 xl:text-[22px] xl:mt-12">
                  Simi Adejumo, Hills Capital
              </p>
            </div>

          </div>
        </SwiperSlide>


               {/* SLIDE 2 */}
       <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center w-full md:flex-row-reverse">
            <div className="flex items-center justify-center w-full h-full px-6">
              <img className='absolute top-12 w-40 h-40 z-10 rounded-full border-[0.1em] border-[#FD602A] object-cover md:rounded-none md:object-fill md:border-none md:h-[23rem] md:w-[50%]
              md:top-0 lg:h-full xl:w-[50%] xl:h-full'
              src={img3} alt="testimonials image" />
            </div>
      
            <div className="relative flex flex-col items-center justify-center w-full bg-black h-[31rem] text-white px-0 md:h-[23rem] lg:h-[28rem] xl:h-[38rem]">
              <h2 className="text-center text-[17px] font-medium w-[80%] mt-52 md:mt-0 lg:w-[80%] lg:text-[20px] lg:mt-0 xl:text-[28px] xl:mt-8">
              Collaborating with Alpha X has been remarkably smooth. As our cloud partners, they&apos;ve played a crucial role in cost savings and enhancing security. On the engineering front, their highly diverse team is incredibly responsive. Undoubtedly, Alpha X is a vital ally that every technology company should have by their side.
              </h2>
              <p className="text-[#9B9B9B] mt-5 text-[15px] lg:mt-8 xl:text-[22px] xl:mt-12">
                  Femi Oritogun, Cephax IT,
              </p>
            </div>

          </div>
        </SwiperSlide>


                {/* SLIDE 3 */}
       <SwiperSlide>
          <div className="relative flex flex-col items-center justify-center w-full md:flex-row-reverse">
            <div className="flex items-center justify-center w-full h-full px-6">
              <img className='absolute top-12 w-40 h-40 z-10 rounded-full border-[0.1em] border-[#FD602A] object-cover md:rounded-none md:object-fill md:border-none md:h-[23rem] md:w-[50%]
              md:top-0 lg:h-full xl:w-[50%] xl:h-full'
              src={img4} alt="testimonials image" />
            </div>
      
            <div className="relative flex flex-col items-center justify-center w-full bg-black h-[31rem] text-white px-0 md:h-[23rem] lg:h-[28rem] xl:h-[38rem]">
              <h2 className="text-center text-[17px] font-medium w-[80%] mt-52 md:mt-0 lg:w-[80%] lg:text-[20px] lg:mt-0 xl:text-[28px] xl:mt-8">
              We turned to Alpha X to modernize our office productivity tools, particularly migrating to Azure DevOps. The Alpha X team provided crucial guidance and oversaw the transition process, ensuring a smooth and efficient migration.
              </h2>
              <p className="text-[#9B9B9B] mt-5 text-[15px] lg:mt-8 xl:text-[22px] xl:mt-12">
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