let checked = document.querySelector(".chick");
let addTask = document.querySelector(".add");
let inputTask = document.querySelector(".inp");
let container = document.querySelector(".infinity");
let containerlist = document.querySelectorAll(".infinity li");
let removeItem = document.querySelector(".delete");
containerlist.forEach((e) => {
  console.log(e);
});
addTask.addEventListener("click", () => {
  if (inputTask.value == "") {
    alert("You must add task first!");
    saveData();
  } else {
    let newchild = document.createElement("li");
    newchild.innerHTML = `<span class="flex items-center gap-4"
    ><img src="/images/unchecked.png" alt="" class="w-7 tick" /><span
      class="task tick cursor-pointer"
      >${inputTask.value}
    </span></span
  ><span class="text-gray-400 cursor-pointer delete">&#x2715;</span>`;
    newchild.classList.add("flex", "items-center", "justify-between");
    container.appendChild(newchild);
    inputTask.value = "";
    clickevents(newchild);
    saveData();
  }
});

function clickevents(onelement) {
  onelement.childNodes[1].addEventListener("click", () => {
    container.removeChild(onelement);
    saveData();
  });

  let ischecked = true;
  onelement.addEventListener("click", () => {
    onelement.childNodes[0].classList.toggle("line-through");
    if (ischecked) {
      onelement.childNodes[0].childNodes[0].src = "/images/checked.png";
      ischecked = false;
      saveData();
    } else {
      onelement.childNodes[0].childNodes[0].src = "/images/unchecked.png";
      ischecked = true;
      saveData();
    }
  });
}

function saveData() {
  localStorage.setItem("data", container.innerHTML);
}

function showData() {
  container.innerHTML = localStorage.getItem("data");
  containerlist.forEach((e) => {});
  const tasks = container.querySelectorAll("li");
  // Reattach click events to each task
  tasks.forEach((task) => {
    clickevents(task);
  });
}

showData();
