import img1 from '../../assets/partner-1.png'
import img2 from '../../assets/partner-2.png'
import img3 from '../../assets/partner-3.png'
import img4 from '../../assets/partner-4.png'
import img5 from '../../assets/partner-5.png'
import img6 from '../../assets/partner-6.png'
import img7 from '../../assets/partner-7.png'
import bgImg from '../../assets/bg-7.png'

const Partners = () => {
    const items = [
        {
            logo: img1,
        },
        {
            logo: img2,
        },
        {
            logo: img3,
        },
        {
            logo: img4,
        },
        {
            logo: img5,
        },
        {
            logo: img6,
        },
        {
            logo: img7,
        },
    ]
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[length:300px_300px] bg-right bg-no-repeat pb-6 md:mt-4 md:pb-10 lg:mt-6 lg:pb-12 xl:mt-4 xl:pb-16
     xl:bg-[length:400px_400px]"
    style={{backgroundImage: `url(${bgImg})`}}>
        <div className="flex flex-col items-center justify-start w-full">
          <p className="text-[#FD602A] text-[16px] md:text-[16px] md:mb-3 lg:text-[17px] xl:text-[22px] xl:mb-4">
              Our Partners
          </p>
          <div className="flex flex-wrap items-center justify-between w-full px-6 md:px-14 lg:px-24 xl:px-44">
            {items.map((item, index)=>{
                return(
                    <img key={index} className='w-24 md:w-28 md:mx-3 lg:w-32 lg:mx-7 xl:w-44 xl:mx-10 xl:mb-2'
                    src={item.logo} alt="partners" />
                )
            })}
          </div>
        </div>

    </div>
  )
}

export default Partners