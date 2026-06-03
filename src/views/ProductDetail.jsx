import { Link, useParams } from "react-router-dom"
import QuantityCounter from "../components/CommonComponent/quantity_counter";
import { useEffect, useState } from "react";
import { getProductDetail, getReleatedProducts } from "../api/offers_api";
import Loader from "../components/CommonComponent/loader";

const ProductDetail = () => {
    const { id: slug } = useParams();
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null);
    const [relatedProduct, setRelatedProduct] = useState([]);

    useEffect(() => {
        const fetchProductDetail = async () => {
            setLoading(false);
            const data = await getProductDetail(slug)
            console.log("Product Detail:", data);
            if (data) {
                setProduct(data);
                if (data.category_id) {
                    const relatedProductData = await getReleatedProducts(data.category_id, data.id)
                    setRelatedProduct(relatedProductData);
                }
                setLoading(false);
            }
        };
        fetchProductDetail();
    }, [slug])

    if (loading) {
        return <Loader />;
    }

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold text-red-600">Product not found.</h2>
            </div>
        );
    }
    
    return (
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col gap-[50px]">
            <div className="grid grid-cols-2 gap-[12px]">
                <div className="">
                    {/* <h1>{id}</h1> */}
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[16px] lg:text-[30px] font-bold font-roboto text-[#4E342E]">Truffles Crucnch</h2>
                        <div className="flex items-center gap-[10px]">
                            <p>4.5 Rating start</p>
                            <p>188 Reviews</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <h2 className="text-[16px] lg:text-[30px] font-bold font-roboto text-[#4E342E]">RS - 500.00</h2>
                        <h4 className="m-0 text-[20px] font-roboto font-normal line-through text-[#CC7874]">700.00</h4>
                        <p className="m-0 px-[8px] py-[2px] rounded-[3px] leading-tight text-[16px] font-normal font-roboto text-[#E8DED5] bg-[#462D16]">Save 9%</p>
                    </div>
                    <p className="m-0 text-[16px] font-roboto font-normal text-[#4E342E]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem mollitia maiores, earum iste assumenda omnis, voluptas ipsa nulla odio esse doloremque vitae eligendi ratione perferendis excepturi? Et, asperiores dolorem? Debitis.</p>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-[10px]">
                            <QuantityCounter />
                            <Link to="" className="flex justify-center gap-[5px] w-max px-[30px] py-[7px] rounded-full m-0 text-[16px] font-roboto font-normal transition duration-300 border border-[#4E342E] text-[#4E342E] hover:text-[#E8DED5] hover:bg-[#1C1209]">Add To Cart</Link>
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
                                <div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center peer-checked:bg-[#4E342E] peer-checked:border-[#4E342E]">
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
                                <div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center peer-checked:bg-[#4E342E] peer-checked:border-[#4E342E]">
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
                        <textarea rows={5} className="p-[7px] outline-none rounded-[10px] w-full resize-none border border-[#D8C8B8] bg-transparent" ></textarea>
                    </div>
                </div>
            </div>
            <div className="border-y border-[#ccc]">
                <h2 className="font-bold text-[40px]">Customer Reviews</h2>
            </div>
            <div>
                <h2 className="font-bold text-[40px]">Related Products</h2>
            </div>
        </div>
    )
}

export default ProductDetail