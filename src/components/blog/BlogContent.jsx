import img1 from '../../assets/img-13.png'
import bgImg from '../../assets/bg-11.png'
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import { useParams } from 'react-router-dom';

const BlogContent = () => {

  const {id}=useParams()

  const items = [
    {
      'id': 1,
      'headerTitle': 'Understanding The Code Review Automation Process in DevOps',
      'headerContent': 'DevOps is a methodology that has been employed over the years in firms and organizations, especially the big ones. It is a series of processes ranging from development to operational IT.',
      'image': img1,
      'name': 'Onanuga Oreoluwa',
      'position': 'DevOps Engineer',
      'facebook': 'facebook.com',
      'twitter': 'twitter.com',
      'linkedin': 'linkedin.com',
      'title': 'What do we mean by Code Review Automation?',
      'content': `When a developer writes a code, and pushes it to GitHub. Changes can be made, but these changes might affect the already deployed application, and new bugs may arise. Organizations, businesses and developers with applications that engage a lot of users who will notice if there is a downtime can not afford to experience downtime during upgrades. Performing upgrades without downtime is the goal of every organization, but how do we ensure the changes made will not affect the code base. We need a mechanism that reviews the code, the changes made, and monitors the stability of the application before merging the pull request.`,
      'listHeader': 'Code Review Automation makes use of the following:',
      'list':
      <> 
      <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
      Continuous Integration
    </li>
    <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
       Test Driven Development
    </li>
    <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
        Code coverage
    </li>
    <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
        Linting
    </li>
    <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
         Nit Approach
    </li>
    </>
    },
    {
      'id': 2,
      'headerTitle': 'Setting your Kubernetes cluster up with Prometheus and Grafana using Helm',
      'headerContent': 'Prometheus and Grafana using Helm charts. To follow this guide properly, you will need to have basic knowledge of Kubernetes and communicating with the cluster using the kubectl command line tool, Prometheus and Grafana.',
      'image': img1,
      'name': 'Shonubi Bankole',
      'position': 'DevOps Engineer',
      'facebook': 'facebook.com',
      'twitter': 'twitter.com',
      'linkedin': 'linkedin.com',
      'title': '',
      'content': 'Hello World, welcome to this space!I will be talking about how to set your Kubernetes cluster up with Prometheus and Grafana using Helm charts. To follow this guide properly, you will need to have basic knowledge of Kubernetes and communicating with the cluster using the kubectl command line tool, Prometheus and Grafana.Without further ado, let’s delve into what we have.',
      'listHeader': 'Table of Contents',
      'list': 
      <> 
      <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
       What is Kubernetes?
    </li>
    <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
       Why do we have to monitor our cluster?
    </li>
    <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
       Prometheus and Grafana
    </li>
    <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
       Helm charts and releases
    </li>
    <li className='text-[#504E4E] text-[12px] xl:text-[16px]'>
       Installing Prometheus and Grafana on the cluster using Helm
    </li>
    </>,
    },
  ]


   let item = items.filter(item=> item.id == id)
  item = item[0]
  console.log(item)

  return (
    <div className="flex flex-col items-center justify-center w-full text-[#000] pt-24 pb-5 px-6 bg-[length:350px_350px] bg-right-top bg-no-repeat md:px-14 lg:px-16 
    lg:bg-[length:450px_450px] lg:pb-8 xl:px-24 xl:pb-10 xl:bg-[length:600px_600px]"
    style={{backgroundImage: `url(${bgImg})`}}
    >
      <p className="text-[#FD602A] text-left w-full mb-3 text-[14px] pt-4 font-medium md:text-[16px] md:pb-0 md:pt-8 lg:text-[18px] xl:text-[23px] xl:pt-20">
         Inside Alpha-X
      </p>
      <div className="flex flex-col items-start justify-center w-full">
          <p className="text-[#504E4E] text-[23px] font-semibold w-[80%] leading-8 md:text-[22px] md:w-[60%] lg:text-[30px] lg:w-[55%] lg:leading-10 xl:text-[43px] 
          xl:leading-[3.2rem]">
            {item.headerTitle}
          </p>
          <p className="text-[#504E4E] pt-2 text-[13px] font-medium leading-6 md:text-[12px] md:w-[60%] lg:w-[55%] lg:text-[16px] xl:text-[20px] xl:leading-9 lg:pt-4">
             {item.headerContent}
           </p>
      </div>

      <div className="flex flex-col items-start justify-center w-full mt-6  bg-[length:350px_350px] bg-right-bottom bg-no-repeat md:mt-4 lg:bg-[length:350px_350px] 
      xl:mt-6 xl:bg-[length:500px_500px]"
      style={{backgroundImage: `url(${bgImg})`}}>
          <img className="w-[80%] h-full md:w-[55%] lg:w-[55%]"
           src={item.image} alt="" />
           <div className='flex flex-col items-start justify-start w-full mt-2 lg:mt-3'>
            <p className='text-[#504E4E] text-[15px] font-semibold md:text-[16px] lg:text-[18px] xl:text-[23px]'>
              {item.name}
            </p>
            <p className='text-[#504E4E] text-[12px] font-medium md:text-[13px] lg:text-[14px] xl:text-[17px]'>
               {item.position}
            </p>
           </div>
      </div>

      <div className='flex flex-col items-start justify-center w-full bg-[length:350px_350px] bg-right bg-no-repeat md:flex-row md:mt-4 xl:mt-7'
      style={{backgroundImage: `url(${bgImg})`}}
      >
        <div className='flex items-start justify-between w-[30%] mt-2 md:flex-col md:mt-0 md:w-[15%] lg:w-[15%]'>
          <a href={item.facebook}>
            <TiSocialFacebookCircular className='text-[#D8D4D4] text-[28px] md:mb-2 lg:text-[32px] xl:text-[40px] xl:mb-3' />
          </a>
          <a href={item.twitter}>
            <TiSocialTwitterCircular className='text-[#D8D4D4] text-[28px] md:mb-2 lg:text-[32px] xl:text-[40px] xl:mb-3' />
          </a>
          <a href={item.linkedin}>
             <TiSocialLinkedinCircular className='text-[#D8D4D4] text-[28px] md:mb-2 lg:text-[32px] xl:text-[40px] xl:mb-3' />
          </a>
        </div>

        <div className='flex flex-col items-center justify-start mt-5 md:mt-0 md:w-[85%] lg:w-[85%] lg:pr-10 xl:pr-24'>
          <div className='flex flex-col items-start justify-start w-full mb-5 lg:mb-6 xl:mb-9'>
            <p className='text-[#403E3E] text-[12px] font-semibold lg:text-[13px] lg:font-bold xl:text-[16px]'>
               {item.title}
            </p>
            <p className='text-[#504E4E] text-[12px] leading-5 md:text-[12px] lg:text-[13px] lg:font-medium xl:text-[16px] xl:leading-7'>
              {item.content}
            </p>
            <p className='text-[#504E4E] text-[12px] md:text-[12px] lg:text-[13px] lg:font-medium xl:text-[16px]'>
              {item.listHeader}
            </p>
            <ul className='list-disc px-4 lg:text-[13px] lg:font-medium'>
              {item.list}
            </ul>

          </div>
        </div>

      </div>
        
    </div>
  )
}

export default BlogContent