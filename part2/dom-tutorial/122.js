const AllButton= document.querySelectorAll(".my-buttons button");

// firstButton.addEventListener("click",function(){
//     console.log("you clicked me")
// })

// for(let button of AllButton){
//     button.addEventListener("click", function(){
//         console.log(this.textContent)
//     })
// }

// for(let i=0; i<AllButton.length; i++){
//     AllButton[i].addEventListener("click", function(){
//         console.log(this);
//     })
// }

AllButton.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(this);
    })
})