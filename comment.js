const inputGroup = document.querySelector(".input-group")
const ulCommentList = document.querySelector("#commentList")
const buttonPostComment = document.querySelector("#postCommentBtn")


buttonPostComment.addEventListener("click",(event)=>{
let commentInput = document.querySelector("#commentInput")

    const li = document.createElement("li");
    const span = document.createElement("span")
    span.textContent=commentInput.value
    const img= document.createElement("img")
    img.src= "./avatar.jpg"
    img.setAttribute("height","25px")
    img.setAttribute("width","25px")
    img.style.borderRadius="10px"
    const div1 = document.createElement("div")
    div1.append(img,span)

    div1.style.display="flex"
    div1.style.alignItems="center"
    div1.style.gap = "10px"

    li.style.display="flex"
    li.style.alignItems="center"
    li.style.gap = "10px"
    li.style.justifyContent="space-between"


    const div2 = document.createElement("div")
    const button = document.createElement("button")
    button.textContent="Reply"
    button.style.backgroundColor="green"
    div2.append(button)
    
        const mainDiv = document.createElement("div")
        mainDiv.classList.add("mainDiv")
        mainDev.append(div1,div2)
        li.append(mainDev)


    li.classList.add("comment")
    ulCommentList.append(li)
})