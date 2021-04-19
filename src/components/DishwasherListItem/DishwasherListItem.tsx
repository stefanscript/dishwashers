import React from "react";
import { Dishwasher } from "../DishwasherList/DishwashersList";

interface Props {
    dishwasher: Dishwasher;
}

const DishwasherListItem: React.FC<Props> = ({ dishwasher }) => {
    return (
        <article key={dishwasher.productId}>
            <img src={dishwasher.image} alt={dishwasher.title} />
            <div>{dishwasher.title}</div>
            <div>£{dishwasher.price.now}</div>
        </article>
    );
};

export default DishwasherListItem;
