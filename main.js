let books = [
    {
        title: "Malowany człowiek",
        description:
            "Zaszczuta i zdziesiątkowana ludzkość przeklina noc. Z każdym zmierzchem, w oparach mgły, nadchodzą opętane żądzą mordu bestie. Przerażeni ludzie chronią się za magicznymi runami. Usiłują wymodlić dla siebie i najbliższych kolejny dzień życia. Rzeź ustaje bladym świtem, gdy światło zapędza demony z powrotem w Otchłań.",
    },
    {
        title: "Droga Królów",
        description:
            "Obserwujemy cztery postaci. Pierwszą jest chirurg, zmuszony do porzucenia swej sztuki i zostania żołnierzem w najbardziej brutalnej wojnie naszych czasów. Drugą – skrytobójca, morderca, który płacze, kiedy zabija. Trzecia osoba to oszust, młoda kobieta skrywająca za płaszczem kłamstw swoją prawdziwą naturę. Ostatnią jest arcyksiążę, wojownik, owładnięty żądzą krwi.",
    },
    {
        title: "Diuna",
        description:
            "Arrakis, zwana Diuną, to jedyne we wszechświecie źródło melanżu – substancji przedłużającej życie, umożliwiającej odbywanie podróży kosmicznych i przewidywanie przyszłości. Z rozkazu Padyszacha Imperatora Szaddama IV rządzący Diuną Harkonnenowie opuszczają swe największe źródło dochodów. Planetę otrzymują w lenno Atrydzi, ich zaciekli wrogowie. Zwycięstwo księcia Leto Atrydy jest jednak pozorne. Przejęcie planety ukartowano. W odpowiedzi na atak połączonych sił Imperium i Harkonnenów dziedzic rodu Atrydów, Paul - końcowe niemal ogniwo planu eugenicznego Bene Gesserit – staje na czele rdzennych mieszkańców Diuny i próbuje zdobyć imperialny tron.",
    },
    {
        title: "Harry Potter i Kamień Filozoficzny",
        description:
            "Harry Potter, sierota i podrzutek, od niemowlęcia wychowywany był przez ciotkę i wuja, którzy traktowali go jak piąte koło u wozu. Pochodzenie chłopca owiane jest tajemnicą; jedyną pamiątką Harry`ego z przeszłości jest zagadkowa blizna na czole. Skąd jednak biorą się niesamowite zjawiska, które towarzyszą nieświadomemu niczego Potterowi? Wszystko zmienia się w dniu jedenastych urodzin chłopca, kiedy dowiaduje się o istnieniu świata, o którym nie miał dotąd pojęcia. Nowe wydanie książki o najsłynniejszym czarodzieju świata różni się od poprzednich nie tylko okładką, ale i wnętrzem – po raz pierwszy na początku każdego tomu pojawi się mapka Hogwartu i okolic, początki rozdziałów ozdobione będą specjalnymi gwiazdkami, a na końcu pierwszego tomu na Czytelników czeka coś zupełnie wyjątkowego – akt personalny J.K. Rowling, z którego można dowiedzieć się, jakie jest ulubione zwierzę czy bohater literacki autorki.",
    },
    {
        title: "Droga Królów2",
        description:
            "Obserwujemy cztery postaci. Pierwszą jest chirurg, zmuszony do porzucenia swej sztuki i zostania żołnierzem w najbardziej brutalnej wojnie naszych czasów. Drugą – skrytobójca, morderca, który płacze, kiedy zabija. Trzecia osoba to oszust, młoda kobieta skrywająca za płaszczem kłamstw swoją prawdziwą naturę. Ostatnią jest arcyksiążę, wojownik, owładnięty żądzą krwi.",
    },
];

function show() {
    const grid = document.getElementById("grid");
    console.log(grid);

    grid.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        const divBookItem = document.createElement("div");
        const divtopBook = document.createElement("div");
        const paragraftopBookTitle = document.createElement("h3");
        const parafgrafTopBookIcon = document.createElement("p");
        const divBodyBook = document.createElement("div");
        const paragrafDescriptionBook = document.createElement("p");
        const divbottomBook = document.createElement("div");
        const btnEdite = document.createElement("button");
        const btnDelete = document.createElement("button");

        btnDelete.onclick = () => deleteBook(books[i].title);
        btnDelete.setAttribute("class", "main-btn-delete");

        divBookItem.setAttribute("class", "ksiazka");

        btnDelete.setAttribute("class", "butn");
        btnEdite.setAttribute("class", "butn");

        paragraftopBookTitle.innerText = books[i].title;
        paragrafDescriptionBook.innerText = books[i].description;
        btnEdite.innerText = "Edytuj";
        btnDelete.innerText = "Usuń";

        divtopBook.appendChild(paragraftopBookTitle);
        divtopBook.appendChild(parafgrafTopBookIcon);
        divBodyBook.appendChild(paragrafDescriptionBook);
        divbottomBook.appendChild(btnEdite);
        divbottomBook.appendChild(btnDelete);
        divBookItem.appendChild(divtopBook);
        divBookItem.appendChild(divBodyBook);
        divBookItem.appendChild(divbottomBook);

        grid.appendChild(divBookItem);
    }
}

show();

function deleteBook(title) {
    console.log(title);
    books = books.filter((item) => item.title !== title);
    show();
}
function wyslij() {
    const desc = document.getElementById("desc").value;
    const tytol = document.getElementById("tytol").value;
    books.push({ title: tytol, description: desc });
    show();
}
