import Head from "next/head";
import { Fragment } from "react";

function HomePage() {
    return (<Fragment>
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                rel="stylesheet"
            />
        </Head>
        <h1>Home Page</h1>
    </Fragment>)
}
export default HomePage;