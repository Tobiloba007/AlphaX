import bgImg from '../../assets/bg-1.png'

const HomeSection1 = () => {
  return (
    <div className='bg-cover bg-center font-Inter h-[28rem] flex flex-col items-start justify-center w-full text-white px-6 pt-28  bg-white
    md:px-14 lg:h-[35.5rem] lg:px-16 xl:h-[50rem] xl:px-24 xl:mb-10'
    style={{backgroundImage: `url(${bgImg})`}}
    >
      <div>
        <p className='flex flex-col items-start justify-start text-[27px] font-light leading-9 md:text-[35px] md:font-normal md:leading-[2.7rem] lg:text-[48px] lg:leading-[3.5rem]
        xl:text-[68px] xl:leading-[4.7rem]'>
          <div>
            <span>We deliver </span>
            <span className='text-[#FD602A]'>DevOps</span>
          </div>
          <span>solutions exactly</span>
          as you need it
        </p>
      </div>

      <div>
        <p className='text-[#C0BEBE] text-[13px] mt-3 w-[70%] md:w-[90%] md:mt-4 md:text-[14px] lg:mt-7 lg:text-[15px] lg:w-[100%]
         xl:text-[22px] xl:mt-10'>
           Our solutions were developed with your problem in mind.
        </p>
      </div>

      <div>
        <button className='text-[10px] bg-[#FD602A] h-9 w-28 mt-8 rounded-lg text-center md:w-32 md:text-[11px] lg:h-11 
        lg:w-40 lg:rounded-[10px] lg:text-[12px] lg:mt-12 xl:mt-26 xl:text-[16px] xl:h-[4rem] xl:w-56 xl:rounded-[17px]
        hover:bg-[#504E4E]'>
           Lets work together
        </button>
      </div>

    </div>
  )
}

export default HomeSection1