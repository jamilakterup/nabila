let int = null;
let s = 0;
let m = 0;
let h = 0;
const secondFild = document.getElementById('second');
const minField = document.getElementById('minute');
const hourField = document.getElementById('hour');


document.getElementById('start-btn').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int)
    }
    int = setInterval(function () {
        s++;
        secondFild.innerText = s;
        if (s === 60) {
            s = 0;
            ++m;
            minField.innerText = m;
            if (m === 60) {
                m = 0;
                h++;
                hourField.innerText = h;
            }
        }
    }, 1000)
});


document.getElementById('stop').addEventListener('click', () => {
    clearInterval(int);
});




{/* <style>
        body {
            width: 750px;
            margin-left: auto;
        }

        span {
            font-size: 38px;
            margin-left: 20px;
            font-weight: 700;
        }
    </style> */}


// <div>
// <span id="hour">0</span>
// <span id="minute">0</span>
// <span id="second">0</span>
// </div>
// <div style="margin-top: 20px;">
// <button id="start-btn">start</button>
// <button id="stop">stop</button>
// <button onClick="window.location.reload()">reset</button>
// </div>

// <script src="index.js"></script>