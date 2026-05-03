import "./homeStyles.css";

import butterChickenImage from "./images/butterChicken.jpg";
import paneerTikkaImage from "./images/paneerTikka.jpg";
import biryaniImage from "./images/biryani.jpg";

const loadHomePage = () => {

    const content = document.getElementById("content");

    // ── Hero Section ──────────────────────────────────────────
    const hero = document.createElement("section");
    hero.className = "hero";

    const heroH1 = document.createElement("h1");
    heroH1.textContent = "An Indian Restaurant";

    const heroP = document.createElement("p");
    heroP.textContent = "Authentic Indian Taste, Made with Love";

    hero.appendChild(heroH1);
    hero.appendChild(heroP);

    // ── Specials Section ──────────────────────────────────────
    const specials = document.createElement("section");
    specials.className = "specials";

    const specialsH2 = document.createElement("h2");
    specialsH2.textContent = "Our Specials";

    const cards = document.createElement("div");
    cards.className = "cards";

    const menuItems = [
        { src: butterChickenImage, name: "Butter Chicken", desc: "Rich, creamy and full of flavor." },
        { src: paneerTikkaImage, name: "Paneer Tikka", desc: "Grilled to perfection with spices." },
        { src: biryaniImage, name: "Biryani", desc: "Fragrant rice with authentic spices." },
    ];

    menuItems.forEach(({ src, name, desc }) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = src;
        img.alt = "a food item";

        const h3 = document.createElement("h3");
        h3.textContent = name;

        const p = document.createElement("p");
        p.textContent = desc;

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(p);
        cards.appendChild(card);
    });

    specials.appendChild(specialsH2);
    specials.appendChild(cards);

    // ── About Section ─────────────────────────────────────────
    const about = document.createElement("section");
    about.className = "about";

    const aboutP = document.createElement("p");
    aboutP.textContent = "© 2026 An Indian Restaurant. All rights reserved.";

    about.appendChild(aboutP);

    // ── Insert all into #content ───────────────────────────────
    content.appendChild(hero);
    content.appendChild(specials);
    content.appendChild(about);

};

export default loadHomePage; 