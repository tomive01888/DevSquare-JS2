/**
 * This function should pass data to the login function in api/auth and handle the response
 */

export async function onLogin(event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const data = await login({
      email,
      password,
    });
    console.log(data);
    localStorage.setItem("token", data.data.accessToken);

    const adminUser = data.data;
    localStorage.setItem("adminUser", JSON.stringify(adminUser));
    window.location.href = "/";
    alert("login successfull");
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed. Please check your credentials and try again.");
  }
}
