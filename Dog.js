import dogs from "./data.js"

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHtml() {
    const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
    return `
        <img id="profile-picture" src=${avatar}>
        <div class="absolute">
            <p id="name">${name}, ${age}</p>
            <p id="description">${bio}</p>
        </div>`
    }
}


export default Dog