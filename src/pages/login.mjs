import { onLogin } from "../js/ui/auth/login.mjs";
import "../css/style.css";
import "../js/ui/component/toastService.mjs";
const form = document.forms.login;

form.addEventListener("submit", onLogin);
