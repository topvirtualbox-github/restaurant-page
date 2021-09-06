function renderHome() {
    const main = document.querySelector("main");
    while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }
    main.className = ("home");
    const title = document.createElement("h1");
    title.textContent = "LA PIZZERIA";
    main.append(title);
}

export default renderHome;