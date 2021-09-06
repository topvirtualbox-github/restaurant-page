import "./css/normalize.css";
import "./css/style.css";
import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js";

const renderSite = (() => {

    // ===== Header =====
    const header = document.createElement("header");
    const home = document.createElement("button");
    home.textContent = "HOME";
    const menu = document.createElement("button");
    menu.textContent = "MENU";
    const contact = document.createElement("button");
    contact.textContent = "CONTACT";
    header.append(home, menu, contact);

    // ===== Main =====
    const main = document.createElement("main");

    // ===== Footer =====
    const footer = document.createElement("footer");
    const text = document.createElement("span");
    text.textContent = "by topvirtualbox |";
    const link = document.createElement("a");
    link.textContent = "Github";
    link.href = "https://github.com/topvirtualbox-github/restaurant-page";
    footer.append(text, link);

    // Append everything to the body
    const body = document.querySelector("body");
    body.append(header, main, footer);

    // Add event listeners
    window.addEventListener("load", renderHome);
    home.addEventListener("click", renderHome);
    menu.addEventListener("click", renderMenu);
    contact.addEventListener("click", renderContact);

})();