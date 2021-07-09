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
  return (
    <div className="Display">
      <h1>{props.display}</h1>
      <h6 id="miniDisp">{props.miniDisp}</h6>
    </div>
  )
}

export default Display
