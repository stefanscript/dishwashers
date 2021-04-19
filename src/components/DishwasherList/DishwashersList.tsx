import React from "react";
import DishwasherListItem from "../DishwasherListItem";

export interface Dishwasher {
    productId: string;
    prize: { now: string };
    title: string;
    image: string;
}

interface Props {
    dishwashers: Dishwasher[];
}

const DishwashersList: React.FC<Props> = ({ dishwashers }) => {
    if (dishwashers.length === 0) return <p>No dishwashers available</p>;

    return (
        <>
            {dishwashers.map((dishwasher) => (
                <DishwasherListItem key={dishwasher.productId} dishwasher={dishwasher} />
            ))}
        </>
    );
};

export default DishwashersList;
