/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Paginator = (props) => {
    return (
        <div className="flex justify-center max-sm:overflow-x-scroll">
            {props.pages.map((item, index) => (
                <button
                    className={`w-10 h-10 ml-4 mr-4 mb-6 ${index === props.page ? "bg-slate-700 text-white" : ""
                        } max-sm:w-20 max-sm:m-1`}
                    key={index}
                    onClick={() => props.setPage(index)}
                >
                    {item + 1}
                </button>
            ))}
        </div>
    )
}

export default Paginator
