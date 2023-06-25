import bgImg from '../../assets/bg-6.png'
import img1 from '../../assets/img-9.png'

const WhoSection1 = () => {
  return (
    <div>
    <div className="flex flex-col items-start justify-center w-full pt-36 pb-16 px-6 bg-[#000308] bg-[length:200px_200px] bg-right bg-no-repeat 
    md:bg-[length:330px_330px] md:px-14 lg:px-16 lg:pt-40 lg:pb-20 lg:bg-[length:450px_350px] xl:px-24 xl:pt-60 xl:pb-24 xl:bg-[length:600px_450px]"
    style={{backgroundImage: `url(${bgImg})`}}>
        <p className="text-[#FD602A] text-[16px] pb-2 md:text-[20px] lg:text-[22px] xl:text-[25px] md:w-[60%] lg:w-[55%]">
            Who we are
        </p>
        <h1 className="text-[17px] text-white font-medium md:text-[21px] md:w-[60%] lg:w-[55%] lg:text-[28px] xl:text-[40px]">
            We are a team of professionals
        </h1>
        <p className="text-[#ffff] pt-1 text-[13px] leading-6 lg:text-[15px] xl:text-[20px] xl:leading-8 md:w-[60%] lg:w-[55%] xl:w-[53%]">
           We are a team of business strategists, dynamic technologists, and visionaries dedicated to data-driven consulting. Our focus is on providing efficient and tailored solutions that meet your specific needs, ensuring your success. With our expertise, we deliver comprehensive answers that drive results.
       </p>
    </div>
    <div className='flex items-start justify-center w-full h-full'>
        <img src={img1} alt="" />
    </div>
    </div>
  )
}

export default WhoSection1