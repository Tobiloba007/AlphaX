import img1 from '../../assets/img-8.png'

const ContactUs = () => {
  return (
    <div className="flex flex-col itens-center justify-center w-full h-full py-8 md:flex-row-reverse md:py-12 md:px-14 lg:py-16 lg:px-16 xl:px-24 xl:py-24">
        <div className="flex flex-col itens-center justify-center w-full h-full px-6 md:px-0 md:ml-7 xl:ml-14">
            <h1 className="text-[20px] text-[#504E4E] font-semibold mb-4 md:text-[23px] lg:text-[30px] xl:text-[40px]">
               Contact Us
            </h1>
            <div className="flex flex-col items-start justify-start w-full text-[#504E4E] md:justify-center xl:mt-5">
                <p className='text-[10px] font-bold md:text-[11px] lg:text-[12px] xl:text-[18px]'>
                   NETHERLANDS
                </p>
                <p className='text-[12px] mt-1 md:text-[13px] leading-5 lg:text-[14px] lg:leading-7 xl:text-[18px] xl:mt-2'>
                   269 Jan Van Zutphenstraat, <br /> Amsterdam.
                </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-4 text-[#504E4E] md:mt-5 md:justify-center xl:mt-8">
                <p className='text-[10px] font-bold lg:text-[12px] xl:text-[18px]'>
                    NIGERIA
                </p>
                <p className='text-[12px] mt-1 lg:text-[13px] lg:leading-7 xl:text-[18px] xl:mt-2'>
                    12B, Ogunbiyi Street, Iwaya <br /> Pedro, Yaba Lagos. 
                </p>
            </div>
            <div>
                <button className="text-center text-white bg-[#FD602A] mt-5 h-11 w-36 rounded-lg text-[11px] hover:bg-[#504E4E] md:mt-6 md:h-12 lg:w-40 lg:text-[12px] xl:mt-10
                xl:h-16 xl:w-56 xl:text-[16px] xl:rounded-xl">
                   Book an appointment
                </button>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-full mt-8 px-6 md:mt-0 md:px-0">
            <img src={img1} alt="contact us" />
        </div>

    </div>
  )
}

export default ContactUs