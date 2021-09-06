function renderContact() {
    const main = document.querySelector("main");
    while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }
    main.className = ("contact");
    const title = document.createElement("h1");
    title.textContent = "CONTACT";
    main.append(title);
    const data = [
        { key: "CALL US", info: "4590-7899 / 4590-3456" },
        { key: "WRITE US", info: "lapizzeria@email.com" },
        { key: "VISIT US", info: "Calle Falsa 5750" },
    ];
    data.forEach(item => {
        const box = document.createElement("div");
        box.classList.add("box");
        const title = document.createElement("h2");
        title.textContent = item.key;
        const text = document.createElement("span");
        text.textContent = item.info;
        box.append(title, text);
        main.append(box);
    });
    const bar = document.createElement("div");
    bar.classList.add("bar");
    main.append(bar);
    const icons = ["fab fa-facebook-square", "fab fa-instagram-square", "fab fa-twitter-square"];
    icons.forEach(item => {
        const link = document.createElement("a");
        link.href = "#";
        const icon = document.createElement("i");
        icon.className = item;
        link.append(icon);
        bar.append(link);
    });
}

export default renderContact;