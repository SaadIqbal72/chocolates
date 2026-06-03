import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getArticles, getCategories, getProducts } from "../api/offers_api"
import Loader from "../components/CommonComponent/loader"
import ArticleCard from "../components/CommonComponent/article_card"
import ChocolateCard from "../components/CommonComponent/chocolate_card"
import OfferCard from "../components/CommonComponent/offers_card"
import CommonSlider from "../components/SliderComponent/simple_slider"


const Home = () => {
    const [offers, setOffers] = useState()
    const [topSell, setTopSell] = useState()
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([])
    const [articles, setArticles] = useState([])
    const [review, setReview] = useState([])

    useEffect(() => {
        const fetchArticles = async () => {
            const data = await getArticles();
            console.log("Review:", data);
            setReview(data);
            setLoading(false);
        }
        fetchArticles();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            const data = await getCategories();
            console.log("Received:", data);
            setCategories(data);
            setLoading(false);
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            console.log("Received Products:", data);
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchArticles = async () => {
            const data = await getArticles();
            console.log("Articles:", data);
            setArticles(data);
            setLoading(false);
        }
        fetchArticles();
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(
            (product) => product.category_id === selectedCategory
        )
        : products;

    if (loading) {
        return <><Loader /></>;
    }

    return (
        <div className="flex flex-col gap-[50px] min-h-screen">
            <h1>Home</h1>

            <div className="flex flex-col gap-[30px] p-[30px] mx-[50px]">
                <h2 className="sm:text-[18px] lg:text-[20px] 2xl:text-[30px] text-center font-bold font-roboto text-[#1C1209]">Our Products</h2>
                <div className="flex items-center justify-center gap-[20px]">
                    <button onClick={() => setSelectedCategory(null)}
                        className="font-roboto min-w-[100px] text-[16px] rounded-full px-[20px] py-[7px] transition duration-300 border border-[#000] text-[#000] hover:bg-[#000] hover:text-[#fff]"
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className="font-roboto text-[16px] rounded-full px-[20px] py-[7px] transition duration-300 border border-[#000] text-[#000] hover:bg-[#000] hover:text-[#fff]"
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <CommonSlider
                    data={filteredProducts}
                    slidesPerView={4}
                    renderItem={(data) => (
                        <ChocolateCard sellingData={data} />
                    )}
                />
            </div>

            <div className="grid grid-cols-1 2xl:grid-cols-9 items-center gap-[20px] rounded-[10px] p-[15px] 2xl:p-[30px] mx-[15px] 2xl:mx-[50px] bg-[#1C1209]">
                <div className="col-span-full 2xl:col-span-2 flex flex-col gap-[30px] text-center 2xl:text-left">
                    <h2 className="sm:text-[18px] lg:text-[20px] 2xl:text-[30px] font-bold font-roboto text-[#E8DED5]">Special Offers</h2>
                    <Link to={`/special-offers`} className="text-[14px] font-normal font-roboto text-[#E8DED5]">View All </Link>
                </div>
                <div className="col-span-full 2xl:col-span-7">
                    <CommonSlider data={offers}
                        slidesPerView={3}
                        renderItem={(data) => (
                            <OfferCard offerData={data} />
                        )} />
                </div>
            </div>

            <div className="flex flex-col gap-[30px] p-[30px] mx-[50px]">
                <h2 className="sm:text-[18px] lg:text-[20px] 2xl:text-[30px] text-center font-bold font-roboto text-[#1C1209]">Top Selling Chocolates</h2>
                <CommonSlider
                    data={topSell}
                    slidesPerView={4}
                    renderItem={(data) => (
                        <ChocolateCard sellingData={data} />
                    )}
                />
            </div>

            <div className="flex flex-col gap-[30px] p-[30px] mx-[50px]">
                <h2 className="sm:text-[18px] lg:text-[20px] 2xl:text-[30px] text-center font-bold font-roboto text-[#1C1209]">Try More Taste</h2>
                <CommonSlider
                    data={topSell}
                    slidesPerView={4}
                    renderItem={(data) => (
                        <ChocolateCard sellingData={data} />
                    )}
                />
                <div className="flex justify-center">
                    <Link to={`/product`} className="flex justify-center gap-[5px] w-max px-[30px] py-[7px] rounded-full m-0 text-[16px] font-roboto font-normal transition duration-300 border border-[#4E342E] text-[#4E342E] hover:text-[#E8DED5] hover:bg-[#1C1209]">View All</Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col gap-[30px] p-[30px]">
                <h2 className="sm:text-[18px] lg:text-[20px] 2xl:text-[30px] text-center font-bold font-roboto text-[#1C1209]">Chocolate Delights & Services</h2>
                <p className="text-[16px] text-center font-normal font-roboto text-[#1C1209]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab dolore ipsum facere provident id omnis, quasi dolorem veniam similique nihil illo eligendi, laboriosam nulla, ipsam libero nobis est enim!</p>
                <div className="grid grid-cols-3 gap-[20px]">
                    <div className="rounded-[20px] p-[20px] text-center bg-[#FAF1E5]">
                        <div className="h-[150px]">

                        </div>
                        <h2 className="text-[16px] lg:text-[20px] font-bold font-roboto text-[#1C1209]">Free Delivery over RS-5000</h2>
                    </div>
                    <div className="rounded-[20px] p-[20px] text-center bg-[#FAF1E5]">
                        <div className="h-[150px]">

                        </div>
                        <h2 className="text-[16px] lg:text-[20px] font-bold font-roboto text-[#1C1209]">Money Back Gurantee</h2>
                    </div>
                    <div className="rounded-[20px] p-[20px] text-center bg-[#FAF1E5]">
                        <div className="h-[150px]">

                        </div>
                        <h2 className="text-[16px] lg:text-[20px] font-bold font-roboto text-[#1C1209]">Online Support 24/7</h2>
                    </div>
                </div>
            </div>

            <div className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[80%] before:bg-[#1C1209]">
                <div className="relative flex flex-col gap-[30px] p-[30px] mx-[50px] z-[1]">
                    <h2 className="sm:text-[18px] lg:text-[20px] 2xl:text-[30px] text-center font-bold font-roboto text-[#E8DED5]">Chocolate Articles</h2>
                    <CommonSlider
                        data={articles}
                        slidesPerView={4}
                        renderItem={(data) => (
                            <ArticleCard articleData={data} />
                        )} />
                    <Link to="/article" className="flex justify-center gap-[5px] w-max px-[30px] py-[7px] rounded-full m-0 text-[16px] font-roboto font-normal transition duration-300 border border-[#4E342E] text-[#4E342E] hover:text-[#E8DED5] hover:bg-[#1C1209]">View All</Link>
                </div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col gap-[30px] p-[30px]">
                <div className="relative flex flex-col gap-[30px] p-[30px] mx-[50px] z-[1]">
                    <h2 className="sm:text-[18px] lg:text-[20px] 2xl:text-[30px] text-center font-bold font-roboto text-[#000]">Customer Reviews</h2>
                    <CommonSlider
                        data={review}
                        slidesPerView={1}
                        renderItem={(data) => (
                            <>
                                <h2>{data.title}</h2>
                                <p>{data.content}</p>
                            </>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}


export default Home