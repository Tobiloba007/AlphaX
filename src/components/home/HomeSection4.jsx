import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import bgImg from '../../assets/bg-3.png'

const HomeSection4 = () => {
  const items = [
    {
        icon: icon4,
        title: 'Customer-First Approach',
    },
    {
        icon: icon5,
        title: 'Cloud-Native Technology',
    },
    {
        icon: icon6,
        title: 'Commitment to Client success',
   },
]

  return (
    <div className="flex flex-col items-center justify-start w-full font-inter p-0">

      <div className="flex flex-col items-start justify-start w-full h-full pt-12 pb-7 bg-[#121214] px-6 md:pt-9 md:px-14 lg:px-16 lg:pt-11 xl:pt-16 xl:pb-14"
      style={{backgroundImage: `url(${bgImg})` }}>
        <div className="flex flex-col items-start justify-start w-full">
          <p className="text-[#FD602A] text-[18px] md:text-[21px] lg:text-[22px] xl:text-[30px]">
               What makes us different
          </p>
          <p className="text-white text-[13px] pt-1 leading-6 md:w-[70%] lg:text-[15px] lg:pt-3 lg:w-[65%] xl:text-[20px] xl:w-[60%] xl:leading-8">
              Some of the nation’s largest brands rely on Alpha-X to deliver effective solutions to their most pressing management and technology challenges, because of our:
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-between w-full mt-5 md:mt-8 lg:mt-12 xl:mt-20">
          {items.map((item, index)=>{
            return(
          <div key={index} className="flex flex-col items-center justify-center drop-shadow-xl z-10 h-[9.5rem] w-[47%] rounded-xl
               bg-white p-2 my-2 md:mx-0 md:w-[24%] md:h-[10.5rem] md:p-4 lg:w-[24%] lg:h-[13.5rem] lg:rounded-2xl lg:p-7 xl:h-[18rem] 
               xl:w-[22%] xl:p-10 xl:rounded-3xl">
                <img className='w-9 md:w-10 lg:w-12 xl:w-20'
                src={item.icon} alt="card icons" />
                <p className='text-[#504E4E] mt-4 text-center font-inter leading-5 text-[16px] md:font-medium lg:text-[18px] lg:leading-6 lg:font-semibold 
                xl:text-[25px] xl:font-semibold xl:leading-9 xl:mt-5'>
                  {item.title}
                </p>
          </div>
            )
          })}

        </div>
      </div>

      <div className='flex flex-col items-center justify-center py-8 bg-white px-6 xl:py-10'>
        <p className='text-[#504E4E] text-[25px] text-center font-semibold leading-8 md:w-[60%] md:text-[28px] lg:w-[60%] lg:text-[33px] lg:leading-10 xl:text-[43px] xl:leading-[50px]'>
            We’re wired for the ambitious businesses of today.
        </p>
        <p className='text-[#504E4E] text-[14px] text-center mt-2 md:w-[60%] md:text-[15px] md:mt-4 lg:w-[60%] lg:text-[17px] xl:text-[21px]'>
           Thousands of forward-thinking businesses rely on Alpha X everyday to turbo-charge their business financial operations
        </p>

      </div>

    </div>
  )
}

export default HomeSection4