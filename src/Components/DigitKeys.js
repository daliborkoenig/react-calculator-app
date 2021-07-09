import React from 'react'

function DigitKeys(props) {
  
  return (
    <div className="DigitKeys">
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="7">7</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="8">8</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="9">9</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="4">4</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="5">5</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="6">6</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="1">1</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="2">2</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="3">3</button>
      <button onClick={(e)=>props.getKey(e.target.value, "digi")} value="0">0</button>
    </div>
  )
}

export default DigitKeys
