import styles from "../../styles/page.module.css";
import React from "react";

interface Props {
    text: string;
}

const PageTitle:React.FC<Props> = ({text}) => {
    return <h1 className={styles.title}>{text}</h1>
};

export default PageTitle;
