const LANG = localStorage.getItem("locale") || "ua";

function bindLangButton() {
    const uaButton = document.getElementById("lang-ua");
    const ruButton = document.getElementById("lang-ru");

    uaButton.addEventListener("click", () => {
        localStorage.setItem("locale", "ua");
        location.reload();
    });
    ruButton.addEventListener("click", () => {
        localStorage.setItem("locale", "ru");
        location.reload();
    });
}

function setLocale() {
    const uaButton = document.getElementById("lang-ua");
    const ruButton = document.getElementById("lang-ru");

    //const titleClassical   = LANG === "ua" ? "Класичні свічки" : "Классические свечи";
    const titleFigure     = LANG === "ua" ? "Фігурні свічки" : "Фигурные свечи";
    const titleFigure18   = LANG === "ua" ? "Фігурні свічки 18+" : "Фигурные свечи 18+";
    //const titleClassicalEl = document.getElementById("classical-candles-title");
    const titleFigureEl   = document.getElementById("figure-candles-title");
    const titleFigureEl18 = document.getElementById("figure-candles-title-18");

    if (LANG === "ua") {
        uaButton.classList.add("active");
        ruButton.classList.remove("active");
    } else {
        uaButton.classList.remove("active");
        ruButton.classList.add("active");
    }

    //titleClassicalEl.innerText = titleClassical;
    titleFigureEl.innerText = titleFigure;
}

function renderCard(item) {
    const wrapper       = document.createElement("div");
    const wrapperImg    = document.createElement("div");
    const image         = document.createElement("img");
    const content       = document.createElement("div");
    const headerContent = document.createElement("span");
    const metaSize      = document.createElement("div");
    const size          = document.createElement("span");
    const metaWeight    = document.createElement("div");
    const weight        = document.createElement("span");
    const description   = document.createElement("div");
    const wrapperPrice  = document.createElement("div");
    const basePrice     = document.createElement("h4");

    wrapper.classList.add("ui");
    wrapper.classList.add("card");

    wrapperImg.classList.add("image");
    image.src = `img/${item.image || "no-image.png"}`;
    image.alt = item.name;

    content.classList.add("content");
    headerContent.classList.add("header");
    metaSize.classList.add("meta");
    metaWeight.classList.add("meta");
    description.classList.add("description");

    wrapperPrice.classList.add("header");
    wrapperPrice.classList.add("content");

    wrapper.appendChild(wrapperImg);
    wrapper.appendChild(content);
    wrapper.appendChild(wrapperPrice);

    wrapperImg.appendChild(image);

    content.appendChild(headerContent);
    headerContent.appendChild(document.createTextNode(item.name));
    content.appendChild(metaSize);
    content.appendChild(metaWeight);
    content.appendChild(description);

    metaSize.appendChild(size);
    size.appendChild(document.createTextNode(item.size));

    metaWeight.appendChild(weight)
    weight.appendChild(document.createTextNode(item.weight));

    description.appendChild(document.createTextNode(item.article));

    wrapperPrice.appendChild(basePrice);
    wrapperPrice.appendChild(document.createTextNode(item.addPrice));
    basePrice.appendChild(document.createTextNode(item.basePrice));

    return wrapper;
}

function renderUnits(containerId, data) {
    const container = document.getElementById(containerId);

    data.map(item => {
        container.appendChild(renderCard(item));
    });
}

const classicalCandles = {
    "ua": [
        {
            name     : "Куля 8 см",
            size     : "Діаметр 8 см",
            weight   : "Вага 225 грам",
            article  : "Артикул: 001",
            addPrice : "З ароматом 80 гривень",
            basePrice: "70 гривень"
        },
        {
            name     : "Куля 10 см",
            size     : "Діаметр 10 см",
            weight   : "Вага 465 грам",
            article  : "Артикул: 002",
            addPrice : "З ароматом 130 гривень",
            basePrice: "140 гривень"
        }
    ],
    "ru": [
        {
            name     : "Шар 8 см",
            size     : "Диаметр 8 см",
            weight   : "Вес 225 грамм",
            article  : "Артикул: 001",
            addPrice : "С ароматом 80 гривен",
            basePrice: "70 гривен"
        },
        {
            name     : "Шар 10 см",
            size     : "Диаметр 10 см",
            weight   : "Вес 465 грамм",
            article  : "Артикул: 002",
            addPrice : "С ароматом 130 гривен",
            basePrice: "140 гривен"
        }
    ]
};

bindLangButton();
setLocale();

//renderUnits("classical-candles", classicalCandles[LANG]);
renderUnits("figure-candles", window.catalog[LANG].figureCandles);
renderUnits("figure-candles-18", window.catalog[LANG].figureCandles18);
