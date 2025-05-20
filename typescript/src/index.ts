const searchInput = document.querySelector("#searchInput") as HTMLInputElement;
const addInput = document.querySelector("#addInput") as HTMLInputElement;
const usersList = document.getElementById("resultsList") as HTMLUListElement;
const addButton = document.querySelector("#addBtn") as HTMLButtonElement;
let editingItem: HTMLLIElement | null;


  searchInput.addEventListener("input",(e:Event)=>{
    const target = e.target as HTMLInputElement;
  
    console.log("Target");
    console.log(target);
    const searchValue = target.value;
    console.log(searchValue);
    const lis =  usersList.querySelectorAll("li")

    lis.forEach((li:HTMLLIElement)=>{
      console.log("li elements");
      console.log(li.firstElementChild);
        if(li.firstElementChild!.textContent?.includes(searchValue)){
          li.style.display="flex"
        }
        else{
          li.style.display="none"
        }
    })


  })


usersList.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("individual-list")) {
    const li = target as HTMLLIElement;
    editingItem = li;
    addInput.value = li.firstElementChild!.textContent!;
    addButton.textContent = "Edit";
    addButton.style.backgroundColor = "green";
  }


  if(target.matches(".deleteBtn")){
    const parentLi = (target.parentElement as HTMLDivElement).parentElement as HTMLLIElement;
    console.log(parentLi);
    parentLi.remove()

  }



});

addButton.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLButtonElement;
  if (target.textContent == "Add") {
    const li = document.createElement("li") as HTMLLIElement;
    const div1 = document.createElement("div") as HTMLDivElement;
    const div2 = document.createElement("div") as HTMLDivElement;
    li.append(div1, div2);
    li.classList.add("individual-list");
    div1.textContent = addInput.value;
    const deleteBtn = document.createElement("button") as HTMLButtonElement;
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");
    div2.append(deleteBtn);
    usersList.append(li);
    addInput.value = "";
  }

  if (target.textContent == "Edit") {
    target.style.backgroundColor = "#007bff";
     const updatingValue = addInput.value
     target.textContent="Add";
     if(editingItem){
        const firstChild = editingItem.firstElementChild as HTMLDivElement;
        firstChild.textContent=updatingValue;
    }
     addInput.value=""
     editingItem=null;
}
});
