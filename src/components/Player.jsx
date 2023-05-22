/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "./Header";
import { FcComments, FcLike } from 'react-icons/fc'

const Player = () => {
    const location = useLocation();
    console.log(location.state); // Log location.state to check its structure and content
    const details = location.state && location.state.details;

    if (!details) {
        return <div className="mt-14">No URL found{location.state}</div>;
    }
    return (
        <div>
            <Header />
            <ReactPlayer
                className="mt-14"
                controls={true}
                url={details.submission.mediaUrl}
                width={screen}
                height={500}
                light={false}
            />
            <div >
                <div className="flex flex-row justify-between p-2">
                    <h1 className="text-3xl font-semibold font-sans" >{details.submission.title}</h1>
                    <div className="flex flex-row  items-center text-2xl font-semibold font-sans">
                        <FcLike className="mr-1" /><span className="mr-4">{details.reaction.count}</span>
                        <FcComments className="mr-1" /><span>{details.comment.count}</span>
                    </div>
                </div>
                <div className="flex flex-row justify-items-start mt-2 items-center p-2">
                    <img
                        className="rounded-full w-10 h-10 max-sm:m-0"
                        src={details.creator.pic}
                        alt={details.creator.handle}
                    ></img>
                    <p className="ml-2 text-2xl font-semibold font-mono">{`${!details.creator.name ? details.creator.handle : details.creator.name}`} </p>
                </div>
                <div className="p-2">
                    <p className="text-gray-400">Video Description</p>
                    <p className="text-gray-800">{details.submission.description}</p>
                </div>

            </div>
        </div>
    );
};

export default Player;
