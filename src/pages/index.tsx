import React from "react";
import DishwashersList from "../components/DishwasherList";
import { Product } from "../../intefaces/Product";

interface Props {
    products?: Product[];
}

const IndexPage: React.FC<Props> = ({ products = [] }) => (
    <>
        <DishwashersList dishwashers={[]} />
    </>
);

export default IndexPage;
