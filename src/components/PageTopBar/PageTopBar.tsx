import styles from "../../styles/page.module.css";
import React from "react";


const PageTopBar: React.FC = ({ children }) => {
    return <div className={styles.topBar}>{children}</div>;
};

export default PageTopBar;
