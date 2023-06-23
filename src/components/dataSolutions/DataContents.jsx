import bgImg from '../../assets/bg-10.png'

const DataContents = () => {
    const items = [
        {
            title: 'Data Strategy and Consulting: ',
            content: 'We work closely with your organization to develop a comprehensive data strategy aligned with your business objectives. Our experienced consultants provide valuable insights, helping you identify opportunities, define data-driven initiatives, and establish a roadmap for success.'
        },
        {
            title: 'Data Integration and Management: ',
            content: 'We specialize in integrating and managing diverse data sources, ensuring seamless data flow and availability. Our experts employ industry-leading technologies to cleanse, transform, and consolidate your data, enabling you to make informed decisions based on accurate and reliable information.'
        },
        {
            title: 'Data Analytics and Insights: ',
            content: 'We employ advanced analytics techniques to unlock hidden patterns, trends, and insights within your data. Our data scientists utilize machine learning and artificial intelligence algorithms to derive actionable intelligence, empowering you to make data-driven decisions that drive growth and innovation.'
        },
        {
            title: 'Data Visualization and Reporting: ',
            content: 'We transform complex data into visually appealing and interactive dashboards and reports. Our visualization experts create intuitive and meaningful visual representations of your data, making it easier for stakeholders to understand and interpret information, leading to more informed decision-making.'
        },
        {
            title: 'Data Security and Privacy: ',
            content: 'We prioritize the security and privacy of your data. Our team implements robust security measures, including encryption, access controls, and data anonymization techniques, to safeguard your sensitive information. We ensure compliance with data protection regulations and industry best practices.'
        },
        {
            title: 'Data Governance and Compliance: ',
            content: 'We assist you in establishing data governance frameworks and processes, ensuring data quality, integrity, and compliance. Our experts help you define policies, implement data governance tools, and establish data stewardship practices to maximize the value of your data assets while maintaining regulatory compliance.'
        },
    ]

  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 xl:pt-28">
        <div className="flex items-center justify-center w-full">
            <img className='w-full h-[9rem] md:h-[11rem] lg:h-[15rem] xl:h-full' 
            src={bgImg} alt="..." />
             <p className="absolute text-[22px] text-center text-[#ffff] md:text-[25px] lg:text-[36px] xl:text-[50px]">
                 Data Solutions
             </p>
        </div>

        <div className='flex flex-col items-start justify-center w-full px-6 mt-12 md:px-20 lg:px-28 lg:mt-14 xl:mt-20 xl:px-44'>
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

export default DataContents