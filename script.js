const redSwitch = document.getElementById("red")
const greenSwitch = document.getElementById("green")
const grey = "rgb(82, 77, 77)"

const turnYellowOn = function() {
    document.getElementById("middle").style.backgroundColor = "yellow"
}

const turnYellowOff = function() {
    document.getElementById("middle").style.backgroundColor = grey
}

const turnGreenOn = function() {
    document.getElementById("bottom").style.backgroundColor = "green"
}

const turnRedOn = function() {
    document.getElementById("top").style.backgroundColor = "darkred"
}

const turnRedOff = function() {
    document.getElementById("top").style.backgroundColor = grey
}

const turnGreenOff = function() {
    document.getElementById("bottom").style.backgroundColor = grey
}

redSwitch.addEventListener("click", function () {
    if (document.getElementById("bottom").style.backgroundColor == "green") {
        setTimeout(turnYellowOn, 50)
        setTimeout(turnYellowOff, 1000)
        }
    document.getElementById("title").innerHTML = "STOP!"
    document.getElementById("green").style.backgroundColor = "rgb(66, 66, 66)"
    document.getElementById("red").style.backgroundColor = "rgb(224, 224, 193)"
    setTimeout(turnGreenOff, 50)
    setTimeout(turnRedOn, 1000)
    setTimeout(turnGreenOff, 1000) //in case the buttons get spammed

    
})

greenSwitch.addEventListener("click", function() {
    document.getElementById("title").innerHTML = "GO!"
    document.getElementById("red").style.backgroundColor = "rgb(66, 66, 66)"
    document.getElementById("green").style.backgroundColor = "rgb(224, 224, 193)"
    setTimeout(turnRedOff, 200)
    setTimeout(turnRedOff, 1000) //in case the buttons get spammed
    setTimeout(turnGreenOn, 300)
})