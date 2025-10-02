import { onRegister } from "../js/ui/auth/register.mjs";
import "../css/style.css";
import "../js/ui/component/toastService.mjs";

const form = document.forms.register;

form.addEventListener("submit", onRegister);
