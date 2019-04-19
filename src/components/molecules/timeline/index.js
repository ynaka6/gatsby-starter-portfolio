import PropTypes from "prop-types"
import React from "react"
import TimelikeItem from "@components/molecules/timeline-item";


const Timeline = ({ works }) => (
    <div className="flex flex-col w-full px-4 py-10">
        {works.map((value, index) => {
            return <TimelikeItem key={index} work={value} />
        })}
    </div>
)
 

Timeline.propTypes = {
    works: PropTypes.array
}

Timeline.defaultProps = {
    works: [],
}


export default Timeline
