/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BsHash } from 'react-icons/bs'


const Sidebar = (props) => {
    return (
        <div className=" bg-white h-screen sidebar max-sm:static max-sm:h-fit max-sm:w-full">
            <h2 className="text-xl font-mono font-bold uppercase text-center">Trending Creators</h2>
            {props.topCreator.map((item, index) => (
                <div key={index} className="flex flex-row justify-start p-2 items-center hover:shadow-md ">
                    <p className="flex flex-row items-center mr-2 font-mono"><BsHash />{index + 1}</p>
                    <img className="rounded-full mr-2 w-8 h-8" src={item.pic} alt={item.handle}></img>
                    <p key={index} className="text-md ">{`${!item.name ? item.handle : item.name}`} </p></div>

            ))}

        </div>
    )
}

export default Sidebar