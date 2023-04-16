let crossBtnRef = document.querySelector(".modal");
let modalboxRef = document.querySelector(".box");
let modalInputRef = document.querySelector(".zipInput");
let error = document.querySelector(".error");
let page;

console.log(error);

modalboxRef.addEventListener("click", (event) => {
  event.stopPropagation();
});

function ShowModal(pageName) {
  page = pageName;
  modalInputRef.value = "";
  crossBtnRef.classList.remove("hide");
  error.classList.add("hide");
}
function ChangeDisplay() {
  crossBtnRef.classList.add("hide");
  error.classList.add("hide");
}
function Submit(event) {
  if (modalInputRef.value && modalInputRef.value.length == 5) {
    error.classList.add("hide");
    localStorage.setItem("zip", modalInputRef.value);
    window.location.href = `https://hamza804-latif.github.io/EQ-Quotes.github.io/${
      page ? page : "notfound.html"
    }?zip=${modalInputRef.value}`;
    page = null;
    modalInputRef.value = "";
    crossBtnRef.classList.add("hide");
  } else {
    error.classList.remove("hide");
  }
}
