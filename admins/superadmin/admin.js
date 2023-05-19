let data = [];
let path = "";
let id = "";
let table = "";
let tableBodyRef = document.querySelector(".tableBody");
const Load = async function (route) {
  path = route;
  CheckToken();
  let res = await fetch(`http://localhost:5000/agent/${route}`);
  data = await res.json();
  if (data?.length == 0) {
    tableBodyRef.innerHTML = "<tr><td colspan='100%'>No Data Found!</td></tr>";
  } else {
    for (var item of data) {
      table += `<tr>
        <td>${item._id}</td>
        <td>${item.firstname}</td>
        <td>${item.lastname}</td>
        <td>${item.phonenumber}</td>
        <td>${item.email}</td>
        <td>${item.zipcode}</td>
        <td>${item.state}</td>
        <td>${item.earn == "true" ? "Yes" : "No"}</td>
        <td>${item.creditscore}</td>
        <td>${item.createdAt}</td>
        <td class='buttons'><button onclick="Delete('${
          item._id
        }')">Delete</button><button onclick="Edit(${JSON.stringify(item)
        .split('"')
        .join("&quot;")})">Edit</button></td>

      </tr>`;
    }
    tableBodyRef.innerHTML = table;
  }
};

const Search = async (route) => {
  path = route;
  let searchRef = document.querySelector(".search");
  let res = await fetch(
    `http://localhost:5000/agent/${route}/${searchRef.value}`
  );
  let dataRes = await res.json();
  data = dataRes;
  table = "";
  if (data?.length == 0) {
    tableBodyRef.innerHTML = "<tr ><td colspan='100%'>No Data Found!</td></tr>";
  } else {
    for (var item of data) {
      table += `<tr>
        <td>${item._id}</td>
        <td>${item.firstname}</td>
        <td>${item.lastname}</td>
        <td>${item.phonenumber}</td>
        <td>${item.email}</td>
        <td>${item.zipcode}</td>
        <td>${item.state}</td>
        <td>${item.earn == "true" ? "Yes" : "No"}</td>
        <td>${item.creditscore}</td>
        <td>${item.createdAt}</td>
        <td class='buttons'><button onclick="Delete('${
          item._id
        }')">Delete</button><button onclick="Edit(${JSON.stringify(item)
        .split('"')
        .join("&quot;")})">Edit</button></td>
      </tr>`;
    }
    tableBodyRef.innerHTML = table;
  }
};
const Logout = () => {
  localStorage.removeItem("token2");
  window.location.href = "../../superadmin.html";
};

let CheckToken = async () => {
  let token = localStorage.getItem("token2");
  if (token) {
    try {
      let res = await fetch("http://localhost:5000/auth/verifytoken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      let data = await res.json();
      if (data?.status == 200) {
      } else {
        window.location.href = "../../superadmin.html";
      }
    } catch (error) {
      alert(error.message);
    }
  } else {
    window.location.href = "../../superadmin.html";
  }
};
const Delete = async (id) => {
  try {
    let res = await fetch(`http://localhost:5000/agent/${path}/${id}`, {
      method: "DELETE",
    });
    let data = await res.json();
    if (data.status == 200) {
      alert(data.msg);
      location.reload();
    }
  } catch (error) {
    alert(error.message);
  }
};

const Edit = (item) => {
  let id = document.querySelector(".leadId");
  let firstnameRef = document.querySelector(".firstname");
  let lastnameRef = document.querySelector(".lastname");
  let zipcodenameRef = document.querySelector(".zipcode");
  let numberRef = document.querySelector(".number");
  let emailRef = document.querySelector(".email");
  let selectOption = document.querySelector(".home");
  let stateRef = document.querySelector(".state");
  let score = document.querySelector(".score");
  id.innerHTML = item?._id;
  firstnameRef.value = item?.firstname;
  lastnameRef.value = item?.lastname;
  zipcodenameRef.value = item?.zipcode;
  numberRef.value = item?.phonenumber;
  emailRef.value = item?.email;
  selectOption.value = item?.earn == "true" ? "yes" : "no";
  stateRef.value = item?.state;
  score.value = item?.creditscore;

  let editDataMain = document.querySelector(".editDataMain");
  editDataMain.classList.remove("hide");
};
const UpdateData = async (route) => {
  let id = document.querySelector(".leadId");
  let firstnameRef = document.querySelector(".firstname");
  let lastnameRef = document.querySelector(".lastname");
  let zipcodenameRef = document.querySelector(".zipcode");
  let numberRef = document.querySelector(".number");
  let emailRef = document.querySelector(".email");
  let selectOption = document.querySelector(".home");
  let stateRef = document.querySelector(".state");
  let score = document.querySelector(".score");

  let data = {
    firstname: firstnameRef.value,
    lastname: lastnameRef.value,
    zipcode: zipcodenameRef.value,
    phonenumber: numberRef.value,
    email: emailRef.value,
    earn: selectOption.value == "yes" ? "true" : "false",
    state: stateRef.value,
    creditscore: score.value,
  };

  try {
    let res = await fetch(
      `http://localhost:5000/agent/${route}/${id.innerHTML}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let response = await res.json();
    if (response.status == 200) {
      alert(response.msg);
      location.reload();
    }
  } catch (error) {
    alert(error.message);
  }
  let editDataMain = document.querySelector(".editDataMain");
  editDataMain.classList.add("hide");
};

const CloseModal = () => {
  let editDataMain = document.querySelector(".editDataMain");
  editDataMain.classList.add("hide");
};
