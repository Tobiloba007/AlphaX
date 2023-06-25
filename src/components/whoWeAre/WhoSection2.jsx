import img1 from '../../assets/img-10.png'

const WhoSection2 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-8  md:px-14 md:py-16 lg:px-16 xl:px-24 xl:py-20">
        <div className="flex flex-col items-start justify-center w-full md:flex-row md:justify-between">
            <h1 className="text-[#504E4E] text-[26px] font-semibold leading-9 md:w-[50%] lg:text-[35px] lg:leading-[2.7rem] xl:text-[43px] xl:leading-[3.2rem]">
               The awesome people <br /> behind the scenes
            </h1>

            <p className="text-[#504E4E] pt-1 text-[13px] leading-6 md:w-[50%] lg:text-[14px] xl:text-[20px] xl:leading-8">
                Our mission is to empower organizations and individuals with innovative DevOps, cybersecurity, and data solutions, enabling them to navigate the digital landscape with confidence and resilience.
            </p>
        </div>

        <div className="flex flex-col items-start justify-center w-full mt-8 md:flex-row md:items-start md:justify-between md:mt-12 lg:mt-16 xl:mt-28 xl:items-center">
            <div className='md:w-[47%]'>
                <p className="text-[#FD602A] text-[16px] pb-1 md:text-[18px] lg:text-[20px] xl:text-[25px]">
                   Our Story
                </p>
                <p className="text-[#504E4E] text-[13px] leading-6 lg:text-[14px] xl:text-[19px] xl:leading-8">
                   Our story began with a shared vision among a group of like-minded technologists who recognized the need for a more efficient and collaborative approach to software delivery.
                   <br />
                   <br />
                   Frustrated by the traditional silos between development teams and operations teams, we set out to bridge the gap and create a unified workflow that would enable organizations to deliver high-quality software faster and with greater reliability. This led us on a journey of continuous learning, experimentation, and refinement, culminating in the establishment of Alpha-X.
                </p>
            </div>

            <div className='mt-5 md:w-[48%]'>
                <img className='w-full h-full md:h-[18rem] lg:h-[16rem] xl:h-full'
                src={img1} alt="" />
            </div>
        </div>

    </div>
  )
}

export default WhoSection2