import { Link } from "react-router-dom"
import CartCard from "../components/CommonComponent/cart_card"

const Cart = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-[30px] px-[10px] lg:px-0 ">
            <div className="text-center flex flex-col gap-[10px]">
                <h2 className="font-roboto font-bold text-[20px]">Shopping Cart</h2>
                <p className="font-roboto font-meduium text-[20px]">You're Rs-750.00 away from <b className="uppercase">Free Shipping</b></p>
            </div>
            <CartCard />
            <div className="flex justify-center">
                <Link to={`/product`} className="flex justify-center gap-[5px] w-max px-[30px] py-[7px] rounded-full m-0 text-[16px] font-roboto font-normal transition duration-300 border border-[#4E342E] text-[#4E342E] hover:text-[#E8DED5] hover:bg-[#1C1209]">Proceed To Checkout</Link>
            </div>
        </div>
    )
}

export default Cart