import React from "react";
import DishwashersList from "../components/DishwasherList";
import { Product } from "../../intefaces/Product";
import { Dishwasher } from "../components/DishwasherList/DishwashersList";

export const PRODUCT_SEARCH_API =
    "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI";

interface Props {
    products?: Product[];
}

const IndexPage: React.FC<Props> = ({ products = [] }) => {
    const dishwashers: Dishwasher[] = convertProductsToDishwashers(products);
    const first20Dishwashers: Dishwasher[] = dishwashers.slice(0, 20);

    return (
        <main>
            <h1>Dishwashers({dishwashers.length})</h1>
            <DishwashersList dishwashers={first20Dishwashers} />
        </main>
    );
};

function convertProductsToDishwashers(products: Product[]): Dishwasher[] {
    return products.map((product: Product) => ({
        productId: product.productId,
        price: { now: product.price.now },
        title: product.title,
        image: product.image,
    }));
}

export async function getStaticProps() {
    const response = await fetch(PRODUCT_SEARCH_API);
    const data = await response.json();

    return {
        props: {
            products: data.products,
        },
    };
}

export default IndexPage;
