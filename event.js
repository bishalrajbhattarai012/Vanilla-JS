const grandParent = document.querySelector("#grandparent")
const parent = document.querySelector("#parent")
const child = document.querySelector("#child")

grandParent.addEventListener("click",()=>{
    console.log("grandParent Clicked");
})

parent.addEventListener("click",()=>{
    console.log("Parent Clicked");
})

child.addEventListener("click",()=>{
    console.log("Child Clicked");
})