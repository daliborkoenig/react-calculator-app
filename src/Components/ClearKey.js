import React from 'react'

function ClearKey(props) {
  return (
    <button onClick={(e)=>props.getKey(e.target.value, "clear")} className="ClearKey" value="c">
      C
    </button>
  )
}

export default ClearKey
