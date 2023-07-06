import bgImg from '../../assets/bg-9.png'

const DevOpsContent = () => {
    const items = [
        {
            title: 'DevOps Consulting:',
            content: 'Our experienced team of DevOps consultants works closely with you to assess your current infrastructure, processes, and goals. We provide expert guidance and create a roadmap to help you adopt DevOps practices effectively. We analyze your software development lifecycle, identify bottlenecks, and recommend the right tools and methodologies to optimize your delivery pipeline.'
        },
        {
            title: 'Continuous Integration and Delivery:',
            content: 'We enable continuous integration and delivery (CI/CD) pipelines that automate and streamline your software development processes. By integrating tools, automating builds, tests, and deployments, we help you achieve faster and more frequent releases while maintaining code quality. Our experts ensure the seamless integration of development, testing, and operations, resulting in shorter time to market and improved customer satisfaction.'
        },
        {
            title: 'Infrastructure as Code (IaC):',
            content: 'We help you embrace Infrastructure as Code (IaC) principles to manage and provision your infrastructure efficiently. By leveraging tools like Terraform, Ansible, or Chef, we enable the creation of reusable, version-controlled infrastructure templates. This approach ensures consistency, scalability, and reproducibility across your environments, reducing manual errors and enabling rapid infrastructure provisioning.'
        },
        {
            title: 'Cloud Adoption and Migration::',
            content: "We assist you in leveraging the power of cloud computing by enabling smooth cloud adoption and migration. Our experts analyze your existing infrastructure, assess your requirements, and devise a comprehensive cloud strategy tailored to your business needs. Whether you're migrating to public, private, or hybrid cloud environments, we ensure a secure and efficient transition, optimizing performance, scalability, and cost-effectiveness."
        },
        {
            title: 'Monitoring and Performance Optimization:',
            content: "We help you gain deep insights into your application's performance and availability through comprehensive monitoring and performance optimization solutions. By implementing monitoring tools and setting up automated alerting systems, we enable proactive issue detection and resolution, ensuring optimal performance, scalability, and user experience."
        },
    ]

  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 xl:pt-28">
        <div className="flex flex-col items-center justify-center w-full">
            <img className='w-full h-[9rem] md:h-[11rem] lg:h-[15rem] xl:h-full' 
            src={bgImg} alt="..." />
             <p className="text-[22px] text-center mt-5 text-[#504E4E] md:text-[25px] lg:text-[36px] lg:mt-7 xl:text-[50px] xl:mt-10">
               DevOps Solutions
             </p>
        </div>

        <div className='flex flex-col items-start justify-center w-full px-6 mt-5 md:px-20 lg:px-28 lg:mt-7 xl:mt-10 xl:px-44'>
            {items.map((item, index)=>{
                return(
                 <p key={index} className='text-[13px] text-[#504E4E] mb-5 lg:text-[14px] xl:text-[19px] xl:mb-9'>
                     <span className='font-semibold lg:font-bold'>{item.title}</span>
                     {item.content}
                 </p>
                )
            })}
        </div>
    </div>
  )
}

export default DevOpsContent