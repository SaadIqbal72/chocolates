const QuantityCounter = () => {
    return (
        <div className="flex items-center gap-[5px]">
            <button className="cursor-pointer rounded-full outline-none w-[25px] h-[25px] lg:min-w-[30px] lg:min-h-[30px] flex items-center justify-center transition duration-300 border border-[#000] bg-[#000] text-[#fff] lg:text-[#000] lg:bg-transparent lg:hover:bg-[#000] lg:hover:text-[#fff]">-</button>
            <input type="num" value="1" placeholder="0" className="w-[50px] h-[30px] text-center px-[5px] bg-transparent border border-[#000] outline-none" />
            <button className="cursor-pointer rounded-full outline-none w-[25px] h-[25px] lg:min-w-[30px] lg:min-h-[30px] flex items-center justify-center transition duration-300 border border-[#000] bg-[#000] text-[#fff] lg:text-[#000] lg:bg-transparent lg:hover:bg-[#000] lg:hover:text-[#fff]">+</button>
        </div>
    )
}

export default QuantityCounter