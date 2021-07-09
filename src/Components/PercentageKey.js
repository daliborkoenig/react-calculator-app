import React from 'react'

function PercentageKey(props) {
  return (
    <button onClick={(e)=>props.getKey(e.target.value, "perc")} className="PercentageKey" value="%">
      %
    </button>
  )
}

export default PercentageKey
