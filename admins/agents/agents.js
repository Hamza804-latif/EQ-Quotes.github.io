let data = [];
let table = "";
let tableBodyRef = document.querySelector(".tableBody");
const Load = async function (route) {
  console.log(route);
  let res = await fetch(`http://localhost:5000/agent/${route}`);
  data = await res.json();
  for (var item of data) {
    table += `<tr>
        <td>${item._id}</td>
        <td>${item.firstname}</td>
        <td>${item.lastname}</td>
        <td>${item.phonenumber}</td>
        <td>${item.email}</td>
        <td>${item.zipcode}</td>
        <td>${item.state}</td>
        <td>${item.createdAt}</td>
      </tr>`;
  }
  tableBodyRef.innerHTML = table;
};

const Search = async (route) => {
  let searchRef = document.querySelector(".search");
  let res = await fetch(
    `http://localhost:5000/agent/${route}/${searchRef.value}`
  );
  let dataRes = await res.json();
  data = dataRes;
  table = "";
  for (var item of data) {
    table += `<tr>
        <td>${item._id}</td>
        <td>${item.firstname}</td>
        <td>${item.lastname}</td>
        <td>${item.phonenumber}</td>
        <td>${item.email}</td>
        <td>${item.zipcode}</td>
        <td>${item.state}</td>
        <td>${item.createdAt}</td>
      </tr>`;
  }
  tableBodyRef.innerHTML = table;
};
