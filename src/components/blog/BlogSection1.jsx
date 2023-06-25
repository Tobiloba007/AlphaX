import { Link } from 'react-router-dom'
import bgImg from '../../assets/bg-2.png'
import img1 from '../../assets/img-13.png'

const BlogSection1 = () => {
  const items = [
    {
      id: 1,
      img: img1,
      title: 'Understanding The Code Review Automation Process in DevOps',
      content: 'DevOps is a methodology that has been employed over the years in firms and organizations, especially the big ones. It is a series of processes ranging from development to operational IT.',
      date: 'Thursday, 22 June',
    },
    {
      id: 2,
      img: img1,
      title: 'Setting your Kubernetes cluster up with Prometheus and Grafana using Helm',
      content: 'Prometheus and Grafana using Helm charts. To follow this guide properly, you will need to have basic knowledge of Kubernetes and communicating with the cluster using the kubectl command line tool, Prometheus and Grafana.',
      date: 'Thursday, 15 June',
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-full pt-24 px-6 md:px-14 lg:px-16 xl:px-24">
      <p className="text-[#FD602A] text-left w-full mb-3 text-[14px] pt-4 md:text-[16px] md:pb-0 md:pt-8 lg:text-[18px] xl:text-[23px] xl:pt-24">
          Blog
      </p>

        {items.map((item)=> {
          return(
      <div key={item.id} className="flex flex-col items-center justify-start w-full mb-20 md:flex-row-reverse md:justify-center md:items-start lg:mb-28 xl:mb-40
      bg-[length:350px_350px] bg-right-top bg-no-repeat md:bg-right xl:bg-[length:450px_450px]"
      style={{backgroundImage: `url(${bgImg})`}}
      >
        <div className="flex flex-col items-left justify-start w-full md:w-[65%] md:ml-8 lg:w-[60%] lg:ml-10 xl:ml-16">
          <p className="text-[#504E4E] text-[23px] font-semibold w-[80%] leading-8 md:text-[22px] md:w-full lg:text-[30px] lg:w-[75%] lg:leading-10 xl:text-[43px] 
          xl:leading-[3.2rem]">
             {item.title}
          </p>
          <p className="text-[#504E4E] pt-2 text-[13px] font-medium leading-6 md:text-[12px] lg:text-[16px] xl:text-[20px] xl:leading-9 lg:pt-4">
              {item.content}
           </p>
          <div className="flex items-center justify-between w-full mt-8 lg:mt-12 xl:mt-14">
            <p className="text-[#504E4E] text-[13px] font-semibold lg:text-[15px] xl:text-[22px]">
               Inside Alpha-X
            </p>
            <p className="text-[#504E4E] text-[13px] lg:text-[15px] xl:text-[18px]">
               {item.date}
            </p>
            <Link 
            to={`/blog-content/${item.id}`}
            // to='/blog-content'
            className="text-[#FD602A] text-[13px] font-semibold lg:text-[15px] xl:text-[18px]">
               Read more
            </Link>
          </div>
        </div>

        <div className='flex items-start justify-start w-full mt-6 md:w-[35%] lg:w-[35%] md:mt-0'>
          <img className="w-full h-full"
           src={item.img} alt="" />
        </div>

      </div>
          )
        })}


    </div>
  )
}

export default BlogSection1