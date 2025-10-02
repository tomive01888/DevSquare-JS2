/**
 * Takes the logged user to his/her own profile page using localStorage
 * @import goToProfilePage() : at any place header is accessible
 * @method / always make sure in header there is an <a> element with the id "goProfileBtn"
 *
 */
export function goToProfilePage() {
  document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("adminUser"));

    const goToProfileBtn = document.getElementById("go-profile-btn");
    goToProfileBtn.addEventListener("click", () => {
      goToProfileBtn.href = `/profile/?profile=${user.name}`;
    });
  });
}
