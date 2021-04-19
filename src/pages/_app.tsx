import React from "react";
import { AppProps } from "next/app";

import "../styles/normalize.css";
import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;