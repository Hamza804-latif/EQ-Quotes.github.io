let crossBtnRef = document.querySelector(".modal");
let modalboxRef = document.querySelector(".box");
let modalInputRef = document.querySelector(".zipInput");
let page;

console.log(typeof modalInputRef.value);

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
  if (modalInputRef.value && modalInputRef.value.length < 6) {
    console.log(modalInputRef.value);
    localStorage.setItem("zip", modalInputRef.value);
    window.location.href = `https://hamza804-latif.github.io/EQ-Quotes.github.io/${
      page ? page : "notfound.html"
    }?zip=${modalInputRef.value}`;
    page = null;
    modalInputRef.value = "";
    crossBtnRef.classList.add("hide");
  } else {
    alert("please enter values or value shoul less than 6");
  }
}
