import "./menuStyles.css";

import paneerTikkaImage from "./images/paneerTikka.jpg";
import chickenLollipopImage from "./images/chickenLollipop.jpg";
import butterChickenImage from "./images/butterChicken.jpg";
import dalMakhaniImage from "./images/dalMakhani.jpg";
import biryaniImage from "./images/biryani.jpg";
import vegPulaoImage from "./images/vegPulao.jpg";
import gulabJamunImage from "./images/gulabJamun.jpg";
import rasgullaImage from "./images/rasgulla.jpg";

const loadMenuPage = () => {

    const menuData = [
        {
            category: "Starters",
            items: [
                { img: paneerTikkaImage, name: "Paneer Tikka", desc: "Grilled cottage cheese with spices" },
                { img: chickenLollipopImage, name: "Chicken Lollipop", desc: "Crispy fried chicken wings" },
            ],
        },
        {
            category: "Main Course",
            items: [
                { img: butterChickenImage, name: "Butter Chicken", desc: "Creamy tomato-based chicken curry" },
                { img: dalMakhaniImage, name: "Dal Makhani", desc: "Slow-cooked black lentils" },
            ],
        },
        {
            category: "Rice & Biryani",
            items: [
                { img: biryaniImage, name: "Biryani", desc: "Fragrant basmati rice with spices" },
                { img: vegPulaoImage, name: "Veg Pulao", desc: "Rice cooked with fresh vegetables" },
            ],
        },
        {
            category: "Desserts",
            items: [
                { img: gulabJamunImage, name: "Gulab Jamun", desc: "Sweet syrupy milk dumplings" },
                { img: rasgullaImage, name: "Rasgulla", desc: "Soft and spongy sweet balls" },
            ],
        },
    ];

    // Build section
    const section = document.createElement("section");
    section.className = "menu";

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";
    section.appendChild(heading);

    // Build each category
    menuData.forEach(({ category, items }) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "menu-category";

        const categoryHeading = document.createElement("h2");
        categoryHeading.textContent = category;
        categoryDiv.appendChild(categoryHeading);

        const itemsDiv = document.createElement("div");
        itemsDiv.className = "menu-items";

        items.forEach(({ img, name, desc }) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "menu-item";

            const image = document.createElement("img");
            image.src = img;
            image.alt = "a food item";
            image.className = "menu-img";

            const textDiv = document.createElement("div");

            const itemName = document.createElement("h3");
            itemName.textContent = name;

            const itemDesc = document.createElement("p");
            itemDesc.textContent = desc;

            textDiv.appendChild(itemName);
            textDiv.appendChild(itemDesc);

            itemDiv.appendChild(image);
            itemDiv.appendChild(textDiv);

            itemsDiv.appendChild(itemDiv);
        });

        categoryDiv.appendChild(itemsDiv);
        section.appendChild(categoryDiv);
    });

    // Insert into #content
    document.getElementById("content").appendChild(section);

};

export default loadMenuPage; 