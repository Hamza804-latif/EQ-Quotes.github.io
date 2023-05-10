const usernameRef = document.querySelector(".username");
const passwordRef = document.querySelector(".password");
const LoginLoad = async () => {
  try {
    let token = localStorage.getItem("token");
    let res = await fetch("http://localhost:5000/auth/verifytoken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    let data = await res.json();
    if (data.status == 200) {
      window.location.href = "../../agentHomeInsurance.html";
    } else {
      alert("Session expired login again");
    }
  } catch (error) {
    alert(error.message);
  }
};

const Login = async () => {
  try {
    if (usernameRef.value && passwordRef.value) {
      let res = await fetch("http://localhost:5000/auth/agent/login", {
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
        localStorage.setItem("token", data?.token);
        LoginLoad();
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