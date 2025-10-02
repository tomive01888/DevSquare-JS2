import { onRegister } from "../js/ui/auth/register.mjs";
import "../css/style.css";
const form = document.forms.register;

form.addEventListener("submit", onRegister);
