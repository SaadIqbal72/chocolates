import { Link, useParams } from "react-router-dom"

const ProductDetail = () => {
    const { id } = useParams();
    return (
        <div className="grid grid-cols-5 gap-[12px] mx-[50px] min-h-screen">
            <div className="col-span-2">
                <h1>{id}</h1>
            </div>
            <div className="col-span-3 flex flex-col gap-[20px]">
                <h2 className="text-[16px] lg:text-[30px] font-bold font-roboto text-[#4E342E]">Truffles Crucnch</h2>
                <p className="m-0 text-[16px] font-roboto font-normal text-[#4E342E]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem mollitia maiores, earum iste assumenda omnis, voluptas ipsa nulla odio esse doloremque vitae eligendi ratione perferendis excepturi? Et, asperiores dolorem? Debitis.</p>
                <div className="flex items-center justify-between">
                    <div className="relative min-w-[250px] p-[20px] rounded-[10px] border border-[#ccc]">
                        <p className="m-0 absolute top-[20px] right-[20px] px-[8px] py-[2px] rounded-[3px] leading-tight text-[16px] font-normal font-roboto text-[#E8DED5] bg-[#462D16]">9%</p>
                        <h2 className="text-[16px] lg:text-[30px] font-bold font-roboto text-[#4E342E]">500.00</h2>
                        <h4 className="m-0 text-[20px] font-roboto font-normal line-through text-[#CC7874]">700.00</h4>
                    </div>
                    <div className="flex justify-center">
                        <Link to={`/product`} className="flex justify-center gap-[5px] w-max px-[30px] py-[7px] rounded-full m-0 text-[16px] font-roboto font-normal transition duration-300 border border-[#4E342E] text-[#4E342E] hover:text-[#E8DED5] hover:bg-[#1C1209]">Add To Cart</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px] pt-[20px] border-t border-[#D8C8B8]">
                    <h2 className="text-[16px] lg:text-[30px] font-bold font-roboto text-[#4E342E]">Gift Wrapping?</h2>
                    <div className="flex items-center gap-[20px]">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                className="hidden peer"
                            />
                            <div className="w-5 h-5 border-2 border-gray-400 rounded flex items-center justify-center peer-checked:bg-[#4E342E] peer-checked:border-[#4E342E]">
                                <div className="peer-checked:!block">
                                    <svg
                                        className="k w-3 h-3 text-[#E8DED5] peer-checked:text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-sm font-medium">
                                Seasonal Wrapping
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                className="hidden peer"
                            />
                            <div className="w-5 h-5 border-2 border-gray-400 rounded flex items-center justify-center peer-checked:bg-[#4E342E] peer-checked:border-[#4E342E]">
                                <div className="peer-checked:!block">
                                    <svg
                                        className="k w-3 h-3 text-[#E8DED5] peer-checked:text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-sm font-medium">
                                Seasonal Wrapping
                            </span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px] pt-[20px] border-t border-[#D8C8B8]">
                    <h2 className="text-[16px] lg:text-[30px] font-bold font-roboto text-[#4E342E]">Gift Tag Message</h2>
                    <textarea rows={5} className="rounded-[10px] w-full resize-none border border-[#D8C8B8] bg-transparent" ></textarea>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail