import bgImg from '../../assets/bg-5.png'

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#181818] py-7 bg-[length:200px_200px] bg-left bg-no-repeat md:flex-row 
    md:justify-between md:items-center md:py-12 md:px-20 md:bg-[length:250px_230px] md:bg-left lg:px-28 lg:py-14 lg:bg-[length:270px_270px] xl:px-44 xl:py-20
    xl:bg-[length:420px_380px]"
    style={{backgroundImage: `url(${bgImg})`}}>
        <p className="text-white text-[25px] md:text-[28px] lg:text-[32px] xl:text-[45px]">
           Get Started <br /> with
           <span className="font-bold"> Alpha-X</span> 
        </p>
        <a href="https://form.jotform.com/231835908138563" target="_blank" rel="noopener noreferrer">
        <button className="text-white bg-[#FD602A] h-9 w-36 mt-4 rounded-lg text-center text-[10px] hover:bg-[#504E4E] md:mr-20 md:text-[11px] md:h-10 md:w-32
        lg:w-40 lg:mr-28 lg:h-11 xl:text-[15px] xl:rounded-2xl xl:h-16 xl:w-56 xl:mr-36">
            Lets work together
        </button>
        </a>
    </div>
  )
}

export default GetStarted