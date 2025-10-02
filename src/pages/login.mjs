import { onLogin } from "../js/ui/auth/login.mjs";
import "../css/style.css";
const form = document.forms.login;

form.addEventListener("submit", onLogin);
