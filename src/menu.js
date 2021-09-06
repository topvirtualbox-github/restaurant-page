function renderMenu() {
    const main = document.querySelector("main");
    while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }
    main.className = ("menu");
    const title = document.createElement("h1");
    title.textContent = "MENU";
    main.append(title);
    const menu = [
        { name: "Muzzarella", info: "Salsa, muzzarella y aceitunas", price: "$480" },
        { name: "Provolone", info: "Salsa, muzzarella, provolone y aceitunas", price: "$580" },
        { name: "Napolitana", info: "Salsa, muzzarella, jamón, tomate, provenzal y aceitunas", price: "$580" },
        { name: "Cuatro Quesos", info: "Muzzarella, parmesano, provolone y roquefort", price: "$600" },
        { name: "Margarita", info: "Salsa, muzzarella y albahaca", price: "$530" },
        { name: "Primavera", info: "Salsa, muzzarella, tomate, jamón y huevo", price: "$600" }
    ];
    menu.forEach(item => {
        const box = document.createElement("div");
        box.classList.add("box");
        const title = document.createElement("h2");
        title.textContent = item.name;
        const text = document.createElement("p");
        text.textContent = item.info;
        const price = document.createElement("span");
        price.textContent = item.price;
        box.append(title, text, price);
        main.append(box);
    });
}

export default renderMenu;