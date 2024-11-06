/**
 * This function should pass data to the register function in api/auth and handle the response
 */

export async function onRegister(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const data = await register({
      name,
      email,
      password,
    });
    console.log(data);

    localStorage.setItem("token", data.data.accessToken);

    const newUser = data.data;
    localStorage.setItem("newUser", JSON.stringify(newUser));
    alert("Registration successful!");
    window.location.href = "/";
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Registration failed. Please try again.");
  }
}
