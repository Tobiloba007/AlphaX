import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
// import brand5 from '../../assets/brand5.png'


const Section1Footer = () => {
  return (
    <div className="flex items-center justify-between w-full bg-white h-16 px-6 md:px-14 md:h-20 lg:px-16 xl:px-24 xl:h-20 xl:pb-7">
        <img className='w-[80px] md:w-[90px] lg:w-[100px] xl:w-[130px]'
        src={brand1} alt="Microsoft" />
        <img className='w-[90px] md:w-[100px] lg:w-[110px] xl:w-[160px]'
        src={brand2} alt="Microsoft Azure" />
        <img className='w-[55px] md:w-[60px] lg:w-[65px] xl:w-[90px]'
        src={brand3} alt="AWS" />
        <img className='w-[80px] md:w-[90px] lg:w-[100px] xl:w-[130px]'
        src={brand4} alt="Google" />
        {/* <img className='w-[60px] md:w-[70px] lg:w-[50px] xl:w-[90px]'
        src={brand5} alt="" /> */}

    </div>
  )
}

export default Section1Footer