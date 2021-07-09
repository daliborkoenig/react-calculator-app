import React from 'react'
import ResetKey from './ResetKey'
import ClearKey from './ClearKey'
import PercentageKey from './PercentageKey'
import OperatorKeys from './OperatorKeys'
import CalcKey from './CalcKey'
import DecimalKey from './DecimalKey'
import DigitKeys from './DigitKeys'

function Keypad(props) {
  const getKey = (key, type) => {
    props.getKey(key, type)
  }
  return (
    <div className="Keypad">
      <ResetKey getKey = {getKey}/>
      <ClearKey getKey = {getKey}/>
      <PercentageKey getKey = {getKey}/>
      <OperatorKeys getKey = {getKey}/>
      <CalcKey getKey = {getKey}/>
      <DecimalKey getKey = {getKey}/>
      <DigitKeys getKey = {getKey}/>
    </div>
  )
}

export default Keypad
