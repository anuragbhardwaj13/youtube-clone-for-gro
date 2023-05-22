/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FcComments, FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const Cards = (props) => {
    const details = props.item;
    console.log(details);

    return (
        <div
            key={props.item.postId}
            className="max-h-fit w-2/6 border-2 p-4 border-white  flex flex-col justify-start items-start  hover:shadow-md max-sm:w-full max-sm:h-4/5"
        >
            <Link
                to={{ pathname: `/player/${props.item.postId}` }}
                state={{ details: details }}
                className="w-full"
            >
                <img
                    className="w-full object-fit"
                    src={props.item.submission.thumbnail}
                    alt={props.index}
                />
            </Link>
            <h1 className="text-lg font-semibold">{props.item.submission.title}</h1>
            <div className="flex flex-row justify-items-start mt-2 items-center">
                <img
                    className="rounded-full mr-2 w-6 h-6"
                    src={props.item.creator.pic}
                    alt={props.item.creator.handle}
                ></img>
                <p className="text-md font-mono">{props.item.creator.handle} </p>
            </div>
            <div className="flex flex-row  items-center text-md font-semibold font-sans">
                <FcLike className="mr-1" /><span className="mr-4">{details.reaction.count}</span>
                <FcComments className="mr-1" /><span>{details.comment.count}</span>
            </div>
        </div>
    );
};

export default Cards;
