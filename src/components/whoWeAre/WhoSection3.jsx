import img1 from '../../assets/img-11.png'
import img2 from '../../assets/img-12.png'


const WhoSection3 = () => {
    const items = [
        {
            content: 'integrity'
        },
        {
            content: 'Drive'
        },
        {
            content: 'Honesty'
        },
        {
            content: 'Purpose'
        },
    ]

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full bg-[#181818] text-[#ffff] px-6 py-8 md:px-14 lg:py-8 xl:py-14">
            <p className="text-center text-[15px] md:w-[80%] md:text-[18px] lg:text-[23px] lg:w-[65%] lg:leading-8 xl:w-[60%] xl:text-[28px] xl:leading-10">
               because we genuinely prioritize building strong relationships, we have become the preferred choice as a consulting company.
            </p>
            <button className="bg-[#FD602A] h-9 w-32 rounded-lg text-center text-[10px] mt-5 md:h-10 md:w-36 lg:h-11 lg:rounded-xl lg:mt-8 xl:mt-10 xl:text-[13px]
            xl:h-12 xl:w-44">
               Lets work together
            </button>
        </div>

        <div className="flex flex-col items-center just-center w-full py-8 px-6 md:py-12 md:px-14 lg:px-16 xl:px-24 xl:py-20">
            <p className="text-[#504E4E] text-[21px] font-semibold mb-3 md:mb-5 md:text-[23px] lg:text-[30px] lg:mb-7 xl:text-[40px] xl:mb-8">
               Our Core Values
            </p>

            <div className="flex flex-wrap items-center justify-between w-full">
            {items.map((item, index)=>{
                return(
               <div key={index} className="flex items-center justify-center my-3 shadow-xl bg-[#D9D9D933] text-[#504E4E] text-center h-11 w-[46%] border-[0.05em]
                border-[#febca6] rounded-lg text-[12px] font-medium md:w-[21%] md:h-14 md:text-[13px] lg:h-16 lg:rounded-xl lg:w-[21%] lg:text-[13px] xl:h-20 xl:w-[20%] 
                xl:text-[17px]">
                   {item.content}
               </div>
                )
            })}
            </div>

        </div>

        <div className="flex flex-col items-start justify-center w-full md:flex-row">
            <img className="w-full h-[18rem] md:h-[20rem] lg:h-[25rem] xl:h-full"
             src={img1} alt="" />
            <img className="w-full h-[18rem] md:h-[20rem] lg:h-[25rem] xl:h-full"
             src={img2} alt="" />

        </div>

    </div>
  )
}

export default WhoSection3