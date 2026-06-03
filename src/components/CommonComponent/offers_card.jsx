import { Link } from "react-router-dom"
import { formattedAmount } from "../../utils/HelperFunction"

const OfferCard = (item) => {
    return (
        <div className="relative flex flex-col gap-[10px] 2xl:gap-[20px] p-[20px] rounded-[20px] bg-[#E8DED5]">
            <p className="m-0 absolute top-[20px] right-[20px] px-[8px] py-[2px] rounded-[3px] leading-tight text-[16px] font-normal font-roboto text-[#E8DED5] bg-[#462D16]">{item.offerData.percentage}%</p>
            <Link to={`/product/detail/${item.offerData.product_slug}`} className="flex flex-col gap-[15px]">
                <div className="h-[200px] 2xl:h-[300px] rounded-[10px] overflow-hidden">
                    <img src={item.offerData.product_image} alt="" className="w-full h-full object-cover" />
                </div>
                <h4 className="m-0 text-[18px] 2xl:text-[20px] font-roboto font-semibold text-[#1C1209]">{item.offerData.title}</h4>
            </Link>
            <div className="flex justify-between items-center">
                <div className="flex flex-col 2xl:gap-[5px]">
                    <h6 className="m-0 text-[14px] font-roboto font-normal line-through text-[#1C1209]">{formattedAmount(item.offerData.actual_amount)}</h6>
                    <h4 className="m-0 text-[18px] 2xl:text-[20px] font-roboto font-normal text-[#CC7874]">{formattedAmount(item.offerData.sale_amount)}</h4>
                </div>
                <button className="flex gap-[5px] px-[20px] py-[7px] rounded-full m-0 text-[16px] font-roboto font-normal transition duration-300 text-[#E8DED5] bg-[#4E342E] hover:bg-[#1C1209]">Add To Cart</button>
            </div>
        </div>
    )
}

export default OfferCard