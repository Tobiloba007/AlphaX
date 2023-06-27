import img5 from '../../assets/img-5.png'
import img6 from '../../assets/img-6.png'
import img7 from '../../assets/img-7.png'

const WhatSection2 = () => {
  const items = [
    {
      title: 'Cyber Security',
      contents: 'We leverage advanced technologies, machine learning, and artificial intelligence to enhance our threat detection capabilities and stay ahead of cybercriminals. Our dedicated security operations center (SOC) provides round-the-clock monitoring and support, ensuring a swift response to any potential security incidents.',
      image: img5,
      style: 'flex flex-col items-center justify-start w-[100vw] mb-6 md:flex-row-reverse lg:mb-7 xl:mb-14'
    },
    {
      title: 'DevOps Solutions',
      contents: 'Our experienced team of DevOps consultants works closely with you to assess your current infrastructure, processes, and goals. We provide expert guidance and create a roadmap to help you adopt DevOps practices effectively. We analyze your software development lifecycle, identify bottlenecks, and recommend the right tools and methodologies to optimize your delivery pipeline.',
      image: img6,
      style: 'flex flex-col items-center justify-start w-full mb-6 md:flex-row lg:mb-7 xl:mb-14'
    },
    {
      title: 'Data Solution',
      contents: 'we are committed to delivering innovative and comprehensive data solutions tailored to your unique business needs. We understand that data is the lifeblood of modern organizations, and we are dedicated to providing you with the tools and insights necessary to thrive in a data-driven world.',
      image: img7,
      style: 'flex flex-col items-center justify-start w-full mb-6 md:flex-row-reverse lg:mb-7 xl:mb-14'
    },
  ]

  return (
    <div className="flex flex-col items-centet justify-start w-full">

      {items.map((item, index)=>{
        return(
           <div key={index} className={item.style}>
             <div className="flex flex-col items-start justify-center w-full h-[15rem] bg-[#CCC5B2] px-6 md:w-[50%] lg:h-[19rem] lg:w-[50%] lg:px-12 xl:h-[26rem] xl:px-14">
               <h1 className="text-[#504E4E] text-[23px] font-medium lg:text-[27px] lg:font-semibold xl:text-[38px]">
                 {item.title}
               </h1>
               <p className="text-[#504E4E] text-[12px] mt-1 leading-5 lg:text-[15px] lg:mt-2 lg:leading-6 xl:text-[20px] xl:leading-9">
                  {item.contents}
               </p>
             </div>
     
            <div className="flex items-center justify-center w-full md:h-full md:w-[50%] lg:h-[19rem] lg:w-[50%] xl:h-[26rem]">
                <img className='h-ful w-full lg:h-full xl:h-full mt-[-10px] md:mt-0 md:h-full md:w-full' src={item.image} alt="..." />
                {/* <img className='h-[15rem] w-full lg:h-[19rem] xl:h-[26rem]' src={item.image} alt="..." /> */}
             </div>
     
           </div>
        )
      })}

    </div>
  )
}

export default WhatSection2