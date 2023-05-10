const usernameRef = document.querySelector(".username");
const passwordRef = document.querySelector(".password");
const LoginLoad = async (key) => {
  try {
    let token = localStorage.getItem(`${key}`);
    console.log("tok", token);
    let res = await fetch("http://localhost:5000/auth/verifytoken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    let data = await res.json();
    if (data.status == 200) {
      if (key == "token") {
        window.location.href = "../../agentHomeInsurance.html";
      } else {
        window.location.href = "../../adminHomeInsurance.html";
      }
    } else {
      alert("Session expired login again");
    }
  } catch (error) {
    alert(error.message);
  }
};

const Login = async (route, key) => {
  try {
    if (usernameRef.value && passwordRef.value) {
      let res = await fetch(`http://localhost:5000/auth/${route}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.value,
          password: passwordRef.value,
        }),
      });
      let data = await res.json();
      if (data?.status == 200) {
        localStorage.setItem(`${key}`, data?.token);
        LoginLoad(`${key}`);
      } else {
        alert(data?.msg);
      }
    } else {
      alert("please enter valid data");
    }
  } catch (error) {
    alert(error.message);
  }
};
