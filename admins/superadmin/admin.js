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
        <td>${item.createdAt}</td>
        <td class='buttons'><button onclick="Delete('${
          item._id
        }')">Delete</button><button onclick="Edit()">Edit</button></td>

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
        <td>${item.createdAt}</td>
        <td class='buttons'><button onclick="Delete('${
          item._id
        }')">Delete</button><button onclick="Edit()">Edit</button></td>
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

const Edit = () => {
  let editDataMain = document.querySelector(".editDataMain");
  editDataMain.classList.remove("hide");
};
const UpdateData = () => {
  let editDataMain = document.querySelector(".editDataMain");
  editDataMain.classList.add("hide");
};
