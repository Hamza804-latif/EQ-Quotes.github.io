let crossBtnRef = document.querySelector(".modal");
let modalboxRef = document.querySelector(".box");
let modalInputRef = document.querySelector(".zipInput");
let page;

modalboxRef.addEventListener("click", (event) => {
  event.stopPropagation();
});

function ShowModal(pageName) {
  page = pageName;
  modalInputRef.value = "";
  crossBtnRef.classList.remove("hide");
}
function ChangeDisplay() {
  crossBtnRef.classList.add("hide");
}
function Submit(event) {
  if (modalInputRef.value) {
    console.log(modalInputRef.value);
    localStorage.setItem("zip", modalInputRef.value);
    window.location.href = `/${page ? page : "notfound.html"}?zip=${
      modalInputRef.value
    }`;
    page = null;
    modalInputRef.value = "";
  } else {
    console.log("please enter values");
  }
}
