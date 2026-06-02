import almondChocolate from "../assets/images/almond-chocolate.jpg"
import { supabase } from "../config/supabaseClient";


export const getCategories = async () => {
    const { data, error } = await supabase
        .from("categories")
        .select("*");
    if (error) {
        console.error(error);
        return [];
    }
    return data;
};

export const getProducts = async () => {
    const { data, error } = await supabase
        .from("products").
        select("*")
    if (error) {
        console.error(error);
        return [];
    }
    return data;
}

const offerList = [
    {
        id: 1,
        product_image: almondChocolate,
        title: "Almond Crunch - Milk Chocolate",
        product_slug: "almond-crunch-milk-chocolate",
        actual_amount: "700",
        sale_amount: "500",
        percentage: "9"
    },
    {
        id: 2,
        product_image: almondChocolate,
        title: "Almond Crunch - Milk Chocolate",
        product_slug: "almond-crunch-milk-chocolate",
        actual_amount: "700",
        sale_amount: "500",
        percentage: "9"
    },
    {
        id: 3,
        product_image: almondChocolate,
        title: "Almond Crunch - Milk Chocolate",
        product_slug: "almond-crunch-milk-chocolate",
        actual_amount: "700",
        sale_amount: "500",
        percentage: "9"
    },
    {
        id: 4,
        product_image: almondChocolate,
        title: "Almond Crunch - Milk Chocolate",
        product_slug: "almond-crunch-milk-chocolate",
        actual_amount: "700",
        sale_amount: "500",
        percentage: "9"
    },
];

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

export const getOffers = async () => {
    return offerList;
};

export const getTopSellingProducts = async () => {
    return topSellingData;
};