import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import bgImg from '../../assets/bg-2.png'
import { Link, useNavigate } from 'react-router-dom'


const HomeSection2 = () => {

  const navigate = useNavigate();

    const items = [
        {
            id: 1,
            icon: icon1,
            title: 'Cyber Security',
            paragraph: 'We provide comprehensive and cutting-edge solutions to safeguard your business against evolving cyber threats. we offer a range of services tailored to meet your specific security needs.',
            link: {pathname: '/cyber-security', search: '?sectionId=cyber'},
        },
        {
            id: 2,
            icon: icon2,
            title: 'DevOps Solutions',
            paragraph: 'We are dedicated to helping businesses achieve seamless collaboration, continuous integration, and accelerated software delivery through our comprehensive DevOps services.',
            link: {pathname: '/dev-ops', search: '?sectionId=dev'},
        },
        {
            id: 3,
            icon: icon3,
            title: 'Data Solutions',
            paragraph: 'We assist you in expanding your current data systems or developing new ones while putting the cloud first. To lay the groundwork for your decision-making both now and in the future.',
            link: {pathname: '/data-solutions', search: '?sectionId=data'},
        },
    ]

  return (
    <div className="flex flex-col items-start justify-center font-Inter bg-cover bg-center bg-[#F4F4F4] h-[70rem] w-full px-6 md:px-14 
    md:h-[33rem] lg:px-16 lg:h-[40rem] lg:bg-right-top xl:px-24 xl:h-[53rem]"
     style={{backgroundImage: `url(${bgImg})`}}>
        <div className="flex flex-col items-start justify-center w-full md:flex-row">
             <div className="flex flex-col items-start justify-center">
                 <p className="text-[#FD602A] text-[18px] md:text-[21px] lg:text-[22px] xl:text-[25px]">
                    what we do
                 </p>
                 <h1 className="text-[#504E4E] text-[22px] font-normal w-[80%] leading-8 md:text-[28px] md:w-[50%] md:mt-1
                 lg:text-[38px] lg:leading-[3rem] xl:text-[45px] xl:leading-[3.5rem]">
                   We provide comprehensive solutions.
                 </h1>
                 <button onClick={()=>navigate('/what-we-do')}
                  className="bg-[#FD602A] text-white rounded-lg h-9 w-24 text-center text-[11px] mt-3 md:mt-6 
                 lg:text-[12px] lg:h-10 lg:w-28 xl:text-[16px] xl:h-[3.5rem] xl:w-36 xl:rounded-[15px] hover:bg-[#504E4E]">
                    Learn More
                 </button>
             </div>

             <div className="flex flex-col items-start justify-center mt-7 md:w-[90%] lg:w-[80%] xl:w-[70%]">
                <p className="text-[#504E4E] text-[13px] leading-6 lg:text-[15px] xl:text-[20px] xl:leading-8">
                   With our team of highly skilled professionals and advanced technologies, we offer a range of services tailored to meet your specific cybersecurity, data and cloud-related needs. Whether you&apos;re a small business, a large enterprise, or an individual, we have the expertise and resources to protect your digital assets and maintain your peace of mind.
                </p>
             </div>
        </div>

        {/* BOTTOM */}

        <div className="flex flex-wrap items-center justify-center w-full mt-7 md:justify-between lg:mt-12 xl:mt-14">
            {items.map((item, index)=> {
                return(
            <Link to={item.link} key={index} className="flex flex-col items-start justify-start drop-shadow-xl z-10 h-[13rem] w-[65%] rounded-xl
               bg-white mx-3 p-5 my-2 md:mx-0 md:w-[31.5%] md:h-[14.5rem] lg:w-[30%] lg:h-[16rem] lg:rounded-2xl xl:h-[25rem] xl:w-[29%] xl:p-10
               xl:rounded-3xl hover:bg-[#ffebe4] hover:scale-[0.99] border-[0.1em] border-[#FDE6DEE5]">
                <img className='w-9 md:w-10 lg:w-12 xl:w-16'
                src={item.icon} alt="" />
                <p className='text-[#504E4E] mt-4 w-[20%] font-Inter leading-5 text-[20px] lg:text-[24px] lg:leading-7 xl:text-[30px] xl:font-medium
                xl:leading-9 xl:mt-5'>
                  {item.title}
                </p>
                <p className='text-[#504E4E] font-Inter text-[9px] w-full leading-2 mt-2 md:text-[10px] lg:text-[11px] xl:text-[15px] xl:mt-3'>
                  {item.paragraph}
                </p>
            </Link>
            )
            })}

        </div>

    </div>
  )
}

export default HomeSection2