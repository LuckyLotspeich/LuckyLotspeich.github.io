document.addEventListener("DOMContentLoaded", () => {
    // card options
    const cardArray = [
        {
            name: "blue shell", img: "img/nick-game/mario_blue_shell.png"
        },
        {
            name: "blue shell", img: "img/nick-game/mario_blue_shell.png"
        },
        {
            name: "coin", img: "img/nick-game/mario_coin.png"
        },
        {
            name: "coin", img: "img/nick-game/mario_coin.png"
        },
        {
            name: "fire flower", img: "img/nick-game/mario_fire_flower.png"
        },
        {
            name: "fire flower", img: "img/nick-game/mario_fire_flower.png"
        },
        {
            name: "leaf", img: "img/nick-game/mario_leaf.png"
        },
        {
            name: "leaf", img: "img/nick-game/mario_leaf.png"
        },
        {
            name: "mushroom", img: "img/nick-game/mario_mushroom.png"
        },
        {
            name: "mushroom", img: "img/nick-game/mario_mushroom.png"
        },
        {
            name: "star", img: "img/nick-game/mario_star.png"
        },
        {
            name: "star", img: "img/nick-game/mario_star.png"
        }
    ]

    // Randomizes the positions of the cards
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img")
            card.setAttribute("src", "img/nick-game/hidden_space.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match!")
            cards[optionOneId].setAttribute("src", "img/nick-game/filled_space.png")
            cards[optionTwoId].setAttribute("src", "img/nick-game/filled_space.png")
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute("src", "img/nick-game/hidden_space.png")
            cards[optionTwoId].setAttribute("src", "img/nick-game/hidden_space.png")
            alert("Please try again.")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You Won!"
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})