import React, { useEffect } from 'react'
import Calculator from './Calculator'
import './App.css'



export default function App() {

    useEffect(() => {
        let constrain = 20;
        let mouseOverContainer = document.getElementById("App");
        let ex1Layer = document.getElementById("Calculator");

        function transforms(x, y, el) {
            let box = el.getBoundingClientRect();
            let calcX = (-(y - box.y - box.height / 20) / constrain)*0.1;
            let calcY = ((x - box.x - box.width / 20) / constrain)*0.1;
            return (
                "perspective(1000px) " +
                "   rotateX(" +
                calcX +
                "deg) " +
                "   rotateY(" +
                calcY +
                "deg) "
            );
        }

        function transformElement(el, xyEl) {
            el.style.transform = transforms.apply(null, xyEl);
        }

        mouseOverContainer.onmousemove = function (e) {
            let xy = [e.clientX, e.clientY];
            let position = xy.concat([ex1Layer]);

            window.requestAnimationFrame(function () {
                transformElement(ex1Layer, position);
            });
        };

    }, [])

    return (
        <div className="App" id="App">
            <Calculator />
        </div>
    )
}
