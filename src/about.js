import "./aboutStyles.css";

const loadAboutPage = () => {

    const wholeAboutPage = document.createElement("div");
    wholeAboutPage.className = "theAboutPage";

    // About Heading
    const aboutHeading = document.createElement("h1");
    aboutHeading.className = "about-heading";
    aboutHeading.textContent = "About Us";
    wholeAboutPage.appendChild(aboutHeading);

    // About Text
    const aboutText = document.createElement("p");
    aboutText.className = "about-text";
    aboutText.textContent =
        "`An Indian Restaurant` has been serving authentic, home-style food since 2003. We believe great meals are best shared — whether it's a quiet dinner for two or a celebration with the whole family. Stop by, or reach out to reserve your table.";
    wholeAboutPage.appendChild(aboutText);

    // Contact & Reservations Section Title
    const contactTitle = document.createElement("p");
    contactTitle.className = "section-title";
    contactTitle.textContent = "Contact & Reservations";
    wholeAboutPage.appendChild(contactTitle);

    // Contact List
    const contactList = document.createElement("ul");
    contactList.className = "contact-list";

    const contactItems = [
        {
            icon: "📞",
            label: "Phone (Table Booking)",
            value: "+1 (212) 555-0198",
        },
        {
            icon: "✉️",
            label: "Email",
            value: " tushar01@gmail.com",
        },
        {
            icon: "📍",
            label: "Address",
            value: "Birsanagar Jamshedpur, Near my home",
        },
    ];

    contactItems.forEach(({ icon, label, value }) => {
        const li = document.createElement("li");

        const iconDiv = document.createElement("div");
        iconDiv.className = "contact-icon";
        iconDiv.textContent = icon;

        const detailDiv = document.createElement("div");

        const labelSpan = document.createElement("span");
        labelSpan.className = "contact-label";
        labelSpan.textContent = label;

        const valueSpan = document.createElement("span");
        valueSpan.className = "contact-value";
        valueSpan.textContent = value;

        detailDiv.appendChild(labelSpan);
        detailDiv.appendChild(valueSpan);

        li.appendChild(iconDiv);
        li.appendChild(detailDiv);

        contactList.appendChild(li);
    });

    wholeAboutPage.appendChild(contactList);

    // Social Media Section Title
    const socialTitle = document.createElement("p");
    socialTitle.className = "section-title";
    socialTitle.textContent = "Find Us Online";
    wholeAboutPage.appendChild(socialTitle);

    // Social Grid
    const socialGrid = document.createElement("div");
    socialGrid.className = "social-grid";

    const socialItems = [
        { icon: "🅾", label: "Instagram" },
        { icon: "𝐟", label: "Facebook" },
        { icon: "𝕏", label: "Twitter / X" },
        { icon: "▶", label: "YouTube" },
    ];

    socialItems.forEach(({ icon, label }) => {
        const btn = document.createElement("button");
        btn.className = "social-btn";

        const iconSpan = document.createElement("span");
        iconSpan.textContent = icon;

        btn.appendChild(iconSpan);
        btn.appendChild(document.createTextNode(` ${label}`));

        socialGrid.appendChild(btn);
    });

    wholeAboutPage.appendChild(socialGrid);

    const content = document.getElementById("content");
    content.appendChild(wholeAboutPage);
};

export default loadAboutPage; 