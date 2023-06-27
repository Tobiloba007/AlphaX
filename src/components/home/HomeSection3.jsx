import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/img-1.png'


const HomeSection3 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center font-Inter">
        <div className="flex flex-col items-start justify-center w-full px-6 py-10 md:flex-row md:px-14 lg:py-20 lg:px-16 xl:py-24 xl:px-24">
             <div className="flex flex-col items-start justify-center">
                 <p className="text-[#FD602A] text-[18px] md:text-[21px] lg:text-[22px] xl:text-[25px]">
                     Who we are
                 </p>
                 <h1 className="text-[#504E4E] text-[22px] font-normal w-[80%] leading-8 md:text-[28px] md:w-[75%] md:mt-1
                 lg:text-[38px] lg:leading-[3rem] xl:text-[45px] xl:leading-[3.5rem]">
                   Consulting with fresh perspective
                 </h1>
             </div>

             <div className="flex items-start justify-center mt-4 md:w-[80%] lg:w-[80%] xl:w-[60%]">
                <p className="text-[#504E4E] text-[13px] leading-6 lg:text-[15px] xl:text-[20px] xl:leading-8">
                   We are a team of business strategists, dynamic technologists, and visionaries dedicated to data-driven consulting. Our focus is on providing efficient and tailored solutions that meet your specific needs, ensuring your success. With our expertise, we deliver comprehensive answers that drive results.
                </p>
             </div>
        </div>
        <div className='relative'>
            <img className='relativeh-full w-full md:h-full'
            src={img1} alt="coperate image" />
             <button onClick={()=>navigate('/who-we-are' )}
             className="absolute bottom-5 mx-6 bg-[#FD602A] text-white rounded-lg h-9 w-24 text-center text-[11px] 
                 md:bottom-8 md:mx-14 lg:text-[12px] lg:h-10 lg:mx-16 lg:w-28 lg:bottom-10 xl:text-[16px] xl:h-[3.5rem] xl:w-36 
                 xl:mx-24 xl:rounded-[15px] xl:bottom-14 hover:bg-[#504E4E]">
                    Learn More
            </button>
        </div>
    </div>
  )
}

export default HomeSection3