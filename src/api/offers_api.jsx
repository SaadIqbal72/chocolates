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

export const getArticles = async () => {
    const { data, error } = await supabase
        .from("posts")
        .select("*");
    if (error) {
        return [];
    }
    return data
}