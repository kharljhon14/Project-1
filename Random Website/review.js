const reviews =
    [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            name: "Princess Mae Anabeza",
            job: "Data Encoder",
            text: "He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and again tried to imagine it was the first time."
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=259&q=80",
            name: "Shiro Cat",
            job: "Cat",
            text: "It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. 'See daddy, I told you that they are real!' his daughter excitedly proclaimed."
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1529903543134-d2d0b6858e21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            name: "Kharl Cruz",
            job: "Student",
            text: "Her mom had warned her. She had been warned time and again, but she had refused to believe her. She had done everything right and she knew she would be rewarded for doing so with the promotion. So when the promotion was given to her main rival, it not only stung, it threw her belief system into disarray. It was her first big lesson in life."
        }
    ]

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");

const img = document.querySelector(".person-img");
const author = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

let currentIndex = 0;

function updateReview() {
    let item = reviews[currentIndex];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

window.addEventListener("DOMContentLoaded", function () {
    updateReview();
});

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex > reviews.length - 1) {
        currentIndex = 0;
    }
    updateReview();
});

prevBtn.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
    }
    updateReview();
});

