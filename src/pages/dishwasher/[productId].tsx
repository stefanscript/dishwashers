import React from "react";
import PageTitle from "../../components/PageTitle";

export interface DishwasherDetails {
    title: string;
}

interface Props {
    details: DishwasherDetails;
}

const DishwasherDetailsPage: React.FC<Props> = ({ details }) => {
    return <PageTitle text={details.title} />;
};

export default DishwasherDetailsPage;
