import { RiWhatsappFill } from 'react-icons/ri'
import { HiArrowRight } from 'react-icons/hi'
import bgImg from '../../assets/bg-5.png'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-[length:250px_250px] bg-left-bottom bg-no-repeat 
    bg-[#D15635] px-6 py-12 md:flex-row md:justify-between md:px-20 md:bg-[length:300px_300px] lg:bg-[length:250px_250px] lg:py-14 lg:bg-left xl:px-24 xl:py-20
    xl:bg-[length:400px_350px]'
    style={{backgroundImage: `url(${bgImg})`}}>
        <div className='flex flex-col items-center justify-start w-full md:w-[30%] md:items-start'>
            <p className='text-[18px] font-normal text-white lg:text-[20px] lg:font-medium xl:text-[30px]'>
               Get in touch with Us
            </p>
            <a href='#' className='flex items-center justify-between bg-[#2D2B2C] text-[13px] text-white px-6 rounded-3xl h-11 w-36 mt-3 xl:h-14 xl:w-44 
            xl:text-[17px] xl:px-7 xl:mt-5'>
                <RiWhatsappFill className='text-[23px] text-[#44C554] xl:text-[30px]' />
                WhatsApp
            </a>
        </div>

        <div className='flex flex-col items-center justify-center mt-10 w-[75%] md:w-[40%] md:mt-0'>
            <div className='flex items-center justify-between w-full'>
                <p className='text-white text-[18px] xl:text-[27px] hover:text-[#504E4E]'>
                   send us mail right away
                </p>
                <HiArrowRight className='text-white text-[25px] xl:text-[40px] hover:text-[#504E4E]' />
            </div>
            <hr className='border-[1%] border-white w-full mt-3 xl:mt-6' />

        </div>
    </div>
  )
}

export default Contact