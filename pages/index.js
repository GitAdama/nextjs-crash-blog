import Head from "next/head";
import { Fragment } from "react";
import BlogItem from "../components/blogItem/BlogItem";

const BLOG_POSTS = [
    {
        id: 1,
        title: "First Blog",
        image: "https://images.unsplash.com/photo-1655833772095-13374a9c9bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        description: "This is my first blog, really excited",
        details: "How it all began..."
    },
    {
        id: 2,
        title: "Second Blog",
        image: "https://images.unsplash.com/photo-1586919715453-3b9378bda31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description: "This is my second blog, a bit excited",
        details: "I learn a bit from the first..."
    },
    {
        id: 3,
        title: "Third Blog",
        image: "https://images.unsplash.com/photo-1655833018337-08bd2c4cc17b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description: "This is my third blog, the THIRDDDD",
        details: "I am getting involved..."
    }

]
function HomePage(props) {

    return (
        <Fragment>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <h1>Blog Page</h1>
            {
                props.blogPosts.map((blog) => (

            <div key={blog.id} className="flex flex-col">
                <BlogItem
                    {...blog}
                />
            </div>
            ))
            }
        </Fragment>
    )
}

export async function getStaticProps() {
    //Sends request to a backend api
    //read the fs...
    //securely connect to a DB

    return {
        props: {
            blogPosts: BLOG_POSTS
        },
        revalidate: 3600, // rebuild the component evry hours (3600  ms)
    }
}
export default HomePage;