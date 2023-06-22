import bgImg from '../../assets/bg-6.png'

const WhatSection1 = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full pt-36 pb-16 px-6 bg-[#000308] bg-[length:200px_200px] bg-right bg-no-repeat 
    md:bg-[length:330px_330px] md:px-14 lg:px-16 lg:pt-40 lg:pb-20 lg:bg-[length:450px_350px] xl:px-24 xl:pt-60 xl:pb-24 xl:bg-[length:600px_450px]"
    style={{backgroundImage: `url(${bgImg})`}}>
        <p className="text-[#FD602A] text-[18px] pb-2 md:text-[20px] lg:text-[22px] xl:text-[25px] md:w-[60%] lg:w-[55%]">
            what we do
        </p>
        <h1 className="text-[17px] text-white font-medium md:text-[21px] md:w-[60%] lg:w-[55%] lg:text-[28px] xl:text-[40px]">
          We offer comprehensive solutions
        </h1>
        <p className="text-[#ffff] pt-1 text-[13px] leading-6 lg:text-[15px] xl:text-[20px] xl:leading-8 md:w-[60%] lg:w-[55%] xl:w-[53%]">
            With our team of highly skilled professionals and advanced technologies, we offer a range of services tailored to meet your specific cybersecurity, data and cloud-related needs. Whether you&apos;re a small business, a large enterprise, or an individual, we have the expertise and resources to protect your digital assets and maintain your peace of mind.
        </p>
    </div>
  )
}

export default WhatSection1