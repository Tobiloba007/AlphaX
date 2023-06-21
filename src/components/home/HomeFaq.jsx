import { useState } from 'react'
import bgImg from '../../assets/bg-4.png'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { IoIosArrowDropdownCircle } from 'react-icons/io'



const HomeFaq = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    
    const handleShow1 = () => {
        setShow1(!show1)
    }
    const handleShow2 = () => {
        setShow2(!show2)
    }
    const handleShow3 = () => {
        setShow3(!show3)
    }
    const handleShow4 = () => {
        setShow4(!show4)
    }


  return (
    <div className="flex flex-col items-center justify-start w-full">

               {/* TOP */}
        <div className="flex flex-col items-center justify-start w-full bg-[length:400px_400px] bg-right-bottom bg-no-repeat bg-[#121214] pt-14 pb-10 px-6 md:pt-16"
        style={{backgroundImage: `url(${bgImg})`}}>
            <h1 className="text-[25px] font-semibold text-[#dddd] text-center leading-7 w-[70%] md:text-[30px] md:w-[45%] md:leading-10 lg:text-[36px] lg:w-[40%]
            xl:text-[45px] xl:w-[35%] xl:leading-[3.6rem] text-gradient-to-r from-[#363636] via-[ #BCBCBC] to-pink-[#363636]">
               Things you might like to know
            </h1>
            <div className="flex flex-wrap items-start justify-center w-full mt-2 md:mt-0 lg:justify-between lg:w-[85%] xl:w-[75%]">
                         
                            {/* FIRST ACCORDION */}
                <div className='flex flex-wrap items-start justify-center w-full md:w-[45vw] mt-8 lg:w-[35vw] xl:w-[30vw]'>
                   <div className="flex flex-col items-center justify-start w-[80%] md:w-[35vw] md:mx-10 md:mt-4 lg:w-[35vw] lg:mx-10 xl:w-[30vw]">
                       <div className="flex items-center justify-between w-full mb-2">
                           <h1 className="text-[13px] font-semibold text-white xl:text-[16px]">
                              EXPERIENCE & EXPERTISE
                           </h1>
                           {
                            show1
                            ?<IoIosArrowDropupCircle onClick={handleShow1} className='text-[#ffff] text-[22px] xl:text-[25px]' />
                            :<IoIosArrowDropdownCircle onClick={handleShow1} className='text-[#ffff] text-[22px] xl:text-[25px]' />
                           }
                       </div>
                       <hr className='border-[1%] border-[#fbfafa4d] w-full' />
                       <p className='text-white mt-2 text-[13px] h-[5rem] xl:text-[16px] xl:h-[6rem]'>
                       {
                        show1
                        ? 'Our team comprises certified professionals with extensive experience in the cybersecurity industry. We stay up to date with the latest trends and emerging threats to provide you with the best defense strategies.'
                        : ""
                       }
                       </p>
                   </div>
                </div>
                            {/* SECOND ACCORDION */}
                <div className='flex flex-wrap items-start justify-center w-full md:w-[45vw] mt-8 lg:w-[35vw] xl:w-[30vw]'>
                   <div className="flex flex-col items-center justify-start w-[80%] md:w-[35vw] md:mx-10 md:mt-4 lg:w-[35vw] lg:mx-10 xl:w-[30vw]">
                       <div className="flex items-center justify-between w-full mb-2">
                           <h1 className="text-[13px] font-semibold text-white xl:text-[16px]">
                               TAILORED SOLUTION
                           </h1>
                           {
                            show2
                            ?<IoIosArrowDropupCircle onClick={handleShow2} className='text-[#ffff] text-[22px] xl:text-[25px]' />
                            :<IoIosArrowDropdownCircle onClick={handleShow2} className='text-[#ffff] text-[22px] xl:text-[25px]' />
                           }
                       </div>
                       <hr className='border-[1%] border-[#fbfafa4d] w-full' />
                       <p className='text-white mt-2 text-[13px] h-[5rem] xl:text-[16px] xl:h-[6rem]'>
                       {
                        show2
                        ? "We understand that every organization is unique. That's why we develop customized security solutions that align with your specific requirements, ensuring maximum protection without unnecessary complexity."
                        : ""
                       }
                       </p>
                   </div>
                </div>
                            {/* THIRD ACCORDION */}
                <div className='flex flex-wrap items-start justify-center w-full md:w-[45vw] mt-8 lg:w-[35vw] xl:w-[30vw]'>
                   <div className="flex flex-col items-center justify-start w-[80%] md:w-[35vw] md:mx-10 md:mt-4 lg:w-[35vw] lg:mx-10 xl:w-[30vw]">
                       <div className="flex items-center justify-between w-full mb-2">
                           <h1 className="text-[13px] font-semibold text-white xl:text-[16px]">
                               CUTTING-EDGE TECHNOLOGY
                           </h1>
                           {
                            show3
                            ?<IoIosArrowDropupCircle onClick={handleShow3} className='text-[#ffff] text-[22px] xl:text-[25px]' />
                            :<IoIosArrowDropdownCircle onClick={handleShow3} className='text-[#ffff] text-[22px] xl:text-[25px]' />
                           }
                       </div>
                       <hr className='border-[1%] border-[#fbfafa4d] w-full' />
                        <p className='text-white mt-2 text-[13px] h-[5rem] xl:text-[16px] xl:h-[6rem]'>
                       {
                        show3
                        ? 'We leverage advanced technologies, machine learning, and artificial intelligence to enhance our threat detection capabilities and stay ahead of cybercriminals.'
                        : ""
                       }
                       </p>
                   </div>
                </div>
                            {/* FOURTH ACCORDION */}
                <div className='flex flex-wrap items-start justify-center w-full md:w-[45vw] mt-8 lg:w-[35vw] xl:w-[30vw]'>
                   <div className="flex flex-col items-center justify-start w-[80%] md:w-[35vw] md:mx-10 md:mt-4 lg:w-[35vw] lg:mx-10 xl:w-[30vw]">
                       <div className="flex items-center justify-between w-full mb-2">
                           <h1 className="text-[13px] font-semibold text-white xl:text-[16px]">
                                COMPLIANCE & REGULATION
                           </h1>
                           {
                            show4
                            ?<IoIosArrowDropupCircle onClick={handleShow4} className='text-[#ffff] text-[22px] xl:text-[25px]' />
                            :<IoIosArrowDropdownCircle onClick={handleShow4} className='text-[#ffff] text-[22px] xl:text-[25px]' />
                           }
                       </div>
                       <hr className='border-[1%] border-[#fbfafa4d] w-full' />
                       <p className='text-white mt-2 text-[13px] h-[5rem] xl:text-[16px] xl:h-[6rem]'>
                       {
                        show4
                        ? 'We help you navigate the complex landscape of industry-specific regulations and compliance standards, ensuring your organization meets the necessary security requirements.'
                        : ""
                       }
                       </p>
                   </div>
                </div>

            </div>

        </div>
        <div>

        </div>

    </div>
  )
}

export default HomeFaq