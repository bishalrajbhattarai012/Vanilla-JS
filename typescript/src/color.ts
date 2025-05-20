const container = <HTMLDivElement>document.querySelector("#paletteContainer");
const generateBtn = <HTMLButtonElement>document.querySelector("#generateBtn");
const favLists = <HTMLDivElement>document.querySelector("#favoritesList");

window.addEventListener("DOMContentLoaded", () => {
  console.log("yo chalyo");
  const colors = JSON.parse(localStorage.getItem("colors") || "[]");
  




  for (let color of colors) {
        //   
        const div = document.createElement("div");
        div.classList.add("favoritePalette");
        div.textContent = color;
        div.style.backgroundColor = `#${color}`;
        favLists.append(div)
        // 
    }

});

function getRandomHexColor(): string {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return ("000000" + hex).slice(-6);
}

document.body.addEventListener("click", (e: Event) => {
  const target = <HTMLElement>e.target;
  if (target.matches("#generateBtn")) {
    const palette = [
      getRandomHexColor(),
      getRandomHexColor(),
      getRandomHexColor(),
      getRandomHexColor(),
    ];
    palette.forEach((color: string) => {
      const div = document.createElement("div");
      div.classList.add("colorBox");
      div.textContent = color;
      div.style.backgroundColor = `#${color}`;
      container.append(div);

      const favBtn = document.createElement("button");
      favBtn.classList.add("fav");
      favBtn.textContent = "❤️";
      favBtn.title = "Add to Favorites";
      favBtn.style.cursor = "pointer";
      favBtn.style.fontSize = "10px";
      div.append(favBtn);
    });
  }

  if (target.matches(".fav")) {
    const favButton = <HTMLButtonElement>target;
    const parentDiv = <HTMLDivElement>favButton.parentElement;
    const text = parentDiv.textContent;
    const colorHex = parentDiv.textContent?.slice(0, text!.length - 2) || "";
    const favColors = JSON.parse(localStorage.getItem("colors") || "[]");
    favColors.push(colorHex);

    localStorage.setItem("colors", JSON.stringify(favColors));
  }

  if (target.matches(".colorBox")) {
    const box = <HTMLDivElement>target;
    const text: string = box.textContent?.trim() || "";
    const colorHex = box.textContent?.slice(0, text.length - 2) || "";
    console.log(colorHex);

    navigator.clipboard
      .writeText(colorHex)
      .catch((err) => console.error("Failed to copy: ", err));
  }
});
