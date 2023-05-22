/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Cards from './Cards'

const Feed = (props) => {
    return (
        <div className=" flex flex-wrap p-2 justify-around feed max-sm:flex-col max-sm:left-0 max-sm:w-screen max-sm:ml-0">
            {props.posts.map((item, index) => (
                <Cards item={item} index={index} key={item.postId} />
            ))}
        </div>
    )
}

export default Feed