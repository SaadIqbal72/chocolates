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
        .from("products")
        .select("*")
    if (error) {
        console.error(error);
        return [];
    }
    return data;
}

export const getArticles = async () => {
    const { data, error } = await supabase
        .from("posts")
        .select("*");
    if (error) {
        return [];
    }
    return data
}


export const getReviews = async () => {
    const { data, error } = await supabase
        .from("reviews")
        .select("*");
    if (error) {
        return [];
    }
    return data;

}

export const getProductDetail = async (slug) => {
    const { data, error } = await supabase
        .from("products")
        .select(
            `*,
                chocolatiers(
                    brand_name,slug
                ),
                categories (
                    name,
                    slug
                ),
                product_images (
                    id,
                    image_url,
                    display_order
                ),
                reviews (
                    id,
                    rating,
                    comment,
                    is_verified_purchase,
                    created_at,
                    profiles (
                        full_name,
                        avatar_url
                    )
                )
            `)
        .eq("slug", slug)
        .single();
    if (error) {
        console.error("Error fetching product detail:", error);
        return null;
    }
    return data;
}

export const getReleatedProducts = async (categoryId, currentProductId) => {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category_id", categoryId)
        .neq("id", currentProductId)
        .limit(4);
    if (error) {
        console.error("Error fetching product detail:", error);
        return null;
    }
    return data;
}