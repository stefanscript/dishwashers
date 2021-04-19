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
    return (
        <>
            <p>No dishwashers available</p>
            {dishwashers.map((dishwasher) => {
                return (
                    <article key={dishwasher.productId}>
                        <img src={dishwasher.image} alt={dishwasher.title} />
                        <div>{dishwasher.title}</div>
                        <div>£{dishwasher.prize.now}</div>
                    </article>
                );
            })}
        </>
    );
};

export default DishwashersList;
