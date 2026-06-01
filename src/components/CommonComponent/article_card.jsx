import { Link } from "react-router-dom"
import { truncateText } from "../../utils/HelperFunction"

const ArticleCard = (data) => {
    return (
        <div>
            <div className="relative flex flex-col gap-[20px] rounded-[20px] p-[20px] overflow-hidden border border-[#C5AC95] bg-[#E8DED5]">
                <div className="!h-[200px] rounded-[20px] overflow-hidden">
                    <img src={data.articleData.article_image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative flex flex-col gap-[10px]">
                    <h4 className="m-0 text-[20px] font-roboto font-semibold leading-tight text-[#1C1209]">{data.articleData.title}</h4>
                    <p className="m-0 text-[16px] font-roboto font-normal text-[#1C1209]">{truncateText(data.articleData.description)}</p>
                    <div className="flex items-center justify-between">
                        <h4 className="m-0 flex items-center gap-[5px] px-[10px] py-[5px] rounded-full text-[14px] font-roboto font-normal text-[#4E342E] bg-[#DCD6D5]">12 Nov 2024</h4>
                        <Link to={`/article/detail/${data.articleData.article_slug}`}>
                            <p>Arrow Icon</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard