import React from 'react'

function DecimalKey(props) {
  return (
    <button onClick={(e)=>props.getKey(e.target.value, "deci")} className="DecimalKey" value=".">
      ,
    </button>
  )
}

export default DecimalKey
