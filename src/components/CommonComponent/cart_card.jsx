import almondChocolate from "../../assets/images/almond-chocolate.jpg"
import QuantityCounter from "./quantity_counter"

const CartCard = () => {
    return (
        <div>
            <div className="list-inline m-0 flex items-center gap-[30px] p-[7px] rounded-[10px] border border-[#000] bg-[#000] text-[#fff]">
                <p className="m-0 w-[70%] md:w-[60%]">Product</p>
                <p className="m-0 hidden md:block w-[30%] md:w-[20%] text-center">Qunatity</p>
                <p className="m-0 w-[30%] text-right">Total</p>
            </div>
            <div className="p-[10px] flex flex-wrap md:flex-nowrap items-center gap-[15px] md:gap-[30px] border-b border-[#000]">
                <div className="w-[65%] md:w-[60%] flex items-center gap-[10px] md:gap-[20px]">
                    <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-[10px] overflow-hidden">
                        <img src={almondChocolate} alt="Product Image" className="w-full h-full object-cover" />
                    </div>
                    <h6 className="text-[14px] md:text-[20px] font-bold font-roboto leading-tight">Trufle Chocolates</h6>
                </div>
                <div className="w-[70%] md:w-[20%] order-3 md:order-none">
                    <QuantityCounter />
                </div>
                <div className="w-[31%] md:w-[20%] flex items-center justify-end gap-[10px] ">
                    <p>500.00</p>
                    <button className="hidden md:block rounded-full w-[30px] h-[30px] flex items-center justify-center border border-[#000] bg-[#000] md:bg-transparent text-[#fff] md:text-[#000]">d</button>
                </div>
                <div className="md:hidden ml-auto order-last">
                    <button className="rounded-full w-[30px] h-[30px] flex items-center justify-center border border-[#000] bg-[#000] md:bg-transparent text-[#fff] md:text-[#000]">d</button>
                </div>
            </div>
            <div className="md:max-w-[25%] ml-auto p-[10px] flex items-center gap-[30px] border-b border-[#000]">
                <div className="w-[60%] md:w-[70%] font-roboto font-normal text-[14px] md:text-[16px] text-right">SubTotal</div>
                <div className="w-[40%] md:w-[30%] font-roboto font-normal text-[16px] text-right">500.00</div>
            </div>
            <div className="md:max-w-[25%] ml-auto p-[10px] flex items-center gap-[30px] border-b border-[#000]">
                <div className="w-[60%] md:w-[70%] font-roboto font-normal text-[14px] md:text-[16px] text-right">Delivery Charges</div>
                <div className="w-[40%] md:w-[30%] font-roboto font-normal text-[16px] text-right">350.00</div>
            </div>
            <div className="md:max-w-[25%] ml-auto p-[10px] flex items-center gap-[30px]">
                <div className="w-[60%] md:w-[70%] font-roboto font-medium text-[18px] text-right">Total Amount</div>
                <div className="w-[40%] md:w-[30%] font-roboto font-bold text-[20px] md:text-[24px] text-right">850.00</div>
            </div>
        </div>
    )
}

export default CartCard