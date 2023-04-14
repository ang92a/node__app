const btn = document.querySelector("#btn");
const name = document.querySelector(".name");
const pas = document.querySelector(".pas");

async function buttonHandler(event) {
  event.preventDefault();

  const user = {
    name: name.value,
    password: pas.value,
  };

  try {
    let res = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let data = await res.text();
    alert(data);
  } catch (error) {
    alert(error.massage);
  }
}

btn.addEventListener("click", buttonHandler);
