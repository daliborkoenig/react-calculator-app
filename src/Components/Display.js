import anime from 'animejs/lib/anime.es';
import React, {useEffect} from 'react'

function Display(props) {
  if(props.display.length>1 && props.display[0] === 0 && props.display[1] !== "."){
    props.display.shift()
  }
  useEffect(() => {
    if(props.done){
      console.log("done");
      anime({
        targets: '#miniDisp',
        fontSize: "2em",
        bottom: "46px",
        right: "10px",
        easing: 'easeInOutQuad',
        duration: "250"
      });
    }
    else{
      anime({
        targets: '#miniDisp',
        fontSize: "0.5em",
        bottom: "0px",
        right: "0px",
        easing: 'easeInOutQuad',
        duration: "250"
      });
    }
  }, [props.done])
  const getFontSize = (size) => {
    let length = size
    console.log(length);
    if(checkBetween(0, 10, length)){
      console.log("2em");
      return "2em"
    }
    if(checkBetween(11, 14, length)){
      console.log("1.5em");
      return "1.5em"
    }
    if(checkBetween(15, 44, length)){
      console.log("1em");
      return "1em"
    }
    if(checkBetween(45, 100, length)){
      console.log("1em");
      return "0.8em"
    }
  }
  const checkBetween = (low,high,inp) => {
    if(inp >= low){
      if(inp <= high){
        return true
      }
      else{
        return false
      }
    }
  }

  // console.log(props.display.length)
  return (
    <div className="Display">
      <h1 style={{'fontSize': getFontSize(props.display.length)}}>{props.display}</h1>
      <h1 style={{'fontSize': getFontSize(props.display.length)}}>{props.display}</h1>
      <h6 id="miniDisp">{props.miniDisp}</h6>
      {!props.done ? <h6 id="miniDisp2">{props.miniDisp}</h6> : "" }
    </div>
  )
}

export default Display
