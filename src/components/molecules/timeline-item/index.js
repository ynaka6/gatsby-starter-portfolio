import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import LinkIcon from "@components/atoms/icon/link-line"
import Tags from "@components/molecules/tags";

const TimelineItemStyle = styled.div`
  ${tw`relative border-l-2 leading-normal pt-12 pb-6 pl-8`};
  
	&:after {
		left: -7px;
		content: '';
    ${tw`absolute pin-t mt-4 bg-grey-dark border-l-2 border-grey-dark rounded-full w-3 h-3`};
  }

  & > h3 {
    ${tw`mb-2`};
  }
  
  & > .head {
    ${tw`absolute pin-t pin-x pl-8 flex justify-between`};
    padding-top: 0.85rem;

    & > .date {
      ${tw`font-bold text-grey-darkest`};
    }
  }

  & > .description {
    ${tw`text-grey-darkest mt-2 mb-4`};
  }
`

const TimelineItem = ({ work }) => {
  const status = work.status ? <span className="text-xs border border-red px-2 py-1 rounded bg-red-light text-white">{work.status}</span> : null
  const link = work.link ? <a href={work.link} target="_blank" rel="nofollow noopener noreferrer" className="ml-1"><LinkIcon className="fill-current w-6 h-6" /></a> : null
  return (
    <TimelineItemStyle>
      <div className="head">
        <p className="date">
            <time>{work.started_on}</time> 〜 <time>{work.ended_on}</time>
        </p>
        {status}
      </div>
      <h3>{work.title}{link}</h3>
      <p className="description">{work.description}</p>
      <Tags tags={work.tags} />
    </TimelineItemStyle>
  )
}

TimelineItem.propTypes = {
    work: PropTypes.object
}

TimelineItem.defaultProps = {
    work: null,
}


export default TimelineItem
