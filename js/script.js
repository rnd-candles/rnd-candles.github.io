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
    const titleFigure      = LANG === "ua" ? "Фігурні свічки" : "Фигурные свечи";
    //const titleClassicalEl = document.getElementById("classical-candles-title");
    const titleFigureEl    = document.getElementById("figure-candles-title");

    if (LANG === "ua") {
        uaButton.classList.add("active");
        ruButton.classList.remove("active");
    } else {
        uaButton.classList.remove("active");
        ruButton.classList.add("active");
    }

    //titleClassicalEl.innerText = titleClassical;
    titleFigureEl.innerText    = titleFigure;
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

const figureCandles = {
    "ua": [
        {
            name     : "Гарбузик",
            image    : "pumpkin_orange.jpg",
            size     : "Діаметр 3,5 см",
            weight   : "Вага 23 грам",
            article  : "Артикул: 1001",
            addPrice : "З ароматом 15 гривень",
            basePrice: "15 гривень",
            candlewick: 2
        },
        {
            name     : "Подарунок",
            image    : "gift_box_blue.jpg",
            size     : "Довжина, ширина і висота 3,5 см",
            weight   : "Вага 35 грам",
            article  : "Артикул: 1002",
            addPrice : "З ароматом 25 гривень",
            basePrice: "25 гривень",
            candlewick: 2
        },
        {
            name     : "Сота",
            image    : "cell_gray.jpg",
            size     : "Діаметр 6 см і висота 4 см",
            weight   : "Вага 80 грам",
            article  : "Артикул: 1003",
            addPrice : "З ароматом 40 гривень",
            basePrice: "35 гривень",
            candlewick: 2
        },
        {
            name     : "Листя",
            image    : "leaves_red.jpg",
            size     : "Діаметр 4,5 см і висота 7 см",
            weight   : "Вага 100 грам",
            article  : "Артикул: 1004",
            addPrice : "З ароматом 50 гривень",
            basePrice: "45 гривень",
            candlewick: 2
        },
        {
            name     : "Шишка",
            image    : "cone_brown.jpg",
            size     : "Діаметр 7 см і висота 8 см",
            weight   : "Вага 100 грам",
            article  : "Артикул: 1005",
            addPrice : "З ароматом 45 гривень",
            basePrice: "40 гривень",
            candlewick: 2
        },
        {
            name     : "Лотус",
            image    : "lotus_pink.jpg",
            size     : "Діаметр 7 см і висота 5 см",
            weight   : "Вага 75 грам",
            article  : "Артикул: 1006",
            addPrice : "З ароматом 50 гривень",
            basePrice: "45 гривень",
            candlewick: 3
        },
        {
            name     : "Зефірка",
            image    : "marshmallow_light_purple.jpg",
            size     : "Діаметр 8 см і висота 8 см",
            weight   : "Вага 110 грам",
            article  : "Артикул: 1007",
            addPrice : "З ароматом 55 гривень",
            basePrice: "50 гривень",
            candlewick: 2
        },
        {
            name     : "Вузол",
            image    : "node_pink.jpg",
            size     : "Діаметр 8 см і висота 7 см",
            weight   : "Вага 110 грам",
            article  : "Артикул: 1008",
            addPrice : "З ароматом 55 гривень",
            basePrice: "50 гривень",
            candlewick: 2
        },
        {
            name     : "В'язана свічка",
            image    : "knitting_orange.jpg",
            size     : "Діаметр 5 см і висота 7 см",
            weight   : "Вага 140 грам",
            article  : "Артикул: 1009",
            addPrice : "З ароматом 65 гривень",
            basePrice: "60 гривень",
            candlewick: 3
        },
        {
            name     : "Жіночий торс",
            image    : "woman_body-light_yellow.jpg",
            size     : "Висота 10 см",
            weight   : "Вага 85 грам",
            article  : "Артикул: 1010",
            addPrice : "З ароматом 65 гривень",
            basePrice: "60 гривень",
            candlewick: 2
        },
        {
            name     : "Чоловічий торс",
            image    : "man_body-light_yellow.jpg",
            size     : "Висота 10 см",
            weight   : "Вага 95 грам",
            article  : "Артикул: 1011",
            addPrice : "З ароматом 65 гривень",
            basePrice: "60 гривень",
            candlewick: 2
        }
    ],
    "ru": [
        {
            name     : "Тыква",
            image    : "pumpkin_orange.jpg",
            size     : "Диаметр 3,5 см",
            weight   : "Вес 23 грамм",
            article  : "Артикул: 1001",
            addPrice : "С ароматом 15 гривен",
            basePrice: "15 гривен",
            candlewick: 2
        },
        {
            name     : "Подарок",
            image    : "gift_box_blue.jpg",
            size     : "Длина, ширина и высота 3,5 см",
            weight   : "Вес 35 грамм",
            article  : "Артикул: 1002",
            addPrice : "С ароматом 25 гривен",
            basePrice: "25 гривен",
            candlewick: 2
        },
        {
            name     : "Сота",
            image    : "cell_gray.jpg",
            size     : "Диаметр 6 см и высота 4 см",
            weight   : "Вес 80 грамм",
            article  : "Артикул: 1003",
            addPrice : "С ароматом 40 гривен",
            basePrice: "35 гривен",
            candlewick: 2
        },
        {
            name     : "Листья",
            image    : "leaves_red.jpg",
            size     : "Диаметр 4,5 см и высота 7 см",
            weight   : "Вес 100 грамм",
            article  : "Артикул: 1004",
            addPrice : "С ароматом 50 гривен",
            basePrice: "45 гривен",
            candlewick: 2
        },
        {
            name     : "Шишка",
            image    : "cone_brown.jpg",
            size     : "Диаметр 7 см и высота 8 см",
            weight   : "Вес 100 грамм",
            article  : "Артикул: 1005",
            addPrice : "С ароматом 45 гривен",
            basePrice: "40 гривен",
            candlewick: 2
        },
        {
            name     : "Лотус",
            image    : "lotus_pink.jpg",
            size     : "Диаметр 7 см и высота 5 см",
            weight   : "Вес 75 грамм",
            article  : "Артикул: 1006",
            addPrice : "С ароматом 50 гривен",
            basePrice: "45 гривен",
            candlewick: 3
        },
        {
            name     : "Зефирка",
            image    : "marshmallow_light_purple.jpg",
            size     : "Диаметр 8 см и высота 8 см",
            weight   : "Вес 110 грамм",
            article  : "Артикул: 1007",
            addPrice : "С ароматом 55 гривен",
            basePrice: "50 гривен",
            candlewick: 2
        },
        {
            name     : "Узел",
            image    : "node_pink.jpg",
            size     : "Диаметр 8 см и высота 7 см",
            weight   : "Вес 110 грамм",
            article  : "Артикул: 1008",
            addPrice : "С ароматом 55 гривен",
            basePrice: "50 гривен",
            candlewick: 2
        },
        {
            name     : "Вязаная свеча",
            image    : "knitting_orange.jpg",
            size     : "Диаметр 5 см и высота 7 см",
            weight   : "Вес 140 грамм",
            article  : "Артикул: 1009",
            addPrice : "С ароматом 65 гривен",
            basePrice: "60 гривен",
            candlewick: 3
        },
        {
            name     : "Женский торс",
            image    : "woman_body-light_yellow.jpg",
            size     : "Высота 10 см",
            weight   : "Вес 85 грамм",
            article  : "Артикул: 1010",
            addPrice : "С ароматом 65 гривен",
            basePrice: "60 гривен",
            candlewick: 2
        },
        {
            name     : "Мужской торс",
            image    : "man_body-light_yellow.jpg",
            size     : "Высота 10 см",
            weight   : "Вес 85 грамм",
            article  : "Артикул: 1011",
            addPrice : "С ароматом 65 гривен",
            basePrice: "60 гривен",
            candlewick: 2
        }
    ]
};

bindLangButton();
setLocale();

//renderUnits("classical-candles", classicalCandles[LANG]);
renderUnits("figure-candles", figureCandles[LANG]);
