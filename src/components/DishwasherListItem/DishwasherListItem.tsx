import React from "react";
import { Dishwasher } from "../DishwasherList/DishwashersList";
import styles from "./dishwasher.module.css";
import Link from "next/link";

interface Props {
    dishwasher: Dishwasher;
}

const DishwasherListItem: React.FC<Props> = ({ dishwasher }) => {
    return (
        <article key={dishwasher.productId} className={styles.item}>
            <Link href={`/dishwasher/${dishwasher.productId}`}>
                <a>
                    <img src={dishwasher.image} alt={dishwasher.title} />
                </a>
            </Link>
            <div>{dishwasher.title}</div>
            <strong>&pound;{dishwasher.price.now}</strong>
        </article>
    );
};

export default DishwasherListItem;
