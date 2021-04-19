import React from "react";
import DishwasherListItem from "../DishwasherListItem";
import styles from "./dishwashers.module.css";

export interface Dishwasher {
    productId: string;
    price: { now: string };
    title: string;
    image: string;
}

interface Props {
    dishwashers: Dishwasher[];
}

const DishwashersList: React.FC<Props> = ({ dishwashers }) => {
    if (dishwashers.length === 0) return <p>No dishwashers available</p>;

    return (
        <div className={styles.list}>
            {dishwashers.map((dishwasher) => (
                <DishwasherListItem key={dishwasher.productId} dishwasher={dishwasher} />
            ))}
        </div>
    );
};

export default DishwashersList;
