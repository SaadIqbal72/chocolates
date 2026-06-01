import { Link } from "react-router-dom";
import { formattedamount } from "../../utils/HelperFunction";

const ChocolateCard = (item) => {
    return (
        <div className="relative rounded-[20px] overflow-hidden bg-[#E8DED5]">
            <div className="h-[250px]">
                <img src={item.sellingData.product_image} alt="" className="w-full h-full object-cover" />
            </div>
            <Link to={`/product/detail/${item.sellingData.product_slug}`}>
                <div className="relative bottom-[20px] flex flex-col gap-[20px] px-[20px] py-[30px] rounded-[20px] bg-[#D8C8B8]">
                    <div className="flex items-center justify-between">
                        <h4 className="m-0 text-[20px] font-roboto font-semibold text-[#1C1209]">{item.sellingData.title}</h4>
                        <p>Heart Icon</p>
                    </div>
                    <p>{item.sellingData.description}</p>
                    <div className="flex items-center justify-between">
                        <h4 className="m-0 text-[20px] font-roboto font-normal text-[#CC7874]">{formattedamount(item.sellingData.amount)}</h4>
                        <button className="flex gap-[5px] px-[20px] py-[7px] rounded-full m-0 text-[16px] font-roboto font-normal transition duration-300 text-[#E8DED5] bg-[#4E342E] hover:bg-[#1C1209]">Add To Cart</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ChocolateCard