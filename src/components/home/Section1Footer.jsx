import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'
import brand5 from '../../assets/brand5.png'


const Section1Footer = () => {
  return (
    <div className="flex items-center justify-between w-full bg-white h-16 px-2 md:px-10 md:h-20 lg:px-48 xl:px-80 xl:h-20 xl:pb-7">
        <img className='w-[70px] md:w-[80px] lg:w-[80px] xl:w-[120px]'
        src={brand1} alt="" />
        <img className='w-[70px] md:w-[80px] lg:w-[90px] xl:w-[140px]'
        src={brand2} alt="" />
        <img className='w-[50px] md:w-[60px] lg:w-[45px] xl:w-[70px]'
        src={brand3} alt="" />
        <img className='w-[70px] md:w-[80px] lg:w-[60px] xl:w-[100px]'
        src={brand4} alt="" />
        <img className='w-[60px] md:w-[70px] lg:w-[50px] xl:w-[90px]'
        src={brand5} alt="" />

    </div>
  )
}

export default Section1Footer