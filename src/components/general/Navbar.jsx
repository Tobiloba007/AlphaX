import { useState } from 'react'
import logo from '../../assets/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [ham, setHam] = useState(false)

    const openHam = () => {
        setHam(!ham)
    }
    const closeHam = () => {
        setHam(!ham)
    }

    const navigate = useNavigate();

  return (
    <div className="fixed flex flex-col bg-black items-center z-50 shadow-lg justify-between w-full">
        <div className="flex items-center justify-between px-6 bg-white h-[75px] w-full md:h-[80px] md:px-14 lg:px-16 
        xl:h-[110px] xl:px-24">
          <Link to={{ pathname: '/', search: '?sectionId=home' }}>
            <img onClick={()=>navigate('/')}
            className='w-24 md:w-28 lg:w-36 xl:w-44'
            src={logo} alt="navbar logo" />
          </Link>

          <div className='hidden lg:flex items-center justify-between'>
            <Link to={{ pathname: '/what-we-do', search: '?sectionId=what' }}
            className='text-[#504E4E] text-[15px] font-medium px-4 xl:text-[19px] xl:px-6 hover:text-[#FD602A]'>
               What we do
            </Link>
            <Link to={{ pathname: '/who-we-are', search: '?sectionId=who' }}
            className='text-[#504E4E] text-[15px] font-medium px-4 xl:text-[19px] xl:px-6 hover:text-[#FD602A]'>
                Who we are
            </Link>
            <Link to={{ pathname: '/blog', search: '?sectionId=blog' }}
            className='text-[#504E4E] text-[15px] font-medium px-4 xl:text-[19px] xl:px-6 hover:text-[#FD602A]'>
                 Blog
            </Link>
            <Link to={{ pathname: '/what-we-do', search: '?sectionId=contactUs' }} className='text-[#504E4E] text-[15px] font-medium px-4 xl:text-[19px] xl:px-6 hover:text-[#FD602A]'>
                 Contact Us
            </Link>
          </div>

          {/* MOBILE SCREEN HAMBURGER NAVBAR*/}
          <div className='lg:hidden'>
          {
            !ham ?
          <RxHamburgerMenu 
          className='text-black text-[24px] md:text-[27px]'
          onClick={openHam} 
          />
          :
          <AiOutlineClose
          className='text-black text-[27px] font-thin' 
          onClick={closeHam}
          />
          }
          </div>
        </div>

        {
          ham ?
        <div className='absolute top-[4.8rem] flex flex-col items-center justify-start pt-12 mt-1 w-[87%] h-80 bg-white rounded-md md:w-[85%] md:top-20 lg:hidden'>
            <Link to={{ pathname: '/what-we-do', search: '?sectionId=what' }} 
            className='text-[#504E4E] text-[14px] font-medium pb-2 md:text-[15px]'>
              What we do
            </Link>
            <hr className='border-[#c3c1c1] border-1 w-[80%]' />

            <Link to={{ pathname: '/who-we-are', search: '?sectionId=who' }} 
            className='text-[#504E4E] pt-9 text-[14px] font-medium pb-2 md:text-[15px] md:font-medium'>
              Who we are
            </Link>
            <hr className='border-[#c3c1c1] border-1 w-[80%]' />

            <Link to={{ pathname: '/blog', search: '?sectionId=blog' }}
            className='text-[#504E4E] pt-9 text-[14px] font-medium pb-2 md:text-[15px] md:font-medium'>
              Blog
            </Link>
            <hr className='border-[#c3c1c1] border-1 w-[80%]' />

            <Link to={{ pathname: '/what-we-do', search: '?sectionId=contactUs' }}
            className='text-[#504E4E] pt-9 text-[14px] font-medium pb-2 md:text-[15px] md:font-medium'>
               Contact Us
            </Link>
            <hr className='border-[#c3c1c1] border-1 w-[80%]' />
        </div>
        : <div className='hidden'></div>
        }

    </div>
  )
}

export default Navbar