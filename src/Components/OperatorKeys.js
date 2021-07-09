import React from 'react'

function OperatorKeys(props) {
  return (
    <div className="OperatorKeys">
      <button onClick={(e)=>props.getKey(e.target.value, "oper")} value="/">/</button>
      <button onClick={(e)=>props.getKey(e.target.value, "oper")} value="*">x</button>
      <button onClick={(e)=>props.getKey(e.target.value, "oper")} value="-">-</button>
      <button onClick={(e)=>props.getKey(e.target.value, "oper")} value="+">+</button>
    </div>
  )
}

export default OperatorKeys
