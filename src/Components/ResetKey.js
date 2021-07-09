import React from 'react'

function ResetKey(props) {
  return (
    <button onClick={(e)=>props.getKey(e.target.value, "reset")} className="ResetKey" value="ac">
      AC
    </button>
  )
}

export default ResetKey
