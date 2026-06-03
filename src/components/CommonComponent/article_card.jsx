import { Link } from "react-router-dom"
import { formattedDate, truncateText } from "../../utils/HelperFunction"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const ArticleCard = (data) => {
    return (
        <div>
            <div className="relative flex flex-col gap-[20px] rounded-[20px] p-[20px] overflow-hidden border border-[#C5AC95] bg-[#E8DED5]">
                <div className="!h-[200px] rounded-[20px] overflow-hidden">
                    <img src={data.articleData.article_image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative flex flex-col gap-[10px]">
                    <h4 className="m-0 text-[20px] font-roboto font-semibold leading-tight text-[#1C1209]">{data.articleData.title}</h4>
                    <p className="m-0 text-[16px] font-roboto font-normal text-[#1C1209]">{truncateText(data.articleData.content)}</p>
                    <div className="flex items-center justify-between">
                        <h4 className="m-0 flex items-center gap-[5px] px-[10px] py-[5px] rounded-full text-[14px] font-roboto font-normal text-[#4E342E] bg-[#DCD6D5]">{formattedDate(data.articleData.created_at)}</h4>
                        <Link to={`/article/detail/${data.articleData.slug}`}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard