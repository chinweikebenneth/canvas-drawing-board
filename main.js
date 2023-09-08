const drawBtn = document.querySelector("#draw")
const eraseBtn = document.querySelector("#erase")
const rangeInput = document.querySelector("input")
const screen = document.querySelector("#screen")

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight  

// STATES
let isActive = false
let isDrawing = false
let isErasing = false
let size = +rangeInput.value


// FUNCTIONS
const updateDrawing = (state = true) => {
    if(state) {
        isDrawing = true
        isErasing = false
        return
    }

    isDrawing = false
    isErasing = true
}


// EVENTS
drawBtn.addEventListener("click", () => {
    drawBtn.classList.toggle("active")
    eraseBtn.className = ""
    updateDrawing()
})

eraseBtn.addEventListener("click", () => {
    eraseBtn.classList.toggle("active")
    drawBtn.className = ""
    updateDrawing(false)
})

rangeInput.addEventListener("input", () => {
    // console.log(rangeInput.value)
   
    ze = rangeInput.value
    screen.innerHTML = `${size}%`
})

canvas.addEventListener("mousedown", () => {
    isActive = true
    console.log(isActive)
})

canvas.addEventListener("mouseup", () => {
    isActive = false
    console.log(isActive)
})

canvas.addEventListener("mousemove", (e) => {
    const {x, y} = e
    if(!isActive) return
    
    if(isDrawing) {
        ctx.beginPath()
        ctx.fillStyle = "#fff" 
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
    }
    
    if(isErasing) {
        ctx.clearRect(x, y, size, size)
    }
})


window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight  
})