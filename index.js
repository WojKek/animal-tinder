import dogs from "./data.js"
import Dog from "./Dog.js"

let isWaiting = false
let dogIndex = 0
let dog = new Dog(dogs[dogIndex])

function render() {
    document.getElementById("profile").innerHTML = dog.getDogHtml()
}

function getNewDog() {
    const nextDogData = dogs[dogIndex]
    return nextDogData ? new Dog(nextDogData) : {}
}

function setCurrentDog() {
    if(!isWaiting) {
        isWaiting = true
        dogIndex++
        if(dogIndex < dogs.length){
            setTimeout(()=>{
                dog = getNewDog()
                render()
                isWaiting = false
            },1500)
        }
        else{
            setTimeout(()=>{
                console.log("No more dogs")
            },1500)
        }
    }
}

function handleNahBtn() {
    if(!dog.hasBeenSwiped){
        document.getElementById("profile").innerHTML += `
        <img class="badge" id="badge-nope" src="images/badge-nope.png">`
    }
    
    dog.hasBeenSwiped = true
    
    setCurrentDog()
}

function handleYepBtn() {
    if(!dog.hasBeenSwiped){
        document.getElementById("profile").innerHTML += `
        <img class="badge" id="badge-like" src="images/badge-like.png">`
    }
    dog.hasBeenSwiped = true
    dog.hasBeenLiked = true
    setCurrentDog()
}

document.addEventListener('click', e => {
    if(e.target.id === "nah" || e.target.parentElement.id === "nah") {
        handleNahBtn()
    }
    if(e.target.id === "yep" || e.target.parentElement.id === "yep") {
        handleYepBtn()
    }
})

render()


