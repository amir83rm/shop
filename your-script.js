document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('pageTitle').innerText = "GameShop";

    
    const ps5Section = document.getElementById('ps5');

    const ps5Games = [
        { title: "Spider-Man: Miles Morales", price: "$49.99", image: "imag/GUEST_dd3c708b-e984-48ff-99b4-b576067b783b.jpeg" },
        { title: "Demon's Souls", price: "$59.99", image: "imag/Demons-Souls---PlayStation-5.jpeg" },
        
    ];

    ps5Games.forEach(game => {
        const gameCard = createGameCard(game);
        ps5Section.appendChild(gameCard);
    });

    
    const xboxSection = document.getElementById('xbox');

    const xboxGames = [
        { title: "Halo Infinite", price: "$59.99", image: "imag/GUEST_e695aaa6-01f6-4af5-b4b5-e96ce8092497.jpeg" },
        { title: "Forza Horizon 5", price: "$49.99", image: "imag/ForzaHorizon5XSX.jpeg" },
        
    ];

    xboxGames.forEach(game => {
        const gameCard = createGameCard(game);
        xboxSection.appendChild(gameCard);
    });
});

function createGameCard(game) {
    const gameCard = document.createElement('div');
    gameCard.classList.add('gameCard');

    const gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameImage.alt = game.title;

    const gameTitle = document.createElement('h3');
    gameTitle.innerText = game.title;

    const gamePrice = document.createElement('p');
     //

    gameCard.appendChild(gameImage);
    gameCard.appendChild(gameTitle);
    gameCard.appendChild(gamePrice);

    return gameCard;
}

const ps5Section = document.getElementById('ps5');

const ps5Games = [
    { title: "Spider-Man: Miles Morales", price: "$49.99", image: "imag/marvels-spider-man-miles-morales-ps5-cover.webp", description: "A thrilling adventure in the Spider-Man universe." },
    { title: "FC 24", price: "$59.99", image: "imag/f823673fcb508f65dc85d1f93be9ec34e435ef1b_1695811725.jpeg", description: "Face the challenges of the mysterious land of Boletaria." },
    { title: "Ratchet & Clank: Rift Apart", price: "$59.99", image: "imag/9d7cbf94ed9b43cb52187fbe53d6f3d484d6751c_1628415413.jpeg", description: "Embark on an interdimensional adventure with Ratchet and Clank." },
    { title: "Returnal", price: "$69.99", image: "imag/Returnal_cover_art.jpeg", description: "Uncover the mysteries of an alien planet in this intense roguelike." },

];

ps5Games.forEach(game => {
    const gameCard = createGameCard(game);
    ps5Section.appendChild(gameCard);
});


const xboxSection = document.getElementById('xbox');

const xboxGames = [
    { title: "Halo Infinite", price: "$59.99", image: "imag/GUEST_e695aaa6-01f6-4af5-b4b5-e96ce8092497.jpeg", description: "Join Master Chief on a new epic adventure." },
    { title: "Forza Horizon 5", price: "$49.99", image: "imag/ForzaHorizon5XSX.jpeg", description: "Experience the beauty and thrill of open-world racing." },
    { title: "Gears 5", price: "$39.99", image: "imag/Gears_5_cover_art.png", description: "Fight against the Swarm and uncover the truth behind the Locusts." },
    { title: "FIFA 22", price: "$49.99", image: "imag/51ffb5d8587c0853567545404de35d6b-l.webp", description: "Enjoy the latest installment in the FIFA series with new features and gameplay." },

];

xboxGames.forEach(game => {
    const gameCard = createGameCard(game);
    xboxSection.appendChild(gameCard);
});



const capsSection = document.getElementById('caps');

const caps = [
    { title: "Logo Embroidered Cap", price: "$29.99", image: "imag/embroidered-caps.webp", description: "Classic cap with embroidered logo." },
    { title: "Graphic Print Snapback", price: "$34.99", image: "imag/Crenshaloha.jpeg", description: "Snapback cap with stylish graphic print." },
    
];

caps.forEach(cap => {
    const capCard = createCapCard(cap);
    capsSection.appendChild(capCard);
});
function createCapCard(cap) {
    const capCard = document.createElement('div');
    capCard.classList.add('capCard');

    const capImage = document.createElement('img');
    capImage.src = cap.image;
    capImage.alt = cap.title;

    const capTitle = document.createElement('h3');
    capTitle.innerText = cap.title;

    const capDescription = document.createElement('p');
    capDescription.innerText = cap.description;

    const capPrice = document.createElement('p');
   

    const buyButton = document.createElement('button');
    buyButton.innerText = "Buy Now";
    buyButton.addEventListener('click', function () {
        alert(`Thank you for buying ${cap.title}!`);
    });

    capCard.appendChild(capImage);
    capCard.appendChild(capTitle);
    capCard.appendChild(capDescription);
    capCard.appendChild(capPrice);
    capCard.appendChild(buyButton);

    return capCard;
}
///////
document.addEventListener('DOMContentLoaded', function () {
    

    const allGameCards = document.querySelectorAll('.gameCard');

    allGameCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            card.style.backgroundColor = '#e0e0e0'; 
        });

        card.addEventListener('mouseleave', function () {
            card.style.backgroundColor = '#f9f9f9'; 
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
  

  
    const allGameTitles = document.querySelectorAll('.gameCard h3');

    allGameTitles.forEach(title => {
        title.addEventListener('click', function () {
            const randomColor = getRandomColor(); 
            title.style.color = randomColor;
        });
    });

    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});



const consolesSection = document.getElementById('consoles');

const consoles = [
    { title: "PlayStation 5", price: "$499.99", image: "imag/https---hypebeast.com-image-2023-07-microsoft-sony-playstation-5-slim-pro-reveal-info-000.webp", description: "Experience the next generation of gaming with PlayStation 5." },
    { title: "Xbox Series X", price: "$499.99", image: "imag/Xbox-Series-X-Video-Game-Console-Black.webp", description: "Unleash the power of Xbox Series X for unparalleled gaming." },

];

consoles.forEach(console => {
    const consoleCard = createConsoleCard(console);
    consolesSection.appendChild(consoleCard);
});
function createConsoleCard(console) {
    const consoleCard = document.createElement('div');
    consoleCard.classList.add('consoleCard');

    const consoleImage = document.createElement('img');
    consoleImage.src = console.image;
    consoleImage.alt = console.title;

    const consoleTitle = document.createElement('h3');
    consoleTitle.innerText = console.title;

    const consoleDescription = document.createElement('p');
    consoleDescription.innerText = console.description;

    const consolePrice = document.createElement('p');


    const buyButton = document.createElement('button');
    buyButton.innerText = "Buy Now";
    buyButton.addEventListener('click', function () {
        alert(`Thank you for buying ${console.title}!`);
    });

    consoleCard.appendChild(consoleImage);
    consoleCard.appendChild(consoleTitle);
    consoleCard.appendChild(consoleDescription);
    consoleCard.appendChild(consolePrice);
    consoleCard.appendChild(buyButton);

    return consoleCard;
}
document.addEventListener('DOMContentLoaded', function () {
  

   
    const menuItems = [
     
        { text: "Products", link: "#products" },
        { text: "About Us", link: "#about" },
        { text: "Contact", link: "#contact" },
       
    ];

    const nav = document.querySelector('nav');
    const ul = document.createElement('ul');

    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = item.link;
        a.innerText = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
});
document.addEventListener('DOMContentLoaded', function () {


    
    const gameExplanations = {
        spiderman: "A thrilling adventure in the Spider-Man universe. Swing through New York City and face new challenges.",
        demonsouls: "Face the challenges of the mysterious land of Boletaria.",
        ratchet: "Embark on an interdimensional adventure with Ratchet and Clank.",
        returnal: "Uncover the mysteries of an alien planet in this intense roguelike."
        
    };

    
    window.buyGame = function (gameTitle) {
        alert(`Thank you for buying ${gameTitle}!`);
    };

    
    Object.keys(gameExplanations).forEach(gameId => {
        const gameCard = document.getElementById(gameId);
        const explanation = gameExplanations[gameId];

        gameCard.addEventListener('mouseenter', function () {
            alert(explanation);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const dynamicContentContainer = document.getElementById('dynamicContent');
    const loadContentButton = document.getElementById('loadContentButton');

    loadContentButton.addEventListener('click', function () {
        // Simulate fetching content from a server
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                // Update the content container with the fetched data
                dynamicContentContainer.innerHTML = `
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                `;
            })
            .catch(error => console.error('Error fetching content:', error));
    });
});

/////
document.addEventListener('DOMContentLoaded', function () {
    const gameListContainer = document.getElementById('gameList');

    
    fetch('your-api-endpoint-for-game-data')
        .then(response => response.json())
        .then(data => {
            
            data.games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.className = 'gameCard';
                gameCard.innerHTML = `
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <p>Rating: ${game.rating}/10</p>
                    <!-- Add more details as needed -->
                `;
                gameListContainer.appendChild(gameCard);
            });
        })
        .catch(error => console.error('Error fetching game data:', error));
});
document.addEventListener('DOMContentLoaded', function () {
    const gameListContainer = document.getElementById('gameList');
    const paginationContainer = document.getElementById('pagination');
    const itemsPerPage = 5; 
    let currentPage = 1;

    
    const fetchGameData = async () => {
        try {
            const response = await fetch('your-api-endpoint-for-game-data');
            const data = await response.json();
            return data.games;
        } catch (error) {
            console.error('Error fetching game data:', error);
            return [];
        }
    };

    const displayGames = async () => {
        const games = await fetchGameData();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        gameListContainer.innerHTML = '';
        for (let i = startIndex; i < endIndex && i < games.length; i++) {
            const game = games[i];
            const gameCard = document.createElement('div');
            gameCard.className = 'gameCard';
            gameCard.innerHTML = `
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <p>Rating: ${game.rating}/10</p>
                <!-- Add more details as needed -->
            `;
            gameListContainer.appendChild(gameCard);
        }

        updatePagination(games.length);
    };

    const updatePagination = (totalItems) => {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayGames();
            });

            paginationContainer.appendChild(pageButton);
        }
    };

    displayGames();
});