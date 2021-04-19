import React from "react";
import { Dishwasher } from "../DishwasherList/DishwashersList";
import styles from "./dishwasher.module.css";

interface Props {
    dishwasher: Dishwasher;
}

const DishwasherListItem: React.FC<Props> = ({ dishwasher }) => {
    return (
        <article key={dishwasher.productId} className={styles.item}>
            <img src={dishwasher.image} alt={dishwasher.title} />
            <div>{dishwasher.title}</div>
            <strong>£{dishwasher.price.now}</strong>
        </article>
    );
};

export default DishwasherListItem;
