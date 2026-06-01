import almondChocolate from "../assets/images/almond-chocolate.jpg"

const topSellingData = [
    {
        id: 1,
        product_image: almondChocolate,
        title: "Hazelnut Praline",
        product_slug: "hazelnut-praline",
        description: "A smooth blend of Hazelnut and Chocolate",
        amount: "500",
    },
    {
        id: 2,
        product_image: almondChocolate,
        title: "Hazelnut Praline",  
        product_slug: "hazelnut-praline",
        description: "A smooth blend of Hazelnut and Chocolate",
        amount: "500",
    },
    {
        id: 3,
        product_image: almondChocolate,
        title: "Hazelnut Praline",
        product_slug: "hazelnut-praline",
        description: "A smooth blend of Hazelnut and Chocolate",
        amount: "500",
    },
    {
        id: 4,
        product_image: almondChocolate,
        title: "Hazelnut Praline",
        product_slug: "hazelnut-praline",
        description: "A smooth blend of Hazelnut and Chocolate",
        amount: "500",
    },
    {
        id: 5,
        product_image: almondChocolate,
        title: "Hazelnut Praline",
        product_slug: "hazelnut-praline",
        description: "A smooth blend of Hazelnut and Chocolate",
        amount: "500",
    },
    {
        id: 6,
        product_image: almondChocolate,
        title: "Hazelnut Praline",
        product_slug: "hazelnut-praline",
        description: "A smooth blend of Hazelnut and Chocolate",
        amount: "500",
    },
];

export const getTopSellingProducts = async () => {
    return topSellingData;
};