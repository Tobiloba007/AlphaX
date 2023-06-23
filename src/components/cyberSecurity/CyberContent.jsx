import bgImg from '../../assets/bg-8.png'

const CyberContent = () => {
    const items = [
        {
            title: 'Vulnerability Assessment and Penetration Testing: ',
            content: 'Our experts conduct rigorous assessments to identify vulnerabilities in your systems, networks, and applications. We simulate real-world attacks to uncover potential weaknesses and provide actionable recommendations to fortify your defenses.'
        },
        {
            title: 'Managed Firewall and Intrusion Detection Systems: ',
            content: 'We deploy and manage robust firewalls and intrusion detection systems to safeguard your network from unauthorized access and suspicious activities. Our proactive monitoring ensures timely threat detection and response, minimizing potential damage.'
        },
        {
            title: 'Endpoint Protection and Antivirus Solutions: ',
            content: 'We implement industry-leading endpoint protection solutions to secure your devices from malware, ransomware, and other malicious threats. Our antivirus software keeps your systems up to date with the latest threat intelligence, ensuring constant protection.'
        },
        {
            title: 'Secure Cloud Solutions: ',
            content: 'Our team specializes in securing cloud environments, providing comprehensive strategies and solutions for cloud security. We help you migrate to the cloud securely and maintain data integrity, confidentiality, and availability.'
        },
        {
            title: 'Security Awareness Training: ',
            content: 'We believe that education is key to mitigating cyber risks. Our customized training programs empower your employees with the knowledge and skills necessary to identify and respond to potential security threats effectively.'
        },
        {
            title: 'Incident Response and Forensics: ',
            content: 'In the unfortunate event of a cyber incident, our rapid response team is ready to investigate and mitigate the damage. We employ state-of-the-art forensics techniques to identify the source and scope of the breach, enabling you to recover quickly and strengthen your security posture.'
        },
    ]

  return (
    <div className="flex flex-col items-center justify-center w-full pt-20 xl:pt-28">
        <div className="flex items-center justify-center w-full">
            <img className='w-full h-[9rem] md:h-[11rem] lg:h-[15rem] xl:h-full' 
            src={bgImg} alt="..." />
             <p className="absolute text-[22px] text-center text-[#504E4E] md:text-[25px] lg:text-[36px] xl:text-[50px]">
               Our cyber security<br />Services
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

export default CyberContent