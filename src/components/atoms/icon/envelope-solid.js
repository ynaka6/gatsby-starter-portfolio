import PropTypes from "prop-types"
import React from "react"

const EnvelopeSolidIcon = ({ className }) => {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1" 
        viewBox="0 0 36 36"
        preserveAspectRatio="xMidYMid meet"
        className={className}
    >
        <title>envelope-solid</title>
        <path className="clr-i-solid clr-i-solid-path-1" d="M32.33,6a2,2,0,0,0-.41,0h-28a2,2,0,0,0-.53.08L17.84,20.47Z"/>
        <path className="clr-i-solid clr-i-solid-path-2" d="M33.81,7.39,19.25,21.89a2,2,0,0,1-2.82,0L2,7.5a2,2,0,0,0-.07.5V28a2,2,0,0,0,2,2h28a2,2,0,0,0,2-2V8A2,2,0,0,0,33.81,7.39ZM5.3,28H3.91V26.57l7.27-7.21,1.41,1.41Zm26.61,0H30.51l-7.29-7.23,1.41-1.41,7.27,7.21Z"/>
        <rect x="0" y="0" fillOpacity="0" />
    </svg>
  )
}

EnvelopeSolidIcon.propTypes = {
  className: PropTypes.string
}

EnvelopeSolidIcon.defaultProps = {
  className: ``
}

export default EnvelopeSolidIcon
