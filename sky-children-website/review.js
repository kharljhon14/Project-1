const reviews = [
    {
        id: 1,
        img: "https://miro.medium.com/max/3200/1*foKcoZ50q4cAzPHrVIPQYw.jpeg",
        name: "Shiro the Wild Cat",
        text: "Sky Children of the Light is the latest effort from Thatgamecompany, who succeeded in creating a game that feels both like a spiritual successor to Journey and like something completely new."
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2U-4h2OsCx8_Bg4R_S78KOrStNGCcFTVf0Q&usqp=CAU",
        name: "Marga the Veteran",
        text: "With a touch of endless runner, a dash of MMO, and just a sprinkling of puzzles, Sky: Children of the Light soars to lofty heights"
    },
    {
        id: 3,
        img: "https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/sky-children-of-the-light-switch/Switch-SkyChildrenoftheLight-hero.jpg",
        name: "Karl the Wanderer",
        text: "Among the constellations of the mobile galaxy, Sky: Children of the Light is one of the brightest stars."
    },
    {
        id: 4,
        img: "https://i.pinimg.com/originals/84/e8/9e/84e89e231774ab9c9d1a39ab4f0d71f9.jpg",
        name: "Moji the Moth",
        text: "Simply magnificent! The game brings you peace, the levels are beautiful, beautiful design, and easy to control"
    }
]

//buttons variable
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
//review items variable
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const text = document.getElementById("info");

let reviewIndex = 0;

//Event Listerner
window.addEventListener("DOMContentLoaded", function () {
    updateReview();
});

//buttons Event Listeners
prevBtn.addEventListener("click", function(){
    reviewIndex--;
    if(reviewIndex < 0){
        reviewIndex = reviews.length -1;
    }
    updateReview();
});

nextBtn.addEventListener("click", function(){
    reviewIndex++;
    if(reviewIndex > reviews.length -1 ){
        reviewIndex = 0;
    }
    updateReview();
})

//Update Review items function
function updateReview(){
    let item = reviews[reviewIndex];
    img.src = item.img;
    author.textContent = item.name;
    text.textContent = item.text;
}

