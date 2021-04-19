import React from "react";
import DishwashersList from "../components/DishwasherList";
import { Product } from "../../intefaces/Product";
import { Dishwasher } from "../components/DishwasherList/DishwashersList";

interface Props {
    products?: Product[];
}

const IndexPage: React.FC<Props> = ({ products = [] }) => {
    const first20Dishwashers: Dishwasher[] = convertProductsToDishwashers(products).slice(0, 20);

    return (
        <>
            <DishwashersList dishwashers={first20Dishwashers} />
        </>
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

export default IndexPage;
