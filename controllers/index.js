let crossBtnRef = document.querySelector(".modal");
let modalboxRef = document.querySelector(".box");
let modalInputRef = document.querySelector(".zipInput");
let error = document.querySelector(".error");
let page;
let formData = {
  firstname: "",
  lastname: "",
  email: "",
  phonenumber: "",
  state: "",
  earn: "false",
  creditscore: "",
};

modalboxRef.addEventListener("click", (event) => {
  event?.stopPropagation();
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

function GetFormData(event) {
  let elem = event.target;
  let { name, value } = event.target;
  if (value == "") {
    elem.setAttribute("style", "outline:1.5px solid red");
    formData = { ...formData, [name]: value };
  } else if (name === "email") {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(value)) {
      formData = { ...formData, [name]: value };
      elem.setAttribute("style", "outline:1px solid green");
    } else {
      elem.setAttribute("style", "outline:1.5px solid red");
      formData = { ...formData, [name]: value };
    }
  } else if (name === "phonenumber") {
    console.log(value);
    let numberFormat =
      /(^(\(?[0-9]\)?){3,3}[-]?([0-9]{3,3})[-]?([0-9]{4,4})$)/g;
    if (numberFormat.test(value)) {
      formData = { ...formData, [name]: value };
      elem.setAttribute("style", "outline:1px solid green");
    } else {
      elem.setAttribute("style", "outline:1.5px solid red");
      formData = { ...formData, [name]: value };
    }
  } else {
    elem.setAttribute("style", "outline:1px solid green");
    formData = { ...formData, [name]: value };
    console.log(formData);
  }
}

async function SendMessage(event) {
  event.preventDefault();
  let { firstname, lastname, email, phonenumber, state, creditscore } =
    formData;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let numberFormat = /^[0-9]{3,3}-?[0-9]{3,3}-?[0-9]{4,4}$/;

  if (
    (firstname &&
      lastname &&
      email &&
      mailformat.test(email) &&
      phonenumber &&
      numberFormat.test(phonenumber),
    state && creditscore)
  ) {
    let data = await fetch("http://localhost:5000/clients/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(data);
  } else {
    alert("please fill valid data");
  }
}
