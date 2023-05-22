/* eslint-disable-next-line no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Paginator from "./Paginator";
import Header from './Header'

const Home = () => {
    const [topCreator, setTopCreator] = useState([]);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const fetchData = async () => {
        let reqOptions = {
            url: `https://internship-service.onrender.com/videos?page=${page}`,
            method: "GET",
        };

        let response = await axios.request(reqOptions);
        const postsArray = response.data.data.posts.map((item) => item);
        setPosts(postsArray);
        const topCreatorArray = response.data.data.posts.map(
            (item) => item.creator
        );
        setTopCreator(topCreatorArray);
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div>
            <Header />

            <div className="flex flex-col m-0 p-0 overflow-x-hidden mt-14">
                <section className="flex flex-row max-sm:flex-col">
                    <Sidebar topCreator={topCreator} />
                    <Feed posts={posts} />
                </section>
                <div className="flex flex-row justify-center items-center">
                    <Paginator page={page} setPage={setPage} pages={pages} />
                </div>
            </div>
        </div>
    );
};

export default Home;
