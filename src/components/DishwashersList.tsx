import React from "react";

export interface Dishwasher {}
interface Props {
    dishwashers: Dishwasher[];
}

const DishwashersList: React.FC<Props> = ({ dishwashers }) => {
    return <p>No dishwashers available</p>;
};

export default DishwashersList;
