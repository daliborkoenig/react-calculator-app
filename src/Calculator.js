import React, {useState, useEffect} from 'react'
import './Calculator.css'
import Display from './Components/Display'
import Keypad from './Components/Keypad'


function Calculator() {
  const [display, setDisplay] = useState([0])
  const [miniDisp, setMiniDisp] = useState(0)
  const [done, setDone] = useState(false)
  const [key, setKey] = useState(null)
  const [temp, setTemp] = useState([])
  const [first, setFirst] = useState(null)
  const [operator, setOperator] = useState(null)
  const [calc, setCalc] = useState(null)
  const [clear, setClear] = useState(false)
  console.log(temp, first, operator, calc);
  // console.log(display);

  useEffect(() => {
    let res
    if(operator === "%"){
      console.log(first, temp.join(""));
      res = first*Number(temp.join(""))/100
      setMiniDisp(res)
    }
    if(operator === "="){
      if(!calc){
        setOperator("")
        return
      }
      else{
        setDisplay([calc])
        setDone(!done)
        res = calc
      }
    }
    setCalc(res)
  }, [operator])
  useEffect(() => {
    let res
    if(!operator){
      if(!temp[0]){
        setMiniDisp(0)
      }
      else{
        setMiniDisp(temp)
        setDisplay([...temp])
      }
    }
    else if(operator){
      if(temp.length > 0){
        if(clear){
          if(done){
            return
          }
          else{
            res = parseFloat(eval(first+operator+Number(temp.join(""))))
            setMiniDisp(res)
            let d = [...display]
            d.pop()
            setDisplay([...d])
            setClear(false)
          }

        }
        else{
          res = parseFloat(eval(first+operator+Number(temp.join(""))))
          setMiniDisp(res)
          setDisplay([...display, temp[temp.length-1]])
        }

      }
      setCalc(res)
    }
  }, [temp])

  const getKey = async (key, type) => {
    setKey({key: key, type: type})
    calculator(key, type)
  }

  const calculator = (key, type) => {
    if(type === "digi"){
       setTemp([...temp, Number(key)])
    }
    else if(type === "oper"){
      if(!temp[0]){
        if(operator){
          setOperator(key)
          const arr = [...display]
          arr.pop()
          arr.push(key)
          setDisplay(arr)
        }
        else{
          return
        }
        
      }
      else if(!operator){
        let fir = Number(temp.join(""))
        setFirst(fir)
        setOperator(key)
        setCalc(fir)
        setTemp([])
        setDisplay([...display, key])
      }
      else if(operator[0] && first !== 0){
        setOperator(key)
        setFirst(calc)
        setTemp([])
        setDisplay([...display, key])
        setDone(!done)
        console.log("this");
      }
    }
    else if(type === "deci"){
      if(!temp[0]){
        setTemp([...temp, "0"])
        setTemp([...temp, key])
      }
      else{
        setTemp([...temp, key])
      }
    }
    else if(type === "perc"){
      if(operator === "*" && temp[0]){
        setOperator(key)
        setDisplay([...display, key])
      }
    }
    else if(type === "calc"){
      setOperator(key)
    }    
    else if(type === "clear"){
      if(!temp[0]){
        return
      }
      else{
        if(clear){
          setClear(!clear)
        }
        else{
          console.log("clear")
          setClear(true)
          let t = [...temp]
          t.pop()
          setTemp([...t])
        }
      }
    }
    else if(type === "reset"){
      window.location.reload();
    }
  }

  return (
    <div className="Calculator" id="Calculator">
      <Display display={display} miniDisp={miniDisp} done={done}/>
      <Keypad getKey={getKey}/>
    </div>
  )
}

export default Calculator
