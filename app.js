const heart = document.getElementsByClassName('card')
container = document.getElementById('container')
console.log(heart,container)

container.addEventListener("click",(e)=>{
    let clickedElement = e.target
    let countElement = clickedElement.parentElement.parentElement.querySelector('.like-count')
    console.log(countElement)
    console.log(clickedElement.className)
    

    if(clickedElement.className == 'fa-solid fa-heart'){
        clickedElement.style.color = 'red'
        let count = +countElement.childElement.textContent + 1 || 0;
        countElement.innerText =`${count} likes` ;
        console.log(count)
    }


})

let  likesObj = {
    likes:0
}
likesObjSerialized = JSON.stringify(likesObj)
localStorage.setItem("likesObj",likesObjSerialized)
console.log(likesObjSerialized)
let likesObjDerialized = JSON.parse(localStorage.getItem('likesObj'))
console.log(likesObjDerialized)