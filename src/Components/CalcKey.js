import React from 'react'

function CalcKey(props) {
  return (
    <button onClick={(e)=>props.getKey(e.target.value, "calc")} className="CalcKey" value="=">
      =
    </button>
  )
}

export default CalcKey
