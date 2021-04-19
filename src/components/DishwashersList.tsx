import React from "react";

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
            {dishwashers.map((dishwasher) => {
                return <article key={dishwasher.productId}/>;
            })}
        </>
    );
};

export default DishwashersList;
