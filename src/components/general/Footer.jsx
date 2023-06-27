import logo from '../../assets/logo.png'
import { TiSocialFacebookCircular } from 'react-icons/ti'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full px-6 pt-10 pb-5 md:px-14 md:pb-6 lg:px-16 xl:px-24">
        <div className="flex items-start justify-start w-full">
            <img className='w-20 lg:w-24 xl:w-32'
            src={logo} alt="logo" />
        </div>

        <div className="flex flex-col items-start justify-start w-full mt-7 md:flex-row md:items-start md:justify-between lg:mt-8 xl:mt-10">
            <div className="flex flex-col items-start justify-start w-full text-[#504E4E] md:w-[40%] md:justify-center">
                <p className='text-[10px] font-bold lg:text-[12px] xl:text-[15px]'>
                   NETHERLANDS
                </p>
                <p className='text-[12px] mt-1 w-[65%] lg:text-[13px] lg:w-[60%] xl:text-[15px] xl:mt-2 xl:w-[50%]'>
                   269 Jan Van Zutphenstraat, Amsterdam.
                </p>
                <p className='text-[12px] mt-2 lg:text-[13px] xl:text-[15px] xl:mt-4'>
                   +31681026136
                </p>
            </div>

            <div className="flex flex-col items-start justify-start w-full mt-6 text-[#504E4E] md:mt-0 md:w-[40%] md:justify-center">
                <p className='text-[10px] font-bold lg:text-[12px] xl:text-[15px]'>
                    NIGERIA
                </p>
                <p className='text-[12px] mt-1 w-[65%] lg:text-[13px] lg:w-[60%] xl:text-[15px] xl:mt-2 xl:w-[50%]'>
                    12B, Ogunbiyi Street, Iwaya Pedro, Yaba Lagos. 
                </p>
                <a href='mailto:Support@alphax.com?subject="subject text"' className='text-[12px] mt-2 lg:text-[13px] xl:text-[15px] xl:mt-4'>
                    support@alphax.com
                </a>
            </div>

            <div className="flex flex-col items-start justify-start w-full mt-6 text-[#504E4E] md:mt-0 md:w-[20%] md:justify-end">
                <a href='#' className='flex items-center justify-center text-[13px] my-2 md:my-0 xl:text-[15px] xl:mb-2'>
                    <TiSocialFacebookCircular className='text-[23px] mr-2 lg:text-[25px] xl:text-[30px]' />
                    facebook
                </a>
                <a href='#' className='flex items-center justify-center text-[13px] my-2 md:my-1 xl:text-[15px] xl:my-2'>
                    <TiSocialTwitterCircular className='text-[23px] mr-2 lg:text-[25px] xl:text-[30px]' />
                    twitter
                </a>
                <a href='https://www.linkedin.com/company/myalphax/' target="_blank"  rel="noreferrer" 
                className='flex items-center justify-center text-[13px] my-2 md:my-1 xl:text-[15px] xl:my-2'>
                    <TiSocialLinkedinCircular className='text-[23px] mr-2 lg:text-[25px] xl:text-[30px]' />
                    linkedIn
                </a>
            </div>

        </div>

        <div className="flex items-center justify-center w-full mt-7 text-[11px] md:mt-12 md:text-[11px] lg:text-[12px] 
        lg:mt-16 xl:mt-20 xl:text-[14px]">
            <AiOutlineCopyrightCircle className='mr-1 text-[13px] lg:text-[15px] xl:text-[17px]' />
            2023 AlphaX is powered by 
            <a href='#' className='text-[#D15635] pl-1 md:font-medium'>
                Lexcr8t
            </a>
        </div>

    </div>
  )
}

export default Footer